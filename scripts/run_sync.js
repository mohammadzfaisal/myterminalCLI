const { spawnSync } = require('node:child_process');

const candidates = [
  { cmd: 'python3', args: ['scripts/sync_content.py'] },
  { cmd: 'python', args: ['scripts/sync_content.py'] },
  { cmd: 'py', args: ['-3', 'scripts/sync_content.py'] }
];

for (const candidate of candidates) {
  const result = spawnSync(candidate.cmd, candidate.args, { stdio: 'inherit' });
  if (result.status === 0) {
    process.exit(0);
  }
}

process.exit(1);
