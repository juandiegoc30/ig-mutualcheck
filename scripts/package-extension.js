const fs = require('node:fs');
const path = require('node:path');
const { spawnSync } = require('node:child_process');

const projectRoot = path.resolve(__dirname, '..');
const packageJson = require(path.join(projectRoot, 'package.json'));
const manifest = require(path.join(projectRoot, 'manifest.json'));

if (packageJson.version !== manifest.version) {
  throw new Error(
    `Version mismatch: package.json=${packageJson.version}, manifest.json=${manifest.version}`
  );
}

const outputDir = path.join(projectRoot, 'dist');
const outputName = `ig-mutualcheck-v${manifest.version}.zip`;
const outputPath = path.join(outputDir, outputName);
const extensionFiles = [
  'manifest.json',
  'src',
  'assets/icon.png',
  'assets/icon-16.png',
  'assets/icon-32.png',
  'assets/icon-48.png',
  'assets/icon-128.png',
  'assets/flags',
  'README.md',
  'README.es.md',
  'LICENSE'
];

fs.mkdirSync(outputDir, { recursive: true });
fs.rmSync(outputPath, { force: true });

const result = spawnSync('zip', ['-r', outputPath, ...extensionFiles], {
  cwd: projectRoot,
  stdio: 'inherit'
});

if (result.error) {
  throw result.error;
}

if (result.status !== 0) {
  process.exit(result.status ?? 1);
}

console.log(`Created ${path.relative(projectRoot, outputPath)}`);
