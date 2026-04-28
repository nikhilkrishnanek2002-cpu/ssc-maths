# ⚡ Quick Start Guide - SSC Maths Master

## 🚀 30-Second Setup

### Step 1: Start Backend
```bash
cd backend
pip install -r requirements.txt
python app.py
```
✅ Backend running at http://localhost:5000

### Step 2: Start Frontend (New Terminal)
```bash
cd frontend
npm install
npm start
```
✅ Frontend running at http://localhost:3000

**That's it! 🎉 The platform is live!**

---

## 📱 How to Use

### As a Teacher
1. **Open the app** → Switch to "Teacher" mode (top right)
2. **Go to Dashboard** → View student progress
3. **Add Notes** → Create custom teaching materials
4. **View Analytics** → Track class performance

### As a Student
1. **Study Topics** → Read formulas and shortcuts
2. **Use Calculator** → Practice calculations with instant results
3. **Take Quizzes** → Test yourself with 100+ questions
4. **Track Progress** → Monitor improvement over time

---

## 🧮 Available Calculators

| Calculator | Use For |
|-----------|---------|
| **HCF/LCM** | Finding common factors |
| **Percentage** | Quick % calculations |
| **Profit/Loss** | Business math problems |
| **Interest** | SI and CI calculations |
| **Speed/Distance** | Motion and travel problems |

---

## 📚 Topics Included

- Number System & HCF/LCM
- Percentage & Ratio  
- Profit, Loss & Discount
- Simple & Compound Interest
- Time & Work
- Speed, Distance & Time
- Algebra
- Geometry
- Trigonometry
- Statistics
- And more!

---

## ⚙️ Troubleshooting

### Backend won't start?
- Check if port 5000 is free: `netstat -an | grep 5000`
- Try different port: Edit `app.py` line with `port=5001`

### Frontend won't connect?
- Verify backend is running (visit http://localhost:5000/api/health)
- Clear browser cache (Ctrl+Shift+Delete)
- Restart React: `npm start`

### Calculator not working?
- Open browser DevTools (F12) → Console tab
- Check for error messages
- Verify backend is running

---

## 📖 Next Steps

1. **Add Your Topics** → Edit `frontend/src/data/topics.js`
2. **Create Custom Quizzes** → Edit `frontend/src/data/quizzes.js`
3. **Customize Styling** → Modify CSS files
4. **Deploy to Cloud** → See README.md for Heroku/Vercel

---

## 🎯 Quick Tips

✅ **For Teachers:**
- Start with dashboard to understand student progress
- Add notes for each topic you teach
- Create custom quizzes for your students
- Use analytics to identify weak areas

✅ **For Students:**
- Start with easy quizzes
- Use calculator to verify your answers
- Learn shortcuts in each topic
- Review mistakes after quizzes

---

## 📞 Need Help?

1. Check README.md for detailed documentation
2. Review error messages in browser console (F12)
3. Verify both backend and frontend are running
4. Check that ports 5000 and 3000 are available

---

**Enjoy learning! 📚✨**
