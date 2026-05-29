#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const readline = require('readline');
const { spawnSync } = require('child_process');

const repoRoot = path.resolve(__dirname, '..');
const supportedBumpTypes = new Set(['major', 'minor', 'patch']);

function parseArgs(argv) {
  const options = {
    bumpType: null,
    dryRun: false,
    push: true,
    remote: null,
    initialCommit: 'chore(icons): update icons',
    svgCommit: 'chore(release): bump @d-matrix/icons-svg',
    reactCommit: 'chore(release): bump @d-matrix/icons-react',
  };

  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];

    switch (arg) {
      case '--dry-run':
        options.dryRun = true;
        break;
      case '--bump-type':
        options.bumpType = argv[i + 1];
        i += 1;
        break;
      case '--no-push':
        options.push = false;
        break;
      case '--remote':
        options.remote = argv[i + 1];
        i += 1;
        break;
      case '--initial-commit':
        options.initialCommit = argv[i + 1];
        i += 1;
        break;
      case '--svg-commit':
        options.svgCommit = argv[i + 1];
        i += 1;
        break;
      case '--react-commit':
        options.reactCommit = argv[i + 1];
        i += 1;
        break;
      case '--help':
      case '-h':
        printHelp();
        process.exit(0);
        break;
      default:
        throw new Error(`Unknown argument: ${arg}`);
    }
  }

  return options;
}

function printHelp() {
  console.log(`Usage: npm run release:icons -- [options]

Options:
  --bump-type <type>            Use major, minor, or patch without prompting
  --dry-run                     Print the commands without executing them
  --no-push                     Skip the final git push
  --remote <name>               Push to a specific remote (default: branch remote or origin)
  --initial-commit <message>    Override the first commit message
  --svg-commit <message>        Override the svg version bump commit message
  --react-commit <message>      Override the react version bump commit message
  When --bump-type is omitted, the script prompts for major, minor, or patch
  -h, --help                    Show this help message
`);
}

function resolveCommand(command) {
  if (process.platform === 'win32' && command === 'npm') {
    return 'npm.cmd';
  }

  return command;
}

function formatCommand(command, args) {
  return [command, ...args].map((value) => (/\s/.test(value) ? `"${value}"` : value)).join(' ');
}

function run(command, args, options = {}) {
  const { capture = false, allowInDryRun = false } = options;
  const resolvedCommand = resolveCommand(command);

  if (state.dryRun && !allowInDryRun) {
    console.log(`[dry-run] ${formatCommand(command, args)}`);
    return '';
  }

  const result = spawnSync(resolvedCommand, args, {
    cwd: repoRoot,
    encoding: 'utf8',
    stdio: capture ? ['ignore', 'pipe', 'pipe'] : 'inherit',
  });

  if (result.status !== 0) {
    const stderr = result.stderr ? result.stderr.trim() : '';
    throw new Error(stderr || `${command} exited with code ${result.status}`);
  }

  return capture ? result.stdout.trim() : '';
}

function runOptional(command, args, options = {}) {
  const { capture = false } = options;
  const resolvedCommand = resolveCommand(command);

  const result = spawnSync(resolvedCommand, args, {
    cwd: repoRoot,
    encoding: 'utf8',
    stdio: capture ? ['ignore', 'pipe', 'pipe'] : 'inherit',
  });

  if (result.status !== 0) {
    return null;
  }

  return capture ? result.stdout.trim() : '';
}

function readJson(relativePath) {
  const filePath = path.join(repoRoot, relativePath);
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function normalizeBumpType(value) {
  if (!value) {
    return null;
  }

  const normalizedValue = String(value).toLowerCase();
  if (!supportedBumpTypes.has(normalizedValue)) {
    throw new Error(`Invalid bump type: ${value}. Use one of: major, minor, patch.`);
  }

  return normalizedValue;
}

function getNextVersion(version, bumpType) {
  const [major, minor, patch] = version.split('.').map((value) => Number.parseInt(value, 10));

  if (Number.isNaN(major) || Number.isNaN(minor) || Number.isNaN(patch)) {
    throw new Error(`Unsupported version format: ${version}`);
  }

  switch (bumpType) {
    case 'major':
      return `${major + 1}.0.0`;
    case 'minor':
      return `${major}.${minor + 1}.0`;
    case 'patch':
      return `${major}.${minor}.${patch + 1}`;
    default:
      throw new Error(`Unsupported bump type: ${bumpType}`);
  }
}

function getStatus() {
  return run('git', ['status', '--short'], { capture: true, allowInDryRun: true });
}

function ensurePendingChanges() {
  if (state.dryRun) {
    return;
  }

  if (!getStatus()) {
    throw new Error('No pending changes found. Add or modify icons before running this script.');
  }
}

function ensureCommitReady(stageDescription) {
  if (state.dryRun) {
    run('git', ['add', '-A']);
    return;
  }

  run('git', ['add', '-A']);

  if (!getStatus()) {
    throw new Error(`No changes detected for ${stageDescription}.`);
  }
}

function commitAll(message, stageDescription) {
  ensureCommitReady(stageDescription);
  run('git', ['commit', '-m', message]);
}

function ensureGitRepo() {
  run('git', ['rev-parse', '--show-toplevel'], { capture: true, allowInDryRun: true });
}

function getCurrentBranch() {
  const branch = run('git', ['rev-parse', '--abbrev-ref', 'HEAD'], { capture: true, allowInDryRun: true });

  if (!branch || branch === 'HEAD') {
    throw new Error('Detached HEAD is not supported. Switch to a branch before running this script.');
  }

  return branch;
}

function getPushRemote(branch, fallbackRemote) {
  if (fallbackRemote) {
    return fallbackRemote;
  }

  const remote = runOptional('git', ['config', '--get', `branch.${branch}.remote`], {
    capture: true,
  });
  return remote || 'origin';
}

function ensureTagDoesNotExist(tagName) {
  const existingTag = run('git', ['tag', '--list', tagName], { capture: true, allowInDryRun: true });
  if (existingTag === tagName) {
    throw new Error(`Tag ${tagName} already exists.`);
  }
}

function bumpWorkspaceVersion(workspace, bumpType) {
  run('npm', ['version', bumpType, `--workspace=${workspace}`, '--no-git-tag-version']);
}

function prompt(question) {
  return new Promise((resolve) => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    rl.question(question, (answer) => {
      rl.close();
      resolve(answer);
    });
  });
}

async function resolveBumpType(initialBumpType) {
  const normalizedBumpType = normalizeBumpType(initialBumpType);
  if (normalizedBumpType) {
    return normalizedBumpType;
  }

  if (!process.stdin.isTTY || !process.stdout.isTTY) {
    throw new Error('Interactive bump type selection requires a TTY. Re-run with --bump-type major|minor|patch.');
  }

  while (true) {
    const answer = await prompt('Select bump type (major/minor/patch): ');

    try {
      return normalizeBumpType(answer.trim());
    } catch (error) {
      console.log(error.message);
    }
  }
}

const state = parseArgs(process.argv.slice(2));

async function main() {
  ensureGitRepo();
  ensurePendingChanges();

  const bumpType = await resolveBumpType(state.bumpType);
  const branch = getCurrentBranch();
  const remote = getPushRemote(branch, state.remote);

  console.log(`Using bump type: ${bumpType}`);

  console.log('Step 1/5: commit changes');
  commitAll(state.initialCommit, 'commit changes');

  console.log('Step 2/5: bump @d-matrix/icons-svg');
  bumpWorkspaceVersion('@d-matrix/icons-svg', bumpType);
  commitAll(state.svgCommit, '@d-matrix/icons-svg version bump');

  console.log('Step 3/5: bump @d-matrix/icons-react');
  bumpWorkspaceVersion('@d-matrix/icons-react', bumpType);
  commitAll(state.reactCommit, '@d-matrix/icons-react version bump');

  const reactPkg = readJson(path.join('packages', 'icons-react', 'package.json'));
  const releaseVersion = state.dryRun ? getNextVersion(reactPkg.version, bumpType) : reactPkg.version;
  const tagName = `v${releaseVersion}`;

  console.log('Step 4/5: create release tag');
  ensureTagDoesNotExist(tagName);
  run('git', ['tag', '-a', tagName, '-m', `release: ${tagName}`]);

  if (state.push) {
    console.log('Step 5/5: push branch and tag');
    run('git', ['push', '--follow-tags', remote, branch]);
  }

  console.log(`Done. Created tag ${tagName}${state.push ? ` and pushed ${branch} to ${remote}.` : '.'}`);
}

main().catch((error) => {
  console.error(`\n[release:icons] ${error.message}`);
  process.exit(1);
});
