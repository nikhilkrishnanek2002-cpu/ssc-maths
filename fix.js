const fs = require('fs');

let content = fs.readFileSync('frontend/src/data/topics.js', 'utf8');

const replacements = {
  "â€”": "—",
  "ðŸ“‹": "📋",
  "âœ“": "✓",
  "â†’": "→",
  "Ã—": "×",
  "Â²": "²",
  "â‰¡": "≡",
  "ðŸ“ˆ": "📈",
  "âˆš": "√",
  "âˆ†": "Δ",
  "Ã·": "÷",
  "Â°": "°",
  "Â½": "½",
  "ðŸ”¢": "🔢",
  "ðŸ“˜": "📘",
  "âˆ ": "∠ "
};

for (const [bad, good] of Object.entries(replacements)) {
  content = content.split(bad).join(good);
}

fs.writeFileSync('frontend/src/data/topics.js', content, 'utf8');
console.log('Fixed encodings!');
