import json
from bs4 import BeautifulSoup

with open("c:\\Users\\nikhil\\Desktop\\MCA Project\\ssc maths\\SSC_CGL_Maths_Complete_Guide.html", "r", encoding="utf-8") as f:
    html_content = f.read()

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
    
    # Use a default emoji based on topic
    emoji = "📘"
    if topic_id == 'numbers': emoji = "🔢"
    if topic_id == 'percentage': emoji = "💯"
    if topic_id == 'ratio': emoji = "⚖️"
    if topic_id == 'profit-loss': emoji = "💰"
    if topic_id == 'si-ci': emoji = "🏦"
    if topic_id == 'time-work': emoji = "⏳"
    if topic_id == 'speed-distance': emoji = "🚆"
    if topic_id == 'algebra': emoji = "✖️"
    if topic_id == 'geometry': emoji = "📐"
    if topic_id == 'mensuration': emoji = "📏"
    if topic_id == 'trigonometry': emoji = "🔺"
    if topic_id == 'di': emoji = "📊"
    
    for card in cards:
        card_title_div = card.find('div', class_='card-title')
        title = card_title_div.text.strip() if card_title_div else "Concept"
        
        # strip out standard emojis if they parsed weird via scraping
        import re
        title = re.sub(r'(\ud83d.\udcda|\ud83d\udcdd|\ud83d\udcca|\u23f1|\ud83d\ude82|\u2716\ufe0f|\ud83d\udcd0|\ud83d\udccf|\ud83d\udd3a|\ud83d\udcca|\ud83d\udcb0|\u2696\ufe0f|\ud83d\udcaf|\ud83d\udd22)', '', title).strip()
        
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
        'emoji': emoji, 
        'description': desc,
        'sections': topic_sections
    })

js_content = "export const MATHS_TOPICS = " + json.dumps(topics, indent=2, ensure_ascii=False) + ";\n"

with open("c:\\Users\\nikhil\\Desktop\\MCA Project\\ssc maths\\frontend\\src\\data\\topics.js", "w", encoding="utf-8") as f:
    f.write(js_content)
