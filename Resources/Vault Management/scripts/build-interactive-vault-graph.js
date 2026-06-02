const fs = require("fs");
const path = require("path");

const root = process.argv[2] ? path.resolve(process.argv[2]) : process.cwd();
const output = path.join(root, "Resources", "Vault Management", "Interactive Vault Graph Data.js");

const skipDirs = new Set([".git", ".obsidian"]);
const palette = [
  "#e9b84e", "#ef5a5a", "#a7e84b", "#56e0ba", "#bdbdbd", "#1f77b4",
  "#a78bfa", "#38bdf8", "#34d399", "#f472b6", "#fb923c", "#c084fc"
];

function walk(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.isDirectory()) {
      if (!skipDirs.has(entry.name)) walk(path.join(dir, entry.name), files);
      continue;
    }
    if (entry.isFile() && entry.name.toLowerCase().endsWith(".md")) files.push(path.join(dir, entry.name));
  }
  return files;
}

function normalizeSlash(value) {
  return value.replace(/\\/g, "/");
}

function stripMd(value) {
  return value.replace(/\.md$/i, "");
}

function rel(file) {
  return normalizeSlash(path.relative(root, file));
}

function read(file) {
  return fs.readFileSync(file, "utf8");
}

function parseFrontmatter(text) {
  if (!text.startsWith("---")) return { tags: [], body: text };
  const end = text.indexOf("\n---", 3);
  if (end === -1) return { tags: [], body: text };
  const yaml = text.slice(3, end).split(/\r?\n/);
  const body = text.slice(end + 4);
  const tags = [];
  let inTags = false;

  for (const line of yaml) {
    if (/^tags:\s*$/.test(line)) {
      inTags = true;
      continue;
    }
    if (inTags) {
      const item = line.match(/^\s*-\s*["']?([^"']+)["']?\s*$/);
      if (item) {
        tags.push(item[1].trim());
        continue;
      }
      if (/^\S/.test(line)) inTags = false;
    }
  }

  return { tags: [...new Set(tags)], body };
}

function titleFromBody(file, body) {
  const heading = body.match(/^#\s+(.+)$/m);
  if (heading) return heading[1].trim();
  return path.basename(file, ".md");
}

function primaryTag(tags) {
  const priority = [
    "course/qf",
    "course/se",
    "vault/management",
    "obsidian/graph",
    "review/weekly",
    "exam/review",
    "project/active",
    "resource/index",
    "source/clipping"
  ];
  return priority.find(tag => tags.includes(tag)) || tags[0] || "untagged";
}

function hrefFromHtml(notePath) {
  const htmlDir = path.join(root, "Resources", "Vault Management");
  return encodeURI(normalizeSlash(path.relative(htmlDir, notePath))).replace(/#/g, "%23");
}

function resolveWikiTarget(raw, maps) {
  let target = raw.split("|")[0].split("#")[0].trim();
  if (!target || /\.(png|jpe?g|gif|webp|svg|pdf)$/i.test(target)) return null;
  target = stripMd(normalizeSlash(target));
  return maps.byPath.get(target.toLowerCase()) || maps.byBase.get(path.basename(target).toLowerCase()) || null;
}

function resolveMarkdownLink(raw, sourceFile, maps) {
  if (/^(https?:|file:|mailto:)/i.test(raw)) return null;
  let clean = raw.split("#")[0].split("?")[0].trim();
  if (!clean.toLowerCase().endsWith(".md")) return null;
  try {
    clean = decodeURIComponent(clean);
  } catch {
    // Keep the original if it was not URL-encoded.
  }
  const absolute = path.resolve(path.dirname(sourceFile), clean);
  const relative = stripMd(rel(absolute)).toLowerCase();
  return maps.byPath.get(relative) || maps.byBase.get(path.basename(clean, ".md").toLowerCase()) || null;
}

const mdFiles = walk(root);
const notes = mdFiles.map(file => {
  const text = read(file);
  const { tags, body } = parseFrontmatter(text);
  const relative = rel(file);
  return {
    id: stripMd(relative),
    path: relative,
    title: titleFromBody(file, body),
    tags,
    primaryTag: primaryTag(tags),
    href: hrefFromHtml(file),
    body,
    file
  };
});

const maps = {
  byPath: new Map(notes.map(note => [stripMd(note.path).toLowerCase(), note.id])),
  byBase: new Map()
};

for (const note of notes) {
  const base = path.basename(note.path, ".md").toLowerCase();
  if (!maps.byBase.has(base)) maps.byBase.set(base, note.id);
}

const edgesByKey = new Map();
for (const note of notes) {
  const wiki = note.body.matchAll(/!?\[\[([^\]]+)\]\]/g);
  for (const match of wiki) {
    const target = resolveWikiTarget(match[1], maps);
    if (!target || target === note.id) continue;
    const key = `${note.id}=>${target}`;
    edgesByKey.set(key, { source: note.id, target, type: "wikilink" });
  }

  const markdown = note.body.matchAll(/\[[^\]]+\]\(([^)]+)\)/g);
  for (const match of markdown) {
    const target = resolveMarkdownLink(match[1], note.file, maps);
    if (!target || target === note.id) continue;
    const key = `${note.id}=>${target}`;
    edgesByKey.set(key, { source: note.id, target, type: "markdown" });
  }
}

const degree = new Map(notes.map(note => [note.id, 0]));
for (const edge of edgesByKey.values()) {
  degree.set(edge.source, (degree.get(edge.source) || 0) + 1);
  degree.set(edge.target, (degree.get(edge.target) || 0) + 1);
}

const tagCounts = new Map();
for (const note of notes) {
  tagCounts.set(note.primaryTag, (tagCounts.get(note.primaryTag) || 0) + 1);
}

const tags = [...tagCounts.entries()].sort((a, b) => b[1] - a[1]).map(([tag]) => tag);
const tagColors = {};
tags.forEach((tag, index) => {
  tagColors[tag] = palette[index % palette.length];
});

const data = {
  generatedAt: new Date().toISOString(),
  nodes: notes
    .sort((a, b) => a.title.localeCompare(b.title, "zh-Hans-CN"))
    .map(note => ({
      id: note.id,
      title: note.title,
      path: note.path,
      href: note.href,
      tags: note.tags,
      primaryTag: note.primaryTag,
      degree: degree.get(note.id) || 0
    })),
  edges: [...edgesByKey.values()],
  tags,
  tagColors
};

fs.mkdirSync(path.dirname(output), { recursive: true });
fs.writeFileSync(output, `window.VAULT_GRAPH_DATA = ${JSON.stringify(data, null, 2)};\n`, "utf8");

console.log(`Generated ${data.nodes.length} nodes and ${data.edges.length} edges`);
console.log(output);
