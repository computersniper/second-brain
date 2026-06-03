const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(process.argv[2] || process.cwd());
const DEFAULT_OUTPUT_DIR = path.resolve(
  path.dirname(ROOT),
  `${path.basename(ROOT)}-github-view`
);
const OUTPUT_DIR = path.resolve(process.argv[3] || DEFAULT_OUTPUT_DIR);
const RAW_IMAGE_BASE =
  process.env.GITHUB_VIEW_RAW_IMAGE_BASE ||
  "https://raw.githubusercontent.com/computersniper/second-brain/main";

const SKIP_DIRS = new Set([
  ".git",
  ".obsidian",
  ".githooks",
  "GitHub View",
]);

const IMAGE_EXTENSIONS = new Set([
  ".png",
  ".jpg",
  ".jpeg",
  ".gif",
  ".webp",
  ".svg",
]);

function toPosix(value) {
  return value.split(path.sep).join("/");
}

function walk(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name.startsWith(".") && SKIP_DIRS.has(entry.name)) continue;
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (!SKIP_DIRS.has(entry.name)) walk(fullPath, files);
    } else {
      files.push(fullPath);
    }
  }
  return files;
}

function ensureCleanDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
  for (const entry of fs.readdirSync(dir)) {
    if (entry === ".git") continue;
    fs.rmSync(path.join(dir, entry), { recursive: true, force: true });
  }
}

function isMarkdown(file) {
  return path.extname(file).toLowerCase() === ".md";
}

function isImageName(target) {
  return IMAGE_EXTENSIONS.has(path.extname(target.split("#")[0]).toLowerCase());
}

function encodePathForMarkdown(relativePath) {
  return toPosix(relativePath)
    .split("/")
    .map((part) => encodeURIComponent(part))
    .join("/");
}

function githubSlug(heading) {
  return heading
    .trim()
    .toLowerCase()
    .replace(/[`*_~()[\]{}<>:;'",.!?\\/|+=#$%^&@]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

function parseWikiTarget(rawTarget) {
  const [targetAndHeading, alias] = rawTarget.split("|");
  const hashIndex = targetAndHeading.indexOf("#");
  if (hashIndex === -1) {
    return {
      noteName: targetAndHeading.trim(),
      heading: "",
      alias: (alias || targetAndHeading).trim(),
    };
  }
  const noteName = targetAndHeading.slice(0, hashIndex).trim();
  const heading = targetAndHeading.slice(hashIndex + 1).trim();
  return {
    noteName,
    heading,
    alias: (alias || heading || noteName).trim(),
  };
}

function outputPathForSource(sourceFile) {
  const relative = path.relative(ROOT, sourceFile);
  return path.join(OUTPUT_DIR, relative);
}

function relativeLink(fromOutputFile, targetOutputFile, anchor = "") {
  let rel = path.relative(path.dirname(fromOutputFile), targetOutputFile);
  if (!rel.startsWith(".")) rel = `./${rel}`;
  const encoded = encodePathForMarkdown(rel);
  return anchor ? `${encoded}#${anchor}` : encoded;
}

function rawImageUrl(sourceImageFile) {
  const relative = path.relative(ROOT, sourceImageFile);
  return `${RAW_IMAGE_BASE}/${encodePathForMarkdown(relative)}`;
}

function buildIndexes(markdownFiles, allFiles) {
  const noteIndex = new Map();
  const imageIndex = new Map();

  for (const file of markdownFiles) {
    const base = path.basename(file, ".md");
    if (!noteIndex.has(base)) noteIndex.set(base, []);
    noteIndex.get(base).push(file);
  }

  for (const file of allFiles) {
    const ext = path.extname(file).toLowerCase();
    if (!IMAGE_EXTENSIONS.has(ext)) continue;
    const base = path.basename(file);
    if (!imageIndex.has(base)) imageIndex.set(base, []);
    imageIndex.get(base).push(file);
  }

  return { noteIndex, imageIndex };
}

function resolveNote(noteName, currentFile, noteIndex) {
  if (!noteName) return currentFile;
  const normalized = noteName.replace(/\\/g, "/");
  const direct = path.join(ROOT, `${normalized}.md`);
  if (fs.existsSync(direct)) return direct;

  const matches = noteIndex.get(path.basename(noteName)) || [];
  if (matches.length === 1) return matches[0];
  if (matches.length > 1) {
    const currentDir = path.dirname(currentFile);
    const sameDir = matches.find((file) => path.dirname(file) === currentDir);
    return sameDir || matches[0];
  }
  return null;
}

function resolveImage(target, currentFile, imageIndex) {
  const cleanTarget = target.split("|")[0].trim();
  const normalized = cleanTarget.replace(/\\/g, "/");
  const fromRoot = path.join(ROOT, normalized);
  if (fs.existsSync(fromRoot)) return fromRoot;

  const fromCurrent = path.join(path.dirname(currentFile), normalized);
  if (fs.existsSync(fromCurrent)) return fromCurrent;

  const matches = imageIndex.get(path.basename(cleanTarget)) || [];
  if (matches.length === 1) return matches[0];
  if (matches.length > 1) {
    const resourcesMatch = matches.find((file) =>
      toPosix(path.relative(ROOT, file)).startsWith("Resources/")
    );
    return resourcesMatch || matches[0];
  }
  return null;
}

function convertEmbeds(text, currentFile, outputFile, indexes, warnings) {
  return text.replace(/!\[\[([^\]]+)\]\]/g, (match, rawTarget) => {
    const target = rawTarget.trim();
    const displayName = target.split("|")[0].trim();
    if (!isImageName(displayName)) return match;

    const imageFile = resolveImage(displayName, currentFile, indexes.imageIndex);
    if (!imageFile) {
      warnings.push(`Missing image: ${displayName} in ${path.relative(ROOT, currentFile)}`);
      return match;
    }

    const alt = path.basename(displayName).replace(/[\[\]]/g, "");
    return `![${alt}](${rawImageUrl(imageFile)})`;
  });
}

function convertWikiLinks(text, currentFile, outputFile, indexes, warnings) {
  return text.replace(/(?<!!)\[\[([^\]]+)\]\]/g, (match, rawTarget) => {
    const parsed = parseWikiTarget(rawTarget);

    if (isImageName(parsed.noteName)) {
      const imageFile = resolveImage(parsed.noteName, currentFile, indexes.imageIndex);
      if (!imageFile) {
        warnings.push(`Missing image link: ${parsed.noteName} in ${path.relative(ROOT, currentFile)}`);
        return parsed.alias || parsed.noteName;
      }
      return `[${parsed.alias || path.basename(parsed.noteName)}](${rawImageUrl(imageFile)})`;
    }

    const targetFile = resolveNote(parsed.noteName, currentFile, indexes.noteIndex);
    if (!targetFile) {
      warnings.push(`Missing note: ${parsed.noteName} in ${path.relative(ROOT, currentFile)}`);
      return parsed.alias || parsed.noteName;
    }

    const anchor = parsed.heading ? githubSlug(parsed.heading) : "";
    const targetOutput = outputPathForSource(targetFile);
    return `[${parsed.alias}](${relativeLink(outputFile, targetOutput, anchor)})`;
  });
}

function convertMarkdownImageLinks(text, currentFile, indexes, warnings) {
  return text.replace(/!\[([^\]]*)\]\((<[^>]+>|[^)]+)\)/g, (match, alt, rawTarget) => {
    const target = rawTarget.trim().replace(/^<|>$/g, "");
    if (/^(https?:|data:)/i.test(target)) return match;
    if (!isImageName(target)) return match;

    const decodedTarget = decodeURIComponent(target);
    const fromCurrent = path.resolve(path.dirname(currentFile), decodedTarget);
    let imageFile = fs.existsSync(fromCurrent)
      ? fromCurrent
      : resolveImage(decodedTarget, currentFile, indexes.imageIndex);

    if (!imageFile) {
      warnings.push(`Missing markdown image: ${decodedTarget} in ${path.relative(ROOT, currentFile)}`);
      return match;
    }

    const label = alt || path.basename(decodedTarget);
    return `![${label}](${rawImageUrl(imageFile)})`;
  });
}

function convertMarkdownSegment(text, currentFile, outputFile, indexes, warnings) {
  let converted = text;
  converted = convertMarkdownImageLinks(converted, currentFile, indexes, warnings);
  converted = convertEmbeds(converted, currentFile, outputFile, indexes, warnings);
  converted = convertWikiLinks(converted, currentFile, outputFile, indexes, warnings);
  converted = convertMarkdownLinks(converted, currentFile, outputFile);
  return converted;
}

function convertOutsideCode(text, currentFile, outputFile, indexes, warnings) {
  return text
    .split(/(```[\s\S]*?```)/g)
    .map((block) => {
      if (block.startsWith("```")) return block;
      return block
        .split(/(`[^`\n]*`)/g)
        .map((segment) => {
          if (segment.startsWith("`") && segment.endsWith("`")) return segment;
          return convertMarkdownSegment(segment, currentFile, outputFile, indexes, warnings);
        })
        .join("");
    })
    .join("");
}

function convertMarkdownLinks(text, currentFile, outputFile) {
  return text.replace(/(!?\[[^\]]*\])\((?!https?:|mailto:|#)([^)]+\.md(?:#[^)]+)?)\)/g, (match, label, rawTarget) => {
    const unwrapped = rawTarget.trim().replace(/^<|>$/g, "");
    const [targetPath, anchor] = unwrapped.split("#");
    const decodedPath = decodeURIComponent(targetPath);
    const candidate = path.resolve(path.dirname(currentFile), decodedPath);
    if (!candidate.startsWith(ROOT) || !fs.existsSync(candidate)) return match;
    const targetOutput = outputPathForSource(candidate);
    const suffix = anchor ? `#${githubSlug(decodeURIComponent(anchor))}` : "";
    return `${label}(${relativeLink(outputFile, targetOutput, suffix.replace(/^#/, ""))})`;
  });
}

function convertFile(text, currentFile, indexes, warnings) {
  const outputFile = outputPathForSource(currentFile);
  return convertOutsideCode(text, currentFile, outputFile, indexes, warnings);
}

function shouldCopyAsset(sourceFile) {
  const relative = toPosix(path.relative(ROOT, sourceFile));
  if (relative.startsWith(".git/") || relative.startsWith(".obsidian/")) return false;
  if (relative.startsWith(".githooks/")) return false;
  if (relative.startsWith("GitHub View/")) return false;
  if (relative.startsWith("Resources/") && relative.includes("/raw/")) return false;
  if (isMarkdown(sourceFile)) return false;
  return true;
}

function copyAssets(allFiles) {
  let copied = 0;
  for (const sourceFile of allFiles) {
    if (!shouldCopyAsset(sourceFile)) continue;
    const outputFile = outputPathForSource(sourceFile);
    fs.mkdirSync(path.dirname(outputFile), { recursive: true });
    fs.copyFileSync(sourceFile, outputFile);
    copied += 1;
  }
  return copied;
}

function main() {
  if (OUTPUT_DIR === ROOT || OUTPUT_DIR.startsWith(`${ROOT}${path.sep}`)) {
    throw new Error(
      `Refusing to generate GitHub View inside the Obsidian vault: ${OUTPUT_DIR}`
    );
  }

  const allFiles = walk(ROOT);
  const markdownFiles = allFiles.filter(isMarkdown);
  const indexes = buildIndexes(markdownFiles, allFiles);
  const warnings = [];

  ensureCleanDir(OUTPUT_DIR);

  for (const sourceFile of markdownFiles) {
    const relative = path.relative(ROOT, sourceFile);
    const outputFile = path.join(OUTPUT_DIR, relative);
    fs.mkdirSync(path.dirname(outputFile), { recursive: true });
    const text = fs.readFileSync(sourceFile, "utf8");
    const converted = convertFile(text, sourceFile, indexes, warnings);
    fs.writeFileSync(outputFile, converted, "utf8");
  }

  const copiedAssets = copyAssets(allFiles);

  if (warnings.length) {
    const warningFile = path.join(OUTPUT_DIR, "conversion-warnings.txt");
    fs.writeFileSync(warningFile, `${warnings.join("\n")}\n`, "utf8");
  }

  console.log(`Generated ${OUTPUT_DIR} (${markdownFiles.length} markdown files, ${copiedAssets} assets)`);
  if (warnings.length) {
    console.log(`Warnings: ${warnings.length} (see ${path.join(OUTPUT_DIR, "conversion-warnings.txt")})`);
  }
}

main();
