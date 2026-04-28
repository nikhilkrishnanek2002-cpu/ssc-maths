import json
from bs4 import BeautifulSoup

def parse_html_guide(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        html_content = f.read()

    soup = BeautifulSoup(html_content, 'lxml')
    topics = []
    
    sections = soup.find_all('div', class_='section')
    
    for section in sections:
        topic_id = section.get('id')
        if not topic_id or topic_id == 'cheatsheet':
            # Skip cheatsheet
            continue
            
        title_div = section.find('div', class_='section-title')
        desc_div = section.find('div', class_='section-sub')
        
        if not title_div:
            continue
            
        name = title_div.text.strip()
        desc = desc_div.text.strip() if desc_div else ""
        
        cards = section.find_all('div', class_='card')
        topic_sections = []
        
        # In current design, each card is a section in the topic
        for card in cards:
            card_title_div = card.find('div', class_='card-title')
            icon_div = card_title_div.find('div', class_='icon') if card_title_div else None
            
            emoji = icon_div.text if icon_div else "👉"
            title = card_title_div.text.replace(emoji, '').strip() if card_title_div else "Concept"
            
            # Find all formulas and shortcuts inside this card
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

            # Text content could be any paragraphs not covered
            paragraphs = card.find_all('p', recursive=False)
            content = " ".join([p.text.strip() for p in paragraphs])
            
            # Look for lists
            lists = card.find_all('ul')
            if lists:
                content += "\n" + "\n".join([li.text.strip() for li in lists[0].find_all('li')])

            # Get tables (simplify to text for now)
            table = card.find('table')
            if table:
                content += "\n(See reference table)"

            topic_sections.append({
                'title': title,
                'content': content,
                'formulas': formulas,
                'shortcuts': shortcuts,
                'examples': examples
            })
            
        topics.append({
            'id': topic_id,
            'name': name,
            'emoji': '📘', # default
            'description': desc,
            'sections': topic_sections
        })

    # Output to a file
    with open('parsed_topics.json', 'w', encoding='utf-8') as f:
        json.dump(topics, f, indent=2, ensure_ascii=False)

parse_html_guide('c:\\Users\\nikhil\\Desktop\\MCA Project\\ssc maths\\SSC_CGL_Maths_Complete_Guide.html')
