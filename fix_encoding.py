import json
import codecs

# Read the file with the broken encoding
with open("c:\\Users\\nikhil\\Desktop\\MCA Project\\ssc maths\\parsed_topics.json", "r", encoding="utf-8") as f:
    text = f.read()

# Fix common UTF-8 mojibake
replacements = {
    "â€”": "—",
    "ðŸ“˜": "📘",
    "ðŸ”¢": "🔢",
    "âœ“": "✓",
    "â†’": "→",
    "Ã—": "×",
    "Â²": "²",
    "â‰¡": "≡",
    "ðŸ“ˆ": "📈",
    "âˆš": "√",
    "âˆ†": "Δ"
}

for bad, good in replacements.items():
    text = text.replace(bad, good)

with open("c:\\Users\\nikhil\\Desktop\\MCA Project\\ssc maths\\frontend\\src\\data\\topics.js", "w", encoding="utf-8") as f:
    f.write("export const MATHS_TOPICS = " + text + ";")
