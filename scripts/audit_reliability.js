const fs = require('fs');
const vm = require('vm');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'js', 'data');
const files = fs.readdirSync(dataDir).filter(f => f.endsWith('.js'));

const collected = {};

files.forEach(file => {
  const full = fs.readFileSync(path.join(dataDir, file), 'utf8');
  const m = full.match(/const\s+([A-Za-z0-9_]+)\s*=\s*/);
  const varName = m ? m[1] : null;
  const sandbox = { __out: {} };
  try {
    vm.runInNewContext(full + (varName ? `; if (typeof ${varName} !== 'undefined') __out['${varName}'] = ${varName};` : ''), sandbox, { filename: file, timeout: 5000 });
    if (varName && sandbox.__out[varName]) {
      collected[varName] = sandbox.__out[varName];
    } else {
      // try to guess by exported object names inside file
      // not essential
    }
  } catch (e) {
    console.error('LOAD_ERROR', file, e.message);
  }
});

// Merge into allStudyData similar to study.html ordering heuristic
const allStudyData = Object.assign({},
  collected.mathData || {},
  collected.englishData || {},
  collected.englishVocabularyData || {},
  collected.reasoningData || {},
  collected.gkData || {},
  collected.gaBiologyData || {},
  collected.gaChemistryData || {},
  collected.gaEconomicsData || {},
  collected.gaGeographyData || {},
  collected.gaHistoryData || {},
  collected.gaPhysicsData || {},
  collected.gaPolityData || {},
  collected.gkDataExpanded || {},
  collected.gkCapsuleFinalTables || {},
  collected.gkHistoryMedievalExpanded || {},
  collected.gkHistoryModernExpanded || {},
  collected.gkScienceTables || {},
  collected.computerData || {},
  collected.statisticsData || {}
);

function getTopicReliability(topic){
  const blocks = Array.isArray(topic.blocks) ? topic.blocks : [];
  let score = 0;
  score += Math.min(blocks.length, 4);
  score += blocks.reduce((total, block) => total + (Array.isArray(block.examples) ? Math.min(block.examples.length, 3) * 0.5 : 0), 0);
  score += blocks.reduce((total, block) => total + (block.shortcut ? 1 : 0), 0);
  score += blocks.reduce((total, block) => total + (Array.isArray(block.practiceProblems) ? 0.75 : 0), 0);
  score += blocks.reduce((total, block) => total + (Array.isArray(block.miniQuiz) ? 0.75 : 0), 0);
  return Math.max(1, Math.min(10, Math.round(score)));
}

const list = [];
Object.entries(allStudyData).forEach(([key, topic]) => {
  if (!topic || typeof topic !== 'object' || Array.isArray(topic)) return;
  const score = getTopicReliability(topic);
  list.push({ key, title: topic.title || '', subjectGuess: key.split('_')[0], score, blocks: (topic.blocks?topic.blocks.length:0) });
});

list.sort((a,b)=>a.score - b.score || a.blocks - b.blocks || a.key.localeCompare(b.key));

fs.writeFileSync(path.join(__dirname,'..','audit_reliability_report.json'), JSON.stringify({ generated: new Date().toISOString(), total: list.length, weakest: list.slice(0,50) }, null, 2));
console.log('Report written to scripts/../audit_reliability_report.json');
