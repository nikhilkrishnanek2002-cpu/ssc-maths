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
    },
    comp_operating_systems: {
        category: "Computer: Systems",
        title: "Operating Systems and Process Management",
        subtitle: "Scheduling, Memory, File Systems, and Commands",
        blocks: [
            {
                title: "1. OS Fundamentals",
                text: "Operating System is system software that manages hardware, files, memory, and processes.",
                examples: [
                    "Examples: Windows, Linux, macOS, Android.",
                    "Single-user vs multi-user OS.",
                    "GUI OS uses icons/windows; CLI OS uses typed commands.",
                    "Kernel is the core part of an operating system."
                ],
                shortcut: "If question asks interface type with command prompt focus, think CLI; with icons and mouse, think GUI."
            },
            {
                title: "2. Process Scheduling and Memory",
                text: "CPU scheduling decides which process gets CPU time; memory management decides where processes are stored.",
                examples: [
                    "FCFS: First Come First Served.",
                    "Round Robin: Time-slice based scheduling.",
                    "Multitasking: Multiple programs run apparently at same time.",
                    "Virtual memory uses disk space as temporary RAM extension."
                ],
                shortcut: "Round Robin is commonly linked with time quantum; FCFS is simplest but can cause long waiting."
            },
            {
                title: "3. File Systems and Useful Commands",
                text: "File system organizes data as files and folders with naming and permissions.",
                examples: [
                    "Common file systems: NTFS, FAT32, exFAT.",
                    "Windows command examples: dir (list), cd (change directory), cls (clear screen).",
                    "Linux command examples: ls (list), pwd (current path), mkdir (create folder).",
                    "Absolute path starts from root/drive; relative path depends on current folder."
                ],
                shortcut: "For command questions, map command to one core action: list, navigate, create, delete, copy."
            }
        ]
    },
    comp_dbms_sql_practice: {
        category: "Computer: Database Tier 2",
        title: "DBMS and SQL Practical Capsule",
        subtitle: "Keys, normalization, joins, and common SQL commands",
        blocks: [
            {
                title: "1. Relational Design and Keys",
                text: "Database tables are connected using key relationships to avoid duplication and inconsistency.",
                examples: [
                    "Primary key uniquely identifies each row.",
                    "Foreign key links child table to parent table.",
                    "Composite key uses multiple columns for uniqueness.",
                    "Candidate key is a potential primary key."
                ],
                shortcut: "Primary key = unique + not null. This combination appears in many objective questions.",
                practiceProblems: [
                    "Identify key type in StudentID column with unique values.",
                    "Choose relationship key from options for two linked tables."
                ],
                miniQuiz: [
                    { q: "Can primary key contain null?", answer: "No", explanation: "Primary key must always have a value." },
                    { q: "Foreign key mainly ensures what?", answer: "Referential integrity", explanation: "It enforces valid parent-child references." }
                ]
            },
            {
                title: "2. Core SQL Query Patterns",
                text: "SSC computer sections often ask command-purpose and basic query outcomes.",
                examples: [
                    "SELECT retrieves data",
                    "INSERT adds new rows",
                    "UPDATE modifies existing rows",
                    "DELETE removes rows"
                ],
                shortcut: "DDL defines structure (CREATE, ALTER, DROP); DML manipulates data (INSERT, UPDATE, DELETE).",
                practiceProblems: [
                    "Command to rename a table column in SQL?",
                    "Difference between WHERE and HAVING in grouped query?"
                ],
                miniQuiz: [
                    { q: "Which clause filters groups after aggregation?", answer: "HAVING", explanation: "WHERE filters rows before grouping." },
                    { q: "SQL command to add a table?", answer: "CREATE", explanation: "CREATE TABLE defines new relation." }
                ]
            },
            {
                title: "3. Joins and Normalization",
                text: "Join questions are frequent due to their role in combining relational data.",
                examples: [
                    "INNER JOIN returns matching rows from both tables",
                    "LEFT JOIN returns all left table rows and matching right rows",
                    "RIGHT JOIN mirrors LEFT JOIN on right side",
                    "Normalization reduces redundancy (1NF, 2NF, 3NF basics)"
                ],
                shortcut: "If question says 'all rows from left table', answer is LEFT JOIN.",
                practiceProblems: [
                    "Choose join type to retain all employee rows with optional department data.",
                    "Pick normal form that removes partial dependency."
                ],
                miniQuiz: [
                    { q: "Which normal form removes repeating groups?", answer: "1NF", explanation: "First normal form enforces atomic values." },
                    { q: "Join that keeps all left rows?", answer: "LEFT JOIN", explanation: "Unmatched right values become null." }
                ]
            }
        ]
    },
    comp_cyber_security_practice: {
        category: "Computer: Security Tier 2",
        title: "Cyber Security and Safe Computing",
        subtitle: "Authentication, attacks, cryptography, and prevention",
        blocks: [
            {
                title: "1. Authentication and Access Control",
                text: "Security starts with identity verification and controlled permissions.",
                examples: [
                    "Authentication verifies identity (password, OTP, biometrics)",
                    "Authorization defines allowed actions after login",
                    "MFA combines two or more independent factors",
                    "Principle of least privilege gives minimum required access"
                ],
                shortcut: "Authentication asks 'who are you'; authorization asks 'what can you do'.",
                practiceProblems: [
                    "Classify OTP login as authentication or authorization.",
                    "Pick safest policy for role-based access in office network."
                ],
                miniQuiz: [
                    { q: "Fingerprint login is which factor type?", answer: "Something you are", explanation: "Biometric factor category." },
                    { q: "MFA improves security by?", answer: "Requiring multiple independent proofs", explanation: "Compromise of one factor is not enough." }
                ]
            },
            {
                title: "2. Attack Types and Defenses",
                text: "Understanding common attack patterns helps rapid elimination in objective questions.",
                examples: [
                    "Phishing steals credentials via fake communication",
                    "Ransomware encrypts files and demands payment",
                    "DDoS floods service with traffic",
                    "Social engineering exploits human trust"
                ],
                shortcut: "If attack involves tricking people rather than systems, classify it as social engineering.",
                practiceProblems: [
                    "Identify attack in fake bank email requesting OTP.",
                    "Best first action after ransomware detection?"
                ],
                miniQuiz: [
                    { q: "DDoS mainly targets what?", answer: "Service availability", explanation: "Flooding traffic makes service unreachable." },
                    { q: "Fake urgent email for password reset is?", answer: "Phishing", explanation: "Credential theft via deception." }
                ]
            },
            {
                title: "3. Encryption and Secure Communication",
                text: "Encryption protects confidentiality in data storage and transmission.",
                examples: [
                    "Symmetric encryption uses one shared key",
                    "Asymmetric encryption uses public-private key pair",
                    "Hashing produces fixed digest for integrity checks",
                    "Digital signatures verify sender authenticity"
                ],
                shortcut: "Hashing is one-way; encryption is reversible with key.",
                practiceProblems: [
                    "Which technique verifies file integrity?",
                    "Differentiate public key and private key usage."
                ],
                miniQuiz: [
                    { q: "Which is one-way: encryption or hashing?", answer: "Hashing", explanation: "Hash values are not designed for reversal." },
                    { q: "HTTPS primarily adds what to HTTP?", answer: "TLS encryption", explanation: "Secure channel for web traffic." }
                ]
            }
        ]
    },
    comp_network_protocols_practice: {
        category: "Computer: Networking Tier 2",
        title: "Networking and Protocol Stack",
        subtitle: "OSI/TCP-IP basics, protocol-purpose mapping, and practical understanding",
        blocks: [
            {
                title: "1. Protocol Purpose Mapping",
                text: "Protocol questions are usually about function and default usage context.",
                examples: [
                    "HTTP/HTTPS for web transfer",
                    "FTP for file transfer",
                    "SMTP for sending emails",
                    "POP3/IMAP for receiving emails"
                ],
                shortcut: "If protocol handles secure web browsing, choose HTTPS.",
                practiceProblems: [
                    "Identify protocol used for outgoing email.",
                    "Choose protocol for secure webpage access."
                ],
                miniQuiz: [
                    { q: "SMTP is used for?", answer: "Sending mail", explanation: "Simple Mail Transfer Protocol handles outbound mail." },
                    { q: "Protocol for encrypted web traffic?", answer: "HTTPS", explanation: "HTTP over TLS/SSL." }
                ]
            },
            {
                title: "2. Network Layers and Devices",
                text: "Layered model understanding helps answer router/switch/hub questions quickly.",
                examples: [
                    "Switch works mainly at data-link layer for MAC forwarding",
                    "Router connects networks using IP layer decisions",
                    "Hub broadcasts to all ports without filtering"
                ],
                shortcut: "If question says 'connect different networks', answer router.",
                practiceProblems: [
                    "Pick correct device for inter-network connection.",
                    "Choose device that broadcasts blindly."
                ],
                miniQuiz: [
                    { q: "Device for LAN segment intelligent forwarding?", answer: "Switch", explanation: "Switch forwards using MAC table." },
                    { q: "Which device lacks packet intelligence?", answer: "Hub", explanation: "Hub simply repeats signals." }
                ]
            }
        ]
    },

    comp_excel_data_analysis: {
        category: "Computer: Excel Tier 2",
        title: "Excel Data Analysis and Formula Practice",
        subtitle: "Functions, lookup logic, sorting/filtering, and spreadsheet productivity",
        blocks: [
            {
                title: "1. Formula and Function Essentials",
                text: "Formula mastery improves both objective and practical computer section performance.",
                examples: [
                    "SUM, AVERAGE, MAX, MIN for numerical summaries",
                    "COUNT counts numbers; COUNTA counts non-empty cells",
                    "IF function supports conditional outputs",
                    "Absolute reference example: $A$1"
                ],
                shortcut: "Use $ for locking rows/columns while dragging formulas.",
                practiceProblems: [
                    "Write formula to compute average of B2:B11.",
                    "Count non-empty cells in range C1:C50."
                ],
                miniQuiz: [
                    { q: "Which function counts all non-empty cells?", answer: "COUNTA", explanation: "COUNTA counts text, numbers, and logical values." },
                    { q: "Formula reference that never changes when copied?", answer: "Absolute reference", explanation: "Uses dollar signs in address." }
                ]
            },
            {
                title: "2. Lookup and Data Cleaning",
                text: "Lookup functions and sorting are common in practical office data workflows.",
                examples: [
                    "VLOOKUP searches first column and returns mapped value",
                    "INDEX-MATCH is flexible alternative to VLOOKUP",
                    "Sort can be ascending or descending by selected key",
                    "Filter displays rows matching criteria"
                ],
                shortcut: "Use named ranges and structured tables to avoid reference errors.",
                practiceProblems: [
                    "Choose function for value retrieval by key.",
                    "Find method to show only rows where marks > 80."
                ],
                miniQuiz: [
                    { q: "Tool to temporarily hide non-matching rows?", answer: "Filter", explanation: "Filter keeps source data intact while narrowing view." },
                    { q: "VLOOKUP requires key in which side?", answer: "Leftmost column of lookup range", explanation: "Classic VLOOKUP limitation." }
                ]
            }
        ]
    },

    comp_ai_ml_foundations: {
        category: "Computer: Emerging Tech",
        title: "AI and Machine Learning Foundations",
        subtitle: "Core definitions, model types, and practical use cases",
        blocks: [
            {
                title: "1. AI vs ML vs Deep Learning",
                text: "AI is broad intelligence simulation; ML is data-driven learning; deep learning uses neural networks.",
                examples: [
                    "AI example: rule-based chatbot",
                    "ML example: spam email classifier",
                    "Deep learning example: image recognition"
                ],
                shortcut: "All deep learning is ML, and all ML is part of AI.",
                practiceProblems: [
                    "Classify recommendation engine under AI/ML category.",
                    "Differentiate supervised and unsupervised learning."
                ],
                miniQuiz: [
                    { q: "Which learning uses labeled data?", answer: "Supervised learning", explanation: "Training examples include known outputs." },
                    { q: "Face recognition is often based on?", answer: "Deep learning", explanation: "Neural networks handle complex visual patterns." }
                ]
            },
            {
                title: "2. Responsible AI Basics",
                text: "Modern exam and interview contexts include fairness, privacy, and explainability concerns.",
                examples: [
                    "Bias can arise from skewed training data",
                    "Privacy requires careful handling of personal data",
                    "Explainability is needed for high-impact decisions"
                ],
                shortcut: "A high-accuracy model is not automatically fair or trustworthy.",
                practiceProblems: [
                    "Identify risk of using biased historical data.",
                    "Choose safeguard for user data in AI systems."
                ],
                miniQuiz: [
                    { q: "Key ethical risk in ML hiring model?", answer: "Bias", explanation: "Model may replicate unfair historical patterns." },
                    { q: "Transparency in AI helps with?", answer: "Trust and accountability", explanation: "Users can understand decision rationale." }
                ]
            }
        ]
    },

    comp_spreadsheet_shortcuts: {
        category: "Computer: Productivity",
        title: "Spreadsheet Shortcuts and Productivity",
        subtitle: "Keyboard shortcuts, ranges, and fast workflow in office software",
        blocks: [
            {
                title: "1. Core Shortcuts",
                text: "Shortcuts reduce time in computer objective questions and practical use.",
                examples: [
                    "Ctrl+C copy, Ctrl+V paste, Ctrl+X cut",
                    "Ctrl+Z undo, Ctrl+Y redo",
                    "Ctrl+S save, Ctrl+P print",
                    "Alt+Tab switch apps"
                ],
                shortcut: "If a shortcut is universal editing action, it is usually Ctrl plus a single key.",
                practiceProblems: [
                    "Which shortcut saves file?",
                    "Which shortcut opens print dialog?"
                ],
                miniQuiz: [
                    { q: "Undo shortcut?", answer: "Ctrl+Z", explanation: "Universal undo command." },
                    { q: "Paste shortcut?", answer: "Ctrl+V", explanation: "Standard clipboard paste." }
                ]
            },
            {
                title: "2. Ranges, Cells, and References",
                text: "Spreadsheet coordinates and references are basic exam material.",
                examples: [
                    "Cell address example: A1",
                    "Range example: A1:B10",
                    "Mixed reference locks row or column only"
                ],
                shortcut: "Remember row comes after column in cell address.",
                practiceProblems: [
                    "Write address for third column and fifth row.",
                    "Select a range from C2 to F9."
                ],
                miniQuiz: [
                    { q: "Cell B7 means what column?", answer: "B", explanation: "Column letter first." },
                    { q: "Range uses what separator?", answer: ":", explanation: "Colon marks range selection." }
                ]
            }
        ]
    },

    comp_hardware_peripherals: {
        category: "Computer: Hardware",
        title: "Hardware and Peripheral Devices",
        subtitle: "Input, output, storage, and common device roles",
        blocks: [
            {
                title: "1. Input and Output Devices",
                text: "Devices that send data to computer and receive data from computer.",
                examples: [
                    "Keyboard, mouse, scanner are input devices",
                    "Monitor, printer, speakers are output devices",
                    "Touchscreen acts as both input and output"
                ],
                shortcut: "If device sends data into computer, classify it as input.",
                practiceProblems: [
                    "Classify barcode scanner.",
                    "Classify projector."
                ],
                miniQuiz: [
                    { q: "Printer is which type?", answer: "Output device", explanation: "It produces hard copy output." },
                    { q: "Touchscreen is what kind of device?", answer: "Both input and output", explanation: "It displays and accepts touch input." }
                ]
            },
            {
                title: "2. Storage Devices",
                text: "Storage can be primary, secondary, magnetic, optical, or solid-state.",
                examples: [
                    "HDD uses magnetic disks",
                    "SSD is faster solid-state storage",
                    "USB flash drive uses flash memory",
                    "CD/DVD are optical media"
                ],
                shortcut: "If speed matters, SSD usually beats HDD.",
                practiceProblems: [
                    "Choose non-volatile storage device.",
                    "Pick faster storage among HDD and SSD."
                ],
                miniQuiz: [
                    { q: "SSD stands for?", answer: "Solid State Drive", explanation: "Non-mechanical storage." },
                    { q: "CD uses which storage principle?", answer: "Optical", explanation: "Laser-based read/write." }
                ]
            }
        ]
    },

    comp_os_security_tools: {
        category: "Computer: Systems",
        title: "OS Utilities and Maintenance Tools",
        subtitle: "Backup, compression, antivirus, and system maintenance",
        blocks: [
            {
                title: "1. Backup and Compression",
                text: "Backup protects data; compression reduces file size for storage or transfer.",
                examples: [
                    "Full backup copies everything",
                    "Incremental backup copies only changes",
                    "ZIP and RAR are common compressed formats"
                ],
                shortcut: "Backup is for recovery; compression is for size reduction.",
                practiceProblems: [
                    "Choose backup method for daily small changes.",
                    "Name a common compression format."
                ],
                miniQuiz: [
                    { q: "Compression purpose?", answer: "Reduce size", explanation: "Makes storage and transfer efficient." },
                    { q: "Backup protects against what?", answer: "Data loss", explanation: "Restores files after failure or deletion." }
                ]
            },
            {
                title: "2. Antivirus and System Maintenance",
                text: "Protection tools scan, detect, and remove malicious software or performance clutter.",
                examples: [
                    "Antivirus scans and removes malware",
                    "Defragmentation reorganizes files on HDD for better access",
                    "Firewall monitors network traffic"
                ],
                shortcut: "Defragmentation is mainly relevant to HDD, not SSD in same way.",
                practiceProblems: [
                    "Which tool removes malware?",
                    "What utility improves HDD access by rearrangement?"
                ],
                miniQuiz: [
                    { q: "Firewall is used for?", answer: "Network traffic control", explanation: "Monitors incoming/outgoing traffic." },
                    { q: "Defragmentation mainly helps which storage?", answer: "HDD", explanation: "Mechanical disks benefit from file rearrangement." }
                ]
            }
        ]
    },

    comp_emerging_tech_revision: {
        category: "Computer: Emerging Tech",
        title: "Emerging Technologies Revision",
        subtitle: "Cloud, IoT, blockchain, and future computing basics",
        blocks: [
            {
                title: "1. Cloud and IoT",
                text: "Cloud delivers services over internet; IoT connects physical devices to networks.",
                examples: [
                    "Cloud storage: remote file access",
                    "IoT device: smart thermostat",
                    "Wearables can be part of IoT ecosystem"
                ],
                shortcut: "If device collects and shares sensor data, think IoT.",
                practiceProblems: [
                    "Classify smart watch as IoT or not.",
                    "Give one cloud service example."
                ],
                miniQuiz: [
                    { q: "IoT stands for?", answer: "Internet of Things", explanation: "Connected smart devices and sensors." },
                    { q: "Cloud service example?", answer: "Google Drive", explanation: "Online storage and access." }
                ]
            },
            {
                title: "2. Blockchain Recap",
                text: "Blockchain is a distributed ledger with immutable chained records.",
                examples: [
                    "Each block contains data, hash, and previous block reference",
                    "Changing one block affects the whole chain",
                    "Used in cryptocurrencies and secure record systems"
                ],
                shortcut: "Blockchain is best remembered as shared, chained, tamper-resistant records.",
                practiceProblems: [
                    "Identify primary property of blockchain.",
                    "Name first cryptocurrency using blockchain."
                ],
                miniQuiz: [
                    { q: "Blockchain is centrally controlled?", answer: "No", explanation: "It is decentralized." },
                    { q: "Bitcoin is a?", answer: "Cryptocurrency", explanation: "First widely known blockchain-based currency." }
                ]
            }
        ]
    }
};
