const fs = require('fs');
const path = require('path');

const root = 'C:/Users/imran.samoon/Documents/GitHub/cerebro-web';

function checkCasing(dir, segments) {
  let curr = dir;
  for (const seg of segments) {
    if (!seg) continue;
    if (!fs.existsSync(curr)) return { ok: false, missing: curr };
    const entries = fs.readdirSync(curr);
    const exact = entries.find(e => e === seg);
    if (!exact) {
      const matchCI = entries.find(e => e.toLowerCase() === seg.toLowerCase());
      if (matchCI) {
        return { ok: false, expected: matchCI, actual: seg, inDir: curr };
      }
      return { ok: false, missing: seg, inDir: curr };
    }
    curr = path.join(curr, exact);
  }
  return { ok: true, path: curr };
}

function walk(dir) {
  const files = [];
  fs.readdirSync(dir).forEach(f => {
    if (f === 'node_modules' || f === '.next' || f === '.git') return;
    const p = path.join(dir, f);
    if (fs.statSync(p).isDirectory()) {
      files.push(...walk(p));
    } else if (f.endsWith('.ts') || f.endsWith('.tsx')) {
      files.push(p);
    }
  });
  return files;
}

const allFiles = walk(root);
const importRegex = /from\s+['"]([^'"]+)['"]/g;
let errors = 0;

allFiles.forEach(file => {
  const code = fs.readFileSync(file, 'utf8');
  let match;
  while ((match = importRegex.exec(code)) !== null) {
    const importPath = match[1];
    if (importPath.startsWith('.')) {
      const dir = path.dirname(file);
      const absPath = path.resolve(dir, importPath);
      const relToRoot = path.relative(root, absPath);
      const segments = relToRoot.split(path.sep);
      const last = segments[segments.length - 1];
      let checked = false;
      for (const ext of ['', '.ts', '.tsx', '/index.ts', '/index.tsx']) {
        const testSegs = [...segments.slice(0, -1), ...((last + ext).split(/[\\/]/))];
        const res = checkCasing(root, testSegs);
        if (res.ok) {
          checked = true;
          break;
        } else if (res.expected) {
          console.log('CASE MISMATCH in', path.relative(root, file));
          console.log('  Import:', importPath);
          console.log('  Expected:', res.expected, 'but got:', res.actual, 'in', res.inDir);
          errors++;
          checked = true;
          break;
        }
      }
    } else if (importPath.startsWith('@/')) {
      const sub = importPath.slice(2);
      const segments = sub.split(/[\\/]/);
      const last = segments[segments.length - 1];
      let checked = false;
      for (const ext of ['', '.ts', '.tsx', '/index.ts', '/index.tsx']) {
        const testSegs = [...segments.slice(0, -1), ...((last + ext).split(/[\\/]/))];
        const res = checkCasing(root, testSegs);
        if (res.ok) {
          checked = true;
          break;
        } else if (res.expected) {
          console.log('CASE MISMATCH in', path.relative(root, file));
          console.log('  Import:', importPath);
          console.log('  Expected:', res.expected, 'but got:', res.actual, 'in', res.inDir);
          errors++;
          checked = true;
          break;
        }
      }
    }
  }
});
console.log('Total case mismatch errors:', errors);
