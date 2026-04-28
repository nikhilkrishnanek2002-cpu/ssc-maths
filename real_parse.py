import json
from bs4 import BeautifulSoup
import codecs

# We must read in utf-8, but sometimes it is cp1252 locally if Windows.
html_content = ""
with open("c:\\Users\\nikhil\\Desktop\\MCA Project\\ssc maths\\SSC_CGL_Maths_Complete_Guide.html", "rb") as f:
    html_content = f.read().decode('utf-8')

soup = BeautifulSoup(html_content, 'html.parser')
topics = []

sections = soup.find_all('div', class_='section')

for section in sections:
    topic_id = section.get('id')
    if not topic_id or topic_id == 'cheatsheet':
        continue
        
    title_div = section.find('div', class_='section-title')
    desc_div = section.find('div', class_='section-sub')
    
    if not title_div:
        continue
        
    name = title_div.text.strip()
    desc = desc_div.text.strip() if desc_div else ""
    
    cards = section.find_all('div', class_='card')
    topic_sections = []
    
    for card in cards:
        card_title_div = card.find('div', class_='card-title')
        icon_div = card_title_div.find('div', class_='icon') if card_title_div else None
        
        emoji = icon_div.text if icon_div else "👉"
        title = card_title_div.text.replace(emoji, '').strip() if card_title_div else "Concept"
        
        formulas = []
        shortcuts = []
        examples = []
        
        for f_elem in card.find_all('div', class_='formula'):
            formulas.append(f_elem.text.strip())
            
        for s_elem in card.find_all('div', class_='shortcut'):
            shortcuts.append(s_elem.text.replace('⚡ Shortcut:', '').strip())

        for t_elem in card.find_all('div', class_='trick'):
            shortcuts.append(t_elem.text.strip())
            
        for q_elem in card.find_all('div', class_='question'):
            examples.append(q_elem.text.strip())

        paragraphs = card.find_all('p', recursive=False)
        content = "\n\n".join([p.text.strip() for p in paragraphs])
        
        lists = card.find_all('ul')
        for ul in lists:
            content += "\n• " + "\n• ".join([li.text.strip() for li in ul.find_all('li')])

        tables = card.find_all('table')
        for table in tables:
            content += "\n\n"
            rows = table.find_all('tr')
            for row in rows:
                cells = row.find_all(['th', 'td'])
                cell_texts = [cell.text.strip() for cell in cells]
                content += " | ".join(cell_texts) + "\n"

        topic_sections.append({
            'title': title,
            'content': content.strip(),
            'formulas': formulas,
            'shortcuts': shortcuts,
            'examples': examples
        })
        
    topics.append({
        'id': topic_id,
        'name': name,
        'emoji': emoji,  # The last emoji
        'description': desc,
        'sections': topic_sections
    })

js_content = "export const MATHS_TOPICS = " + json.dumps(topics, indent=2, ensure_ascii=False) + ";\n"

with open("c:\\Users\\nikhil\\Desktop\\MCA Project\\ssc maths\\frontend\\src\\data\\topics.js", "w", encoding="utf-8") as f:
    f.write(js_content)
