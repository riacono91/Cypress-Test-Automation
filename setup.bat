@echo off
REM Stop execution if any command fails
setlocal enabledelayedexpansion
IF %ERRORLEVEL% NEQ 0 EXIT /B %ERRORLEVEL%

REM Install dependencies
echo Installing dependencies...
npm install

REM Install Cypress binary
echo Installing Cypress binary...
npx cypress install

REM Done!
echo Setup complete! You can now run Cypress with 'npx cypress run'.
pause
