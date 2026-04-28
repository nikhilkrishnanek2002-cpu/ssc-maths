# 🏗️ System Architecture

## High-Level Architecture

```
┌─────────────────────────────────────────────────────────┐
│                    Your Browser                          │
│               http://localhost:3000                      │
│                                                          │
│  ┌──────────────────────────────────────────────────┐   │
│  │         React Frontend                           │   │
│  │  ┌────────────────────────────────────────────┐ │   │
│  │  │  Navigation Bar                            │ │   │
│  │  │  [Study] [Calculator] [Quiz] [Dashboard]  │ │   │
│  │  └────────────────────────────────────────────┘ │   │
│  │                     ▼                            │   │
│  │  ┌────────────────────────────────────────────┐ │   │
│  │  │  Content View                              │ │   │
│  │  │  ├─ Guide.js       (Study Materials)      │ │   │
│  │  │  ├─ Calculator.js  (Math Tools)           │ │   │
│  │  │  ├─ Quiz.js        (Practice Tests)       │ │   │
│  │  │  └─ Dashboard.js   (Teacher Stats)        │ │   │
│  │  └────────────────────────────────────────────┘ │   │
│  │                                                  │   │
│  │              React Components                   │   │
│  │                                                  │   │
│  └──────────────────────────────────────────────────┘   │
│                         ▼                                │
│         AJAX Requests (HTTP POST/GET)                   │
└─────────────────────────────────────────────────────────┘
                         ▼
┌─────────────────────────────────────────────────────────┐
│         Python Flask Backend                            │
│         http://localhost:5000                           │
│                                                         │
│  ┌────────────────────────────────────────────────┐    │
│  │         API Routes (app.py)                    │    │
│  │  POST /api/hcf           → calculator.hcf()    │    │
│  │  POST /api/lcm           → calculator.lcm()    │    │
│  │  POST /api/percentage    → percentage calc     │    │
│  │  POST /api/profit-loss   → profit/loss calc    │    │
│  │  POST /api/simple-interest                     │    │
│  │  POST /api/compound-interest                   │    │
│  │  POST /api/speed-distance-time                 │    │
│  │  POST /api/area-perimeter → geometry funcs     │    │
│  │  POST /api/statistics    → stats functions     │    │
│  │  ... (15+ total endpoints)                     │    │
│  └────────────────────────────────────────────────┘    │
│                         ▼                               │
│  ┌────────────────────────────────────────────────┐    │
│  │    Calculator Module (calculator.py)           │    │
│  │                                                │    │
│  │  Math Functions:                               │    │
│  │  • hcf(), lcm()                               │    │
│  │  • percentage_of()                             │    │
│  │  • profit_loss_calc()                          │    │
│  │  • simple_interest()                           │    │
│  │  • compound_interest()                         │    │
│  │  • time_work_together()                        │    │
│  │  • speed conversions                           │    │
│  │  • geometry functions                          │    │
│  │  • statistics functions                        │    │
│  │  • AP/GP calculations                          │    │
│  │  ... (50+ functions)                           │    │
│  │                                                │    │
│  └────────────────────────────────────────────────┘    │
│                                                         │
│              (No Database - Uses Memory)               │
│          (Can be extended with PostgreSQL)            │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

## Component Structure

```
Frontend/
├── App.js
│   └── Navigation.js
│       ├── Guide.js
│       │   └── Uses data/topics.js
│       ├── Calculator.js
│       │   └── Calls /api/* endpoints
│       ├── Quiz.js
│       │   └── Uses data/quizzes.js
│       └── TeacherDashboard.js
│
└── CSS Files (Styling)
```

## Data Flow - Example: Using Calculator

```
User Action Flow:
┌────────────────┐
│  User enters   │
│  numbers and   │
│  clicks "HCF"  │
└────────────────┘
        ▼
┌──────────────────────────────────────┐
│ Calculator.js captures input         │
│ state = { a: 48, b: 36 }             │
└──────────────────────────────────────┘
        ▼
┌──────────────────────────────────────┐
│ Sends AJAX POST to                   │
│ http://localhost:5000/api/hcf        │
│ Body: { a: 48, b: 36 }               │
└──────────────────────────────────────┘
        ▼
┌──────────────────────────────────────┐
│ Flask app.py receives request        │
│ Routes to /api/hcf handler           │
└──────────────────────────────────────┘
        ▼
┌──────────────────────────────────────┐
│ calculator.py:hcf(48, 36)            │
│ - Uses Euclidean algorithm           │
│ - Returns: 12                        │
│ - Also generates steps               │
└──────────────────────────────────────┘
        ▼
┌──────────────────────────────────────┐
│ app.py sends JSON response:          │
│ {                                    │
│   "success": true,                   │
│   "hcf": 12,                         │
│   "steps": [......]                  │
│ }                                    │
└──────────────────────────────────────┘
        ▼
┌──────────────────────────────────────┐
│ Calculator.js receives response      │
│ Updates state with result            │
│ React re-renders UI                  │
└──────────────────────────────────────┘
        ▼
┌──────────────────────────────────────┐
│ User sees result displayed:          │
│ HCF = 12                             │
│ Steps:                               │
│ 48 = 36 × 1 + 12                     │
│ 36 = 12 × 3 + 0                      │
└──────────────────────────────────────┘
```

## Quiz Flow

```
Quiz Sequence:
┌─────────────────────┐
│ User selects quiz   │
│ "Number System"     │
└─────────────────────┘
        ▼
┌─────────────────────────────────────┐
│ Quiz.js loads from quizzes.js        │
│ Gets 3 questions                    │
│ Sets state: currentQ = 0             │
└─────────────────────────────────────┘
        ▼
┌─────────────────────────────────────┐
│ Display Question 1:                 │
│ "What is HCF of 24 and 36?"         │
│ Options: [A] 6 [B] 8 [C] 12 [D] 18 │
└─────────────────────────────────────┘
        ▼
┌─────────────────────────────────────┐
│ User selects answer [C] 12          │
└─────────────────────────────────────┘
        ▼
┌─────────────────────────────────────┐
│ Quiz.js checks:                     │
│ answer === question.correct?        │
│ YES → Score+1, showNextQ            │
└─────────────────────────────────────┘
        ▼
┌─────────────────────────────────────┐
│ Move to Question 2                  │
│ ... repeat for all questions        │
└─────────────────────────────────────┘
        ▼
┌─────────────────────────────────────┐
│ Show Results Page:                  │
│ Score: 2/3                          │
│ 67% - Good job! Review weak areas   │
│ Detailed answer review with         │
│ correct answers for wrong ones      │
└─────────────────────────────────────┘
```

## Teacher Dashboard Flow

```
Dashboard Usage:
┌──────────────────────────────┐
│ Teacher logs in              │
│ (Switch to "Teacher" mode)   │
└──────────────────────────────┘
        ▼
┌──────────────────────────────────────────┐
│ Dashboard.js loads                       │
│ Displays 4 tabs:                         │
│ • Overview (Stats cards)                 │
│ • Students (Progress table)              │
│ • Notes (Custom teaching notes)          │
│ • Analytics (Performance charts)         │
└──────────────────────────────────────────┘
        ▼
┌──────────────────────────────────────────┐
│ Overview Tab:                            │
│ Shows:                                   │
│ • Total Students                         │
│ • Avg Quizzes Done                       │
│ • Class Average Score                    │
│ • Top Performer                          │
│ • Quick action buttons                   │
└──────────────────────────────────────────┘
        ▼
┌──────────────────────────────────────────┐
│ Teacher can:                             │
│ • Add custom notes for topics            │
│ • View individual student scores         │
│ • See topic-wise performance             │
│ • Identify struggling students           │
│ • Track progress over time               │
└──────────────────────────────────────────┘
```

## Technology Stack

```
┌──────────────────────────────────────────┐
│           Frontend Stack                 │
├──────────────────────────────────────────┤
│ React 18           - UI Library          │
│ React Hooks        - State Management    │
│ CSS3               - Styling             │
│ JavaScript ES6+    - Logic               │
│ Fetch API          - HTTP Requests       │
└──────────────────────────────────────────┘

┌──────────────────────────────────────────┐
│           Backend Stack                  │
├──────────────────────────────────────────┤
│ Python 3.8+        - Language            │
│ Flask              - Web Framework       │
│ Flask-CORS         - Cross-Origin        │
│ Math Library       - Calculations        │
│ JSON               - Data Format         │
└──────────────────────────────────────────┘

┌──────────────────────────────────────────┐
│           Data & Storage                 │
├──────────────────────────────────────────┤
│ JavaScript Objects - Topics (topics.js)  │
│ JavaScript Objects - Quizzes (quizzes.js)│
│ Browser Memory     - Current Session     │
│ Can Add:           PostgreSQL (Later)    │
│ Can Add:           MongoDB (Later)       │
└──────────────────────────────────────────┘
```

## Deployment Architecture (Future)

```
Internet
  │
  ├─── Vercel/Netlify
  │      (Frontend - React SPA)
  │      http://your-domain.com
  │
  └─── Heroku/Railway/Render
         (Backend - Python Flask)
         https://api.your-domain.com

With Database:
         Render/Vercel + PostgreSQL
```

## File Dependencies

```
App.js
  ├── Navigation.js
  ├── Guide.js
  │   └── data/topics.js
  ├── Calculator.js
  │   ├── Backend API calls
  │   └── calculator.py functions
  ├── Quiz.js
  │   └── data/quizzes.js
  └── TeacherDashboard.js
      └── React state management

Backend (app.py)
  └── calculator.py
      ├── HCF/LCM functions
      ├── Interest functions
      ├── Geometry functions
      ├── Statistics functions
      └── All math calculations
```

## Request/Response Example

```
REQUEST to /api/hcf:
{
  "a": 48,
  "b": 36
}

PROCESSING:
calculator.hcf(48, 36)
→ Euclidean algorithm
→ Returns 12 with steps

RESPONSE:
{
  "success": true,
  "hcf": 12,
  "steps": [
    "48 = 36 × 1 + 12",
    "36 = 12 × 3 + 0"
  ]
}
```

---

**This architecture is:**
- ✅ Scalable (can add features)
- ✅ Maintainable (modular design)
- ✅ Cloud-ready (stateless backend)
- ✅ Database-ready (no hard dependencies)
- ✅ Mobile-friendly (responsive)
- ✅ Performance-optimized (fast calculations)
