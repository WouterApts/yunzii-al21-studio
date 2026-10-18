@echo off
setlocal
cd /d "%~dp0"
where node >nul 2>nul
if errorlevel 1 (
  echo Node.js is required to run AL21 Studio locally.
  echo Install it from https://nodejs.org and then open this file again.
  echo Or use https://wouterapts.github.io/yunzii-al21-studio/ in Chrome or Edge.
  pause
  exit /b 1
)
node serve.js --open
if errorlevel 1 pause
