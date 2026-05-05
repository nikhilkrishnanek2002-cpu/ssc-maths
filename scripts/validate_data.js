// Simple validator: require all files in js/data and report counts
const fs = require('fs');
const path = require('path');
const dataDir = path.join(__dirname, '..', 'js', 'data');
let failed = false;
fs.readdirSync(dataDir).filter(f => f.endsWith('.js')).forEach(f => {
  const full = path.join(dataDir, f);
  try {
    delete require.cache[require.resolve(full)];
    const mod = require(full);
    const keys = Object.keys(mod || {});
    console.log(f, 'loaded ->', keys.length, 'keys');
  } catch (e) {
    failed = true;
    console.error(f, 'ERROR ->', e.message);
  }
});
if (failed) {
  console.error('Validation failed');
  process.exit(2);
}
console.log('All data files load cleanly');
process.exit(0);
