const fs = require('fs');
const path = require('path');

function findWebm(dir) {
  const items = fs.readdirSync(dir, { withFileTypes: true });
  for (const it of items) {
    const full = path.join(dir, it.name);
    if (it.isDirectory()) {
      try {
        const found = findWebm(full);
        if (found) return found;
      } catch (e) {}
    } else if (it.isFile() && full.toLowerCase().endsWith('.webm')) {
      return full;
    }
  }
  return null;
}

const repoRoot = process.cwd();
const found = findWebm(repoRoot);
if (!found) {
  console.log('NO_VIDEO_FOUND');
  process.exit(0);
}
const dest = path.join('C:', 'Users', 'elgan', 'OneDrive', 'Email attachments', 'Documentos', 'projetos', 'login3segundos.webm');
fs.copyFileSync(found, dest);
console.log(found);
