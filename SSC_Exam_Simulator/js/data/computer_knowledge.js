const computerData = {
    comp_basics: {
        category: "Computer: Basics",
        title: "Computer Basics & Hardware",
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
        title: "Windows OS & MS Office",
        subtitle: "Operating System and Applications",
        blocks: [
            {
                title: "1. Windows OS & Shortcuts",
                text: "Windows uses GUI. Windows Explorer is the file manager.",
                examples: [
                    "Win + D: Show Desktop",
                    "Win + L: Lock PC",
                    "Alt + Tab: Switch apps",
                    "Ctrl + Shift + Esc: Task Manager"
                ],
                shortcut: "F5 refreshes the window, F2 renames a file, F3 opens search."
            },
            {
                title: "2. MS Office Suites",
                text: "Word (docs), Excel (spreadsheets), PowerPoint (presentations).",
                examples: [
                    "Excel: Rows are numbers (1,2,3), Columns are letters (A,B,C). Active cell is highlighted.",
                    "Word: Ctrl+B (Bold), Ctrl+I (Italic), Ctrl+U (Underline).",
                    "PowerPoint: F5 starts slide show from the beginning, Shift+F5 from current slide."
                ],
                shortcut: "In Excel, formulas ALWAYS start with an equal sign (=). E.g., =SUM(A1:A5)."
            }
        ]
    },
    comp_internet: {
        category: "Computer: Internet",
        title: "Internet, Email & Security",
        subtitle: "Web Browsing and Cyber Threats",
        blocks: [
            {
                title: "1. Web Browsing & Email",
                text: "Browsers display web pages. Emails use protocols to send/receive messages.",
                examples: [
                    "HTTP/HTTPS: Web protocol (S is Secure).",
                    "SMTP: Sending email.",
                    "POP3/IMAP: Receiving email.",
                    "URL: Uniform Resource Locator (web address)."
                ],
                shortcut: "CC in email = Carbon Copy (visible to all). BCC = Blind Carbon Copy (hidden from others)."
            },
            {
                title: "2. Cyber Security & Threats",
                text: "Malware refers to malicious software designed to harm or exploit systems.",
                examples: [
                    "Virus: Needs a host file to replicate.",
                    "Worm: Self-replicating, doesn't need a host.",
                    "Trojan: Disguised as legitimate software.",
                    "Phishing: Fake emails/sites to steal credentials."
                ],
                shortcut: "Antivirus and Firewalls are the primary defenses. Firewalls monitor incoming/outgoing network traffic."
            }
        ]
    }
};
