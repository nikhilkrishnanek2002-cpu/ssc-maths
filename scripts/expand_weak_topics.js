const fs = require('fs');
const path = require('path');

const repoRoot = path.join(__dirname, '..');
const dataDir = path.join(repoRoot, 'js', 'data');
const reportPath = path.join(repoRoot, 'audit_reliability_report.json');

if (!fs.existsSync(reportPath)) {
  console.error('audit_reliability_report.json not found. Run scripts/audit_reliability.js first.');
  process.exit(1);
}

const report = JSON.parse(fs.readFileSync(reportPath, 'utf8'));
const weakest = report.weakest.slice(0, 20).map(x => x.key);

function generateBlockFor(key, title) {
  const base = title || key.replace(/_/g, ' ');
  return {
    title: `Auto-draft: ${base} - Core Examples`,
    text: `Auto-generated draft content for ${base}. Review and refine before publishing.`,
    examples: [
      `Key definition: concise anchor for ${base}.`,
      `Worked example: simple one-step question and solution for ${base}.`,
      `Common trap: typical exam trap and how to avoid it.`
    ],
    shortcut: `Quick trick: convert this topic to a 1-line rule or formula.`,
    practiceProblems: [
      `Practice: Short question testing the core rule of ${base}.`,
      `Practice: Slightly twisted variant that checks trap awareness.`
    ],
    miniQuiz: [
      { q: `What is the main fact about ${base}?`, answer: 'See core definition', explanation: 'Anchor definition required.' },
      { q: `Choose the common trap in ${base}.`, answer: 'Overlooked assumption', explanation: 'Watch for hidden conditions.' }
    ]
  };
}

// Find the file containing a key
function findFileForKey(key) {
  const files = fs.readdirSync(dataDir).filter(f => f.endsWith('.js'));
  for (const f of files) {
    const full = fs.readFileSync(path.join(dataDir, f), 'utf8');
    const re = new RegExp(`\\n\\s*${key}\\s*:\\s*{`);
    if (re.test(full)) return path.join(dataDir, f);
  }
  return null;
}

function insertBlockIntoFile(filePath, key, blockObj) {
  let text = fs.readFileSync(filePath, 'utf8');
  const blocksRe = new RegExp(`(${key}\\s*:\\s*\\{[\s\S]*?blocks\\s*:\\s*\\[)`);
  const match = text.match(blocksRe);
  if (!match) {
    console.warn('No blocks array found for', key, 'in', path.basename(filePath));
    return false;
  }
  const insertPos = match.index + match[1].length;
  const blockStr = JSON.stringify(blockObj, null, 4).replace(/"([^\"]+)":/g, '$1:').replace(/\\n/g, '\\n');

  // Convert blockObj to JS object literal style
  const jsBlock = blockStr
    .replace(/"([^"]+)":/g, '$1:')
    .replace(/"/g, '"')
    .replace(/\\n/g, '\\n');

  // Prepare insertion: keep array formatting
  const before = text.slice(0, insertPos);
  const after = text.slice(insertPos);

  // Insert with a trailing comma if necessary
  const newText = before + '\n            ' + jsBlock + ',\n' + after;
  fs.writeFileSync(filePath, newText, 'utf8');
  return true;
}

const updatedFiles = new Set();

weakest.forEach(key => {
  const file = findFileForKey(key);
  if (!file) {
    console.warn('Key not found in any data file:', key);
    return;
  }
  const allText = fs.readFileSync(file, 'utf8');
  // Extract title for nicer block
  const titleMatch = allText.match(new RegExp(`${key}\\s*:\\s*\\{[\s\S]*?title\\s*:\\s*"([^"]+)"`));
  const title = titleMatch ? titleMatch[1] : key.replace(/_/g, ' ');
  const block = generateBlockFor(key, title);
  const success = insertBlockIntoFile(file, key, block);
  if (success) updatedFiles.add(path.basename(file));
});

console.log('Updated files:', Array.from(updatedFiles));
