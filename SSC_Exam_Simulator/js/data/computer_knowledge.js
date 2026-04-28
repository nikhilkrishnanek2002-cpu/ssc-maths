const computerData = {
    comp_basics: {
        category: "Computer: Basics",
        title: "Computer Basics & Hardware: Deep Dive",
        subtitle: "CPU, Memory, and I/O Devices",
        blocks: [
            {
                title: "1. CPU and Memory",
                text: "The CPU is the brain, consisting of ALU, CU, and Registers. Primary memory includes RAM (volatile) and ROM (non-volatile).",
                examples: [
                    "SRAM is faster than DRAM.",
                    "Cache memory is placed between CPU and RAM to speed up execution."
                ],
                shortcut: "Memory Hierarchy (Fastest to Slowest): Registers > Cache > RAM > SSD > HDD."
            },
            {
                title: "2. Input/Output and Ports",
                text: "I/O devices allow communication with the system. Ports connect external devices.",
                examples: [
                    "Input: Keyboard, Mouse, Scanner, MICR.",
                    "Output: Monitor, Printer, Plotter.",
                    "Ports: USB (Universal), HDMI (Video/Audio), VGA."
                ],
                shortcut: "Printers: Laser (fastest, uses toner), Inkjet (uses liquid ink), Dot Matrix (impact printer)."
            }
        ]
    },
    comp_software: {
        category: "Computer: Software",
        title: "Windows OS & MS Office: Deep Dive",
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
                    "Ctrl + Shift + Esc: Open Task Manager directly"
                ],
                shortcut: "Function Keys: F2 = Rename, F5 = Refresh, F7 = Spell Check (in MS Word), Alt + F4 = Close active window."
            },
            {
                title: "2. MS Word & Excel (Most Asked)",
                text: "The core MS Office applications.",
                examples: [
                    "Word: Ctrl+J (Justify), Ctrl+H (Replace), Ctrl+K (Hyperlink).",
                    "Excel: A workbook contains multiple worksheets. Maximum rows in modern Excel = 1,048,576. Maximum columns = 16,384 (XFD).",
                    "Excel formulas ALWAYS start with '='. E.g., =SUM(A1:A5)."
                ],
                shortcut: "In MS Word, Ctrl + = creates Subscript (H₂O). Ctrl + Shift + + creates Superscript (x²)."
            },
            {
                title: "3. MS PowerPoint",
                text: "Presentation software.",
                examples: [
                    "F5: Starts slide show from the BEGINNING.",
                    "Shift+F5: Starts slide show from the CURRENT slide.",
                    "Ctrl+M: Inserts a NEW slide (Don't confuse with Ctrl+N, which opens a new presentation)."
                ],
                shortcut: "To duplicate a slide, select it and press Ctrl+D."
            }
        ]
    },
    comp_internet: {
        category: "Computer: Internet",
        title: "Internet, Networking & Security: Deep Dive",
        subtitle: "Web Browsing, Protocols, and Cyber Threats",
        blocks: [
            {
                title: "1. Web Protocols and Emails",
                text: "Rules that govern data transfer.",
                examples: [
                    "HTTP/HTTPS: Web protocol (HTTPS is encrypted via SSL/TLS).",
                    "SMTP (Simple Mail Transfer Protocol): Used for SENDING emails.",
                    "POP3/IMAP: Used for RECEIVING emails (IMAP keeps it on the server, POP3 downloads it).",
                    "FTP: File Transfer Protocol (used for uploading/downloading files to a server)."
                ],
                shortcut: "CC in email = Carbon Copy (visible to all). BCC = Blind Carbon Copy (hidden from others). If you want to hide email addresses, use BCC."
            },
            {
                title: "2. Networking Devices & Topologies",
                text: "How computers connect to each other.",
                examples: [
                    "Router: Connects different networks (e.g., your home LAN to the internet).",
                    "Switch: Connects devices within the SAME network intelligently.",
                    "Hub: Connects devices but broadcasts data to EVERYONE (dumb device).",
                    "Topologies: Star (all connected to a central hub), Ring (circular), Bus (single main cable)."
                ],
                shortcut: "Star topology is the most common in modern LANs. If the central hub fails, the whole network goes down."
            },
            {
                title: "3. Cyber Security & Malware",
                text: "Malicious software designed to harm or exploit systems.",
                examples: [
                    "Virus: Needs a host file/program to replicate. Spreads when you execute the file.",
                    "Worm: Self-replicating, doesn't need a host. Spreads automatically across networks.",
                    "Trojan: Disguised as legitimate software (e.g., a fake game). Does not self-replicate.",
                    "Phishing: Fake emails/websites designed to steal passwords or credit card info.",
                    "Ransomware: Encrypts your files and demands payment to unlock them."
                ],
                shortcut: "A Firewall monitors and controls incoming and outgoing network traffic based on security rules. It acts as a barrier."
            }
        ]
    }
};
