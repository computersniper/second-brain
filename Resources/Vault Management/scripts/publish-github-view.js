const { spawnSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(process.argv[2] || process.cwd());
const VIEW_DIR = path.resolve(
  process.argv[3] || path.dirname(ROOT),
  process.argv[3] ? "" : `${path.basename(ROOT)}-github-view`
);
const BRANCH = "github-view";
const REMOTE_URL = "https://github.com/computersniper/second-brain.git";

function run(command, args, cwd, allowFailure = false) {
  const result = spawnSync(command, args, {
    cwd,
    stdio: "inherit",
    shell: false,
  });
  if (!allowFailure && result.status !== 0) {
    throw new Error(`${command} ${args.join(" ")} failed with status ${result.status}`);
  }
  return result.status;
}

function runText(command, args, cwd) {
  const result = spawnSync(command, args, {
    cwd,
    encoding: "utf8",
    shell: false,
  });
  if (result.status !== 0) return "";
  return result.stdout.trim();
}

function runWithRetry(command, args, cwd, attempts = 3) {
  for (let attempt = 1; attempt <= attempts; attempt += 1) {
    const status = run(command, args, cwd, true);
    if (status === 0) return;
    if (attempt === attempts) {
      throw new Error(`${command} ${args.join(" ")} failed after ${attempts} attempts`);
    }
    const delayMs = attempt * 3000;
    console.log(`[second-brain] Retry ${attempt + 1}/${attempts} after ${delayMs}ms...`);
    Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, delayMs);
  }
}

function ensureGitRepo() {
  fs.mkdirSync(VIEW_DIR, { recursive: true });
  if (!fs.existsSync(path.join(VIEW_DIR, ".git"))) {
    run("git", ["init"], VIEW_DIR);
    run("git", ["remote", "add", "origin", REMOTE_URL], VIEW_DIR);
  }

  const remote = runText("git", ["remote", "get-url", "origin"], VIEW_DIR);
  if (!remote) {
    run("git", ["remote", "add", "origin", REMOTE_URL], VIEW_DIR);
  } else if (remote !== REMOTE_URL) {
    run("git", ["remote", "set-url", "origin", REMOTE_URL], VIEW_DIR);
  }

  run("git", ["checkout", "-B", BRANCH], VIEW_DIR);

  if (!runText("git", ["config", "user.name"], VIEW_DIR)) {
    run("git", ["config", "user.name", "Codex"], VIEW_DIR);
  }
  if (!runText("git", ["config", "user.email"], VIEW_DIR)) {
    run("git", ["config", "user.email", "codex@local"], VIEW_DIR);
  }
}

function main() {
  const buildScript = path.join(ROOT, "Resources", "Vault Management", "scripts", "build-github-view.js");
  run("node", [buildScript, ROOT, VIEW_DIR], ROOT);

  ensureGitRepo();
  run("git", ["add", "-A"], VIEW_DIR);

  const hasChanges = run("git", ["diff", "--cached", "--quiet"], VIEW_DIR, true) !== 0;
  if (hasChanges) {
    run("git", ["commit", "-m", "Update GitHub view"], VIEW_DIR);
  } else {
    console.log("[second-brain] GitHub view is already current.");
  }

  runWithRetry("git", ["push", "-f", "origin", BRANCH], VIEW_DIR, 3);
  console.log(`[second-brain] Published GitHub view branch from ${VIEW_DIR}`);
}

main();
