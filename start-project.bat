@echo off
echo ==========================================
echo Starting RCMS Project
echo Mobile : http://localhost:8081
echo Web    : http://localhost:5173
echo ==========================================

REM Start Web App on 5173
cd /d web-app
start /b yarn dev --port 5173

REM Start Mobile App on 8081
cd ../mobile-app
yarn start --port 8081

pause
