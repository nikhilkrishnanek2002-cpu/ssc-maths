@echo off
echo Starting SSC Master Hub...
echo.
echo 1. Starting Backend Server (Port 5000)...
start cmd /k "cd backend && python app.py"
echo.
timeout /t 3 /nobreak
echo.
echo 2. Starting Frontend Server (Port 3000)...
start cmd /k "cd frontend && npm start"
echo.
echo Both servers starting. Open http://localhost:3000 in your browser.
pause
