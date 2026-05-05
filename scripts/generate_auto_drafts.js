const fs = require('fs');
const path = require('path');
const repoRoot = path.join(__dirname, '..');
const reportPath = path.join(repoRoot, 'audit_reliability_report.json');
const outPath = path.join(repoRoot, 'js', 'data', 'auto_drafts.js');

if (!fs.existsSync(reportPath)) { console.error('Run audit_reliability first'); process.exit(1);} 
const report = JSON.parse(fs.readFileSync(reportPath,'utf8'));
const weakest = report.weakest.slice(0,20);

function makeBlock(key, title) {
  const base = title || key.replace(/_/g,' ');
  return `{
    title: "Auto-draft: ${base} - Core Examples",
    text: "Auto-generated draft for ${base}. Please review.",
    examples: [
      "Core definition and use-case for ${base}.",
      "Worked example: a short solved problem using the core idea.",
      "Common trap to watch out for in ${base}."
    ],
    shortcut: "Quick trick: reduce to a 1-line rule.",
    practiceProblems: [
      "Short practice: apply the core rule of ${base}.",
      "Variant: twist that tests the trap awareness."
    ],
    miniQuiz: [
      { q: "What is the main fact about ${base}?", answer: "Core definition", explanation: "One-line anchor." }
    ]
  }`;
}

const entries = weakest.map(w => {
  const key = w.key;
  const title = (w.title || key.replace(/_/g,' ')).replace(/"/g,'\"');
  const b = makeBlock(key, title);
  return `  ${key}: {
    category: "Auto Draft",
    title: "${title}",
    subtitle: "Draft auto-generated content — review before publishing",
    blocks: [\n      ${b}\n    ]
  }`;
}).join(',\n\n');

const fileContent = `// Auto-generated draft topic blocks for low-reliability topics\n// Run scripts/generate_auto_drafts.js to regenerate\nconst autoDrafts = {\n${entries}\n};\n`;

fs.writeFileSync(outPath, fileContent, 'utf8');
console.log('Wrote', outPath);
