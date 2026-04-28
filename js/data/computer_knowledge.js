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
    },
    comp_number_systems: {
        category: "Computer: Fundamentals",
        title: "Number Systems: Deep Dive & Conversions",
        subtitle: "Binary, Octal, Decimal, Hexadecimal",
        blocks: [
            {
                title: "1. Number System Basics",
                text: "Different ways to represent numbers.",
                examples: [
                    "Decimal (Base 10): 0-9. Standard system humans use.",
                    "Binary (Base 2): 0-1. Used by computers.",
                    "Octal (Base 8): 0-7. Used in some systems.",
                    "Hexadecimal (Base 16): 0-9, A-F. Used for memory addresses, color codes, MAC addresses."
                ],
                shortcut: "DECIMAL = NORMAL. BINARY = 2 symbols. OCTAL = 8 symbols. HEX = 16 symbols (A=10, B=11...F=15)."
            },
            {
                title: "2. Decimal to Binary Conversion",
                text: "Converting base 10 to base 2.",
                examples: [
                    "Method: Repeatedly divide by 2 and note remainders from bottom to top.",
                    "Example: 25 ÷ 2 = 12 R 1, 12 ÷ 2 = 6 R 0, 6 ÷ 2 = 3 R 0, 3 ÷ 2 = 1 R 1, 1 ÷ 2 = 0 R 1.",
                    "Reading bottom to top: 11001 (which is 25 in binary).",
                    "Verification: 1×2⁴ + 1×2³ + 0×2² + 0×2¹ + 1×2⁰ = 16 + 8 + 0 + 0 + 1 = 25. ✓"
                ],
                shortcut: "Power of 2 series: 1, 2, 4, 8, 16, 32, 64, 128, 256. Memorize first 10 powers for quick conversions."
            },
            {
                title: "3. Binary to Decimal Conversion",
                text: "Converting base 2 to base 10.",
                examples: [
                    "Method: Multiply each digit by its place value (powers of 2) and sum.",
                    "Example: 1101₂ = 1×2³ + 1×2² + 0×2¹ + 1×2⁰ = 8 + 4 + 0 + 1 = 13₁₀."
                ],
                shortcut: "Each binary digit represents a power of 2. Leftmost = highest power. Add only the positions with '1'."
            },
            {
                title: "4. Binary to Hexadecimal (Quick Method)",
                text: "Converting base 2 to base 16 without going through decimal.",
                examples: [
                    "Method: Group binary digits in sets of 4 from RIGHT TO LEFT. Each group = one hex digit.",
                    "Example: 101101₂ = 0010 1101 (padding with 0 on left).",
                    "0010 = 2, 1101 = 13 (D in hex). So 101101₂ = 2D₁₆.",
                    "Hex digit table: 0000=0, 0001=1, ..., 1010=A, 1011=B, 1100=C, 1101=D, 1110=E, 1111=F."
                ],
                shortcut: "GROUP BY 4 BINARY DIGITS. Each group converts to one hex digit. This is much faster than decimal conversion."
            }
        ]
    },
    comp_database_fundamentals: {
        category: "Computer: Database",
        title: "Database Concepts: Deep Dive",
        subtitle: "DBMS, SQL, Queries",
        blocks: [
            {
                title: "1. Database Basics",
                text: "Organized storage of data.",
                examples: [
                    "DBMS (Database Management System): Software that manages databases. Examples: MySQL, Oracle, SQL Server, PostgreSQL.",
                    "Table/Relation: Rows (tuples/records) and columns (attributes/fields).",
                    "Primary Key: Unique identifier for each row. No duplicates, no NULL.",
                    "Foreign Key: Links one table to another. Enforces referential integrity.",
                    "Index: Used to speed up queries on frequently searched columns."
                ],
                shortcut: "PRIMARY KEY = UNIQUE. FOREIGN KEY = LINKS TO ANOTHER TABLE."
            },
            {
                title: "2. SQL Basics",
                text: "Structured Query Language for database operations.",
                examples: [
                    "SELECT: Retrieve data. SELECT * FROM Students;",
                    "INSERT: Add new data. INSERT INTO Students VALUES ('John', 25);",
                    "UPDATE: Modify existing data. UPDATE Students SET Age=26 WHERE Name='John';",
                    "DELETE: Remove data. DELETE FROM Students WHERE Age > 30;",
                    "WHERE clause: Filter conditions. AND, OR, NOT operators."
                ],
                shortcut: "CRUD = Create (INSERT), Read (SELECT), Update (UPDATE), Delete (DELETE)."
            },
            {
                title: "3. Database Relationships",
                text: "How tables relate to each other.",
                examples: [
                    "One-to-One: One row in Table A corresponds to one row in Table B.",
                    "One-to-Many: One row in Table A corresponds to many rows in Table B (most common).",
                    "Many-to-Many: Many rows in Table A correspond to many rows in Table B (requires a junction/linking table)."
                ],
                shortcut: "ONE-TO-MANY = MOST COMMON. Use Foreign Key in the 'many' side table pointing to the 'one' side."
            }
        ]
    },
    comp_file_management: {
        category: "Computer: File System",
        title: "File Systems & File Management: Deep Dive",
        subtitle: "File Extensions, Compression, Organization",
        blocks: [
            {
                title: "1. File Extensions & Types",
                text: "Different file types and their purposes.",
                examples: [
                    "Document files: .doc/.docx (Word), .xls/.xlsx (Excel), .ppt/.pptx (PowerPoint).",
                    "Text files: .txt (plain text), .pdf (Portable Document Format).",
                    "Image files: .jpg/.jpeg (compressed), .png (lossless), .gif (animated), .bmp (bitmap).",
                    "Audio files: .mp3 (compressed), .wav (uncompressed), .flac (lossless).",
                    "Video files: .mp4 (H.264 codec), .avi (older), .mov (Apple), .mkv (flexible)."
                ],
                shortcut: ".JPG = COMPRESSED (smaller). .PNG = LOSSLESS (larger). .GIF = ANIMATED."
            },
            {
                title: "2. File Compression",
                text: "Reducing file size for storage and transmission.",
                examples: [
                    "Lossless compression: No data loss. e.g., .zip, .rar, .7z. Useful for documents, archives.",
                    "Lossy compression: Some data loss (imperceptible to humans). e.g., .jpg, .mp3. Useful for images, audio, video.",
                    "Compression ratio: Original size / Compressed size. Higher ratio = better compression."
                ],
                shortcut: "LOSSLESS = PERFECT COPY after decompression. LOSSY = SMALLER but LOSES DETAIL."
            },
            {
                title: "3. File Organization & Backup",
                text: "Managing files on storage systems.",
                examples: [
                    "File system: FAT32 (legacy), NTFS (modern Windows), ext4 (Linux), HFS+ (Mac).",
                    "Backup strategies: Full backup (entire data), Incremental (only changed files since last backup), Differential (changed since last full backup).",
                    "Cloud backup: Google Drive, OneDrive, Dropbox. Automatic synchronization."
                ],
                shortcut: "NTFS = WINDOWS. ext4 = LINUX. FULL BACKUP = MOST COMPLETE. INCREMENTAL = FASTEST BACKUPS."
            }
        ]
    },
    comp_programming_basics: {
        category: "Computer: Programming",
        title: "Programming Concepts: Deep Dive",
        subtitle: "Languages, Compilers, Algorithms",
        blocks: [
            {
                title: "1. Programming Languages",
                text: "Different languages for different purposes.",
                examples: [
                    "High-level: Python, Java, C++, JavaScript. Easy to read and write.",
                    "Low-level: Assembly, Machine code (0s and 1s). Direct hardware control.",
                    "Procedural: C, Pascal. Follow a sequence of instructions.",
                    "Object-Oriented: Java, C++, Python. Use classes and objects.",
                    "Functional: Lisp, Haskell. Based on mathematical functions.",
                    "Scripting: Python, JavaScript, PHP. Interpreted, often for automation."
                ],
                shortcut: "PYTHON = EASIEST. JAVA = MOST POPULAR FOR BUSINESS. JAVASCRIPT = WEB."
            },
            {
                title: "2. Compiler vs Interpreter",
                text: "How code is converted to machine instructions.",
                examples: [
                    "Compiler: Converts entire code to machine code at once (fast execution). Used by C++, Java.",
                    "Interpreter: Converts line-by-line at runtime (slower execution). Used by Python, JavaScript.",
                    "Bytecode: Intermediate between source and machine code. Java uses bytecode (compiled to bytecode, then interpreted by JVM)."
                ],
                shortcut: "COMPILER = COMPILE ONCE, RUN MANY TIMES (faster). INTERPRETER = INTERPRET EACH TIME (slower)."
            },
            {
                title: "3. Basic Data Structures",
                text: "Ways to organize data for efficient operations.",
                examples: [
                    "Array: Ordered collection of elements. Fixed size (in most languages).",
                    "Linked List: Elements linked via pointers. Flexible size. Slower access than arrays.",
                    "Stack: Last-In-First-Out (LIFO). Used in function calls, undo functionality.",
                    "Queue: First-In-First-Out (FIFO). Used in printing, process scheduling.",
                    "Tree: Hierarchical structure with root and branches. Used in file systems, databases.",
                    "Graph: Interconnected nodes. Used in networks, social graphs."
                ],
                shortcut: "ARRAY = FAST ACCESS. LINKED LIST = SLOW ACCESS, FLEXIBLE SIZE. STACK = UNDO. QUEUE = PRINTING."
            }
        ]
    },
    comp_internet_advanced: {
        category: "Computer: Internet Advanced",
        title: "Web Technologies & Advanced Networking: Deep Dive",
        subtitle: "IP Addressing, Domain Names, VPN, Blockchain",
        blocks: [
            {
                title: "1. IP Addressing",
                text: "Identifying devices on networks.",
                examples: [
                    "IPv4: 32-bit address (4 octets). Example: 192.168.1.1. Total addresses: 2³² ≈ 4.3 billion.",
                    "IPv6: 128-bit address. Example: 2001:0db8:85a3::8a2e:0370:7334. Total addresses: 2¹²⁸ (vastly more).",
                    "Loopback address: 127.0.0.1 (refers to localhost).",
                    "Private IP ranges: 10.0.0.0 - 10.255.255.255, 172.16.0.0 - 172.31.255.255, 192.168.0.0 - 192.168.255.255."
                ],
                shortcut: "IPv4 = RUNNING OUT. IPv6 = FUTURE. LOOPBACK = YOURSELF (127.0.0.1)."
            },
            {
                title: "2. Domain Names & DNS",
                text: "Converting domain names to IP addresses.",
                examples: [
                    "Domain Name: Easy-to-remember name (google.com) instead of IP (142.250.185.46).",
                    "DNS (Domain Name System): Translates domain names to IP addresses.",
                    "DNS Servers: Distributed worldwide. Your ISP maintains DNS servers.",
                    "TLD (Top-Level Domain): .com, .org, .net, .in (country code), .gov (government)."
                ],
                shortcut: "DNS = PHONE DIRECTORY OF THE INTERNET. If DNS fails, you can't access websites even if internet is working."
            },
            {
                title: "3. VPN & Encryption",
                text: "Privacy and security on the internet.",
                examples: [
                    "VPN (Virtual Private Network): Encrypts your connection and masks your IP address. Appears as if you're in a different location.",
                    "SSL/TLS: Encryption protocols for websites. HTTPS uses SSL/TLS.",
                    "Encryption: Encoding data so only authorized people can decode it. Uses keys (public/private).",
                    "Firewall: Blocks unauthorized access. Monitors incoming and outgoing traffic."
                ],
                shortcut: "VPN = PRIVACY + SECURITY. SSL/TLS = HTTPS. ENCRYPTION = UNREADABLE WITHOUT KEY."
            },
            {
                title: "4. Blockchain & Cryptocurrency",
                text: "Distributed ledger technology.",
                examples: [
                    "Blockchain: Chain of blocks, each block contains transaction data. Immutable (cannot be altered).",
                    "Bitcoin: First cryptocurrency using blockchain.",
                    "Smart Contracts: Self-executing contracts on blockchain (used in Ethereum).",
                    "Decentralized: No central authority; distributed across network."
                ],
                shortcut: "BLOCKCHAIN = IMMUTABLE CHAIN. BITCOIN = FIRST CRYPTO. SMART CONTRACTS = AUTOMATED EXECUTION."
            }
        ]
    }
};
