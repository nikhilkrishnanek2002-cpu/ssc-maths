const computerData = {
    comp_basics: {
        category: "Computer: Basics",
        title: "Computer Basics & Hardware: Massive Deep Dive & Option Elimination",
        subtitle: "CPU, Memory, and I/O Devices",
        blocks: [
            {
                title: "1. CPU (Central Processing Unit) Architecture",
                text: "The CPU is the brain, consisting of ALU (Arithmetic Logic Unit), CU (Control Unit), and Registers.",
                examples: [
                    "Registers: Smallest and fastest memory inside the CPU. Temporarily holds data being processed.",
                    "ALU: Performs all arithmetic (+, -, *, /) and logical (AND, OR, NOT) operations.",
                    "Control Unit: Directs the flow of data. It does NOT process data; it just manages the components."
                ],
                shortcut: "SPEED HACK: If a question asks for the 'fastest' memory, ALWAYS look for 'Registers'. If 'Registers' is not in the options, then choose 'Cache'."
            },
            {
                title: "2. Memory Hierarchy & Types",
                text: "Primary memory includes RAM (volatile) and ROM (non-volatile).",
                examples: [
                    "SRAM (Static RAM): Faster, uses flip-flops, no need to refresh. Used in Cache memory.",
                    "DRAM (Dynamic RAM): Slower, uses capacitors, needs constant refreshing. Used in Main memory.",
                    "PROM/EPROM/EEPROM: Programmable, Erasable (via UV light), Electrically Erasable (via electrical signals)."
                ],
                shortcut: "Memory Hierarchy (Fastest/Smallest to Slowest/Largest): Registers > Cache > Main Memory (RAM) > Secondary Storage (SSD/HDD)."
            },
            {
                title: "3. Input/Output Devices and Ports",
                text: "I/O devices allow communication with the system. Ports connect external devices.",
                examples: [
                    "Input: Keyboard, Mouse, Scanner, MICR (Magnetic Ink Character Recognition - used in banks), OMR (Optical Mark Recognition - used for MCQ sheets), OCR.",
                    "Output: Monitor, Printer, Plotter (used for high-quality vector graphics like architectural blueprints).",
                    "Ports: USB (Universal Serial Bus), HDMI (Video/Audio), VGA, RJ45 (Ethernet/Network)."
                ],
                shortcut: "Printers: Laser (fastest, uses toner powder), Inkjet (uses liquid ink cartridges), Dot Matrix (impact printer, uses ribbons, very noisy)."
            }
        ]
    },
    comp_software: {
        category: "Computer: Software",
        title: "Windows OS & MS Office: Massive Deep Dive & Option Elimination",
        subtitle: "Shortcuts & Application Mastery",
        blocks: [
            {
                title: "1. Windows OS & General Shortcuts",
                text: "Windows uses GUI. Windows Explorer is the file manager.",
                examples: [
                    "Win + D: Show/Hide Desktop",
                    "Win + L: Lock PC",
                    "Win + R: Open Run dialog",
                    "Alt + Tab: Switch between open apps",
                    "Ctrl + Shift + Esc: Open Task Manager directly (Ctrl+Alt+Del opens a security screen first)"
                ],
                shortcut: "Function Keys: F1 = Help, F2 = Rename, F5 = Refresh/Slide Show, F7 = Spell Check (in MS Word), F12 = Save As."
            },
            {
                title: "2. MS Word Deep Dive",
                text: "The core MS Office document application.",
                examples: [
                    "Ctrl+J (Justify alignment), Ctrl+E (Center alignment), Ctrl+L/R (Left/Right).",
                    "Ctrl+K (Insert Hyperlink), Ctrl+H (Replace).",
                    "Watermark: A faint image or text placed behind the document text (found in Design tab)."
                ],
                shortcut: "In MS Word, Ctrl + = creates Subscript (H₂O). Ctrl + Shift + + creates Superscript (x²). 'Ctrl+W' closes the current document."
            },
            {
                title: "3. MS Excel Advanced Tricks",
                text: "Spreadsheet application.",
                examples: [
                    "A workbook contains multiple worksheets. Maximum rows in modern Excel = 1,048,576. Maximum columns = 16,384 (Ends at XFD).",
                    "Excel formulas ALWAYS start with '='. E.g., =SUM(A1:A5).",
                    "Absolute Cell Reference: Uses '$' sign (e.g., $A$1) to lock the cell so it doesn't change when dragged."
                ],
                shortcut: "SPEED HACK: Press F4 in Excel to toggle between relative and absolute references ($A$1). Ctrl + ; inserts the current date."
            },
            {
                title: "4. MS PowerPoint",
                text: "Presentation software.",
                examples: [
                    "F5: Starts slide show from the BEGINNING.",
                    "Shift+F5: Starts slide show from the CURRENT slide.",
                    "Ctrl+M: Inserts a NEW slide. (Do NOT confuse with Ctrl+N, which opens a completely new presentation file)."
                ],
                shortcut: "To duplicate a selected slide or object instantly, press Ctrl+D."
            }
        ]
    },
    comp_internet: {
        category: "Computer: Internet",
        title: "Internet, Networking & Security: Massive Deep Dive & Option Elimination",
        subtitle: "Web Browsing, Protocols, and Cyber Threats",
        blocks: [
            {
                title: "1. Web Protocols and Emails",
                text: "Rules that govern data transfer across networks.",
                examples: [
                    "HTTP/HTTPS: Web protocol. HTTPS is encrypted via SSL/TLS (Port 443).",
                    "SMTP (Simple Mail Transfer Protocol): Used for SENDING emails.",
                    "POP3/IMAP: Used for RECEIVING emails. (IMAP keeps it on the server, POP3 downloads and deletes from server).",
                    "FTP: File Transfer Protocol (used for uploading/downloading files)."
                ],
                shortcut: "Email fields: CC = Carbon Copy (visible to all). BCC = Blind Carbon Copy (hidden from others). If you want to hide email addresses, use BCC."
            },
            {
                title: "2. Networking Devices & Topologies",
                text: "How computers connect to each other.",
                examples: [
                    "Router: Connects different networks (e.g., LAN to the internet) and assigns IP addresses.",
                    "Switch: Connects devices within the SAME network intelligently (sends data only to the intended device).",
                    "Hub: Connects devices but broadcasts data to EVERYONE (dumb device).",
                    "Topologies: Star (all connected to a central hub/switch), Ring (circular), Bus (single main backbone cable)."
                ],
                shortcut: "Star topology is the most common in modern LANs. If the central switch fails in a Star topology, the entire network goes down."
            },
            {
                title: "3. Cyber Security & Malware",
                text: "Malicious software designed to harm or exploit systems.",
                examples: [
                    "Virus: Needs a host file/program to replicate. Spreads when YOU execute the file.",
                    "Worm: Self-replicating, doesn't need a host. Spreads automatically across networks without user action.",
                    "Trojan: Disguised as legitimate software (e.g., a fake game). Does not self-replicate.",
                    "Phishing: Fake emails/websites designed to trick you into giving passwords or credit card info.",
                    "Ransomware: Encrypts your files and demands payment (usually crypto) to unlock them."
                ],
                shortcut: "A Firewall monitors and controls incoming and outgoing network traffic based on security rules. It acts as a barrier between your secure internal network and the internet."
            }
        ]
    },
    comp_advanced: {
        category: "Computer: Advanced",
        title: "Data Representation & Emerging Tech: Massive Deep Dive",
        subtitle: "Binary, Cloud, and Web 3.0",
        blocks: [
            {
                title: "1. Data Representation (Bits & Bytes)",
                text: "How computers store data.",
                examples: [
                    "Bit: Binary Digit (0 or 1). Smallest unit of data.",
                    "Nibble: 4 bits.",
                    "Byte: 8 bits. (1 Character = 1 Byte).",
                    "Memory Scale: KB (1024 Bytes) > MB > GB > TB > PB > EB > ZB > YB."
                ],
                shortcut: "ASCII (American Standard Code for Information Interchange) is a 7-bit character code. Unicode is usually 16-bit to support all global languages."
            },
            {
                title: "2. Cloud Computing",
                text: "Delivering computing services over the internet.",
                examples: [
                    "SaaS (Software as a Service): Google Docs, Microsoft Office 365.",
                    "PaaS (Platform as a Service): Google App Engine, Heroku (provides a platform for developers).",
                    "IaaS (Infrastructure as a Service): Amazon Web Services (AWS), Microsoft Azure (provides virtual servers)."
                ],
                shortcut: "If you just 'use' it (like Gmail), it's SaaS. If you 'code' on it, it's PaaS. If you 'host' virtual machines on it, it's IaaS."
            }
        ]
    }
};
