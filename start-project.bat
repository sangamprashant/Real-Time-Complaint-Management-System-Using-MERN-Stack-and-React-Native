@echo off
echo =====================================
echo Starting RCMS Web + Mobile App
echo =====================================

REM Start Web App in background
cd /d web-app
start /b yarn dev

REM Go back and start Mobile App
cd ../mobile-app
yarn start

pause
