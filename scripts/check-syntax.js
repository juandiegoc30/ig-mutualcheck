const fs = require('node:fs');
const path = require('node:path');
const { spawnSync } = require('node:child_process');

const projectRoot = path.resolve(__dirname, '..');
const directories = ['src', 'scripts', 'docs', 'tests'];

function getJavaScriptFiles(directory) {
  if (!fs.existsSync(directory)) return [];

  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const entryPath = path.join(directory, entry.name);
    if (entry.isDirectory()) return getJavaScriptFiles(entryPath);
    return entry.isFile() && entry.name.endsWith('.js') ? [entryPath] : [];
  });
}

const files = directories.flatMap((directory) => (
  getJavaScriptFiles(path.join(projectRoot, directory))
));

for (const file of files) {
  const result = spawnSync(process.execPath, ['--check', file], { stdio: 'inherit' });
  if (result.status !== 0) process.exit(result.status ?? 1);
}

const packageJson = require(path.join(projectRoot, 'package.json'));
const manifest = require(path.join(projectRoot, 'manifest.json'));

if (packageJson.version !== manifest.version) {
  throw new Error(
    `Version mismatch: package.json=${packageJson.version}, manifest.json=${manifest.version}`
  );
}

console.log(`Checked ${files.length} JavaScript files and project versions.`);
