@echo off
REM Stop execution if any command fails
setlocal enabledelayedexpansion

REM Avoid any interactive prompts
SET CI=true

REM Log the environment
echo Node version:
node --version || EXIT /B %ERRORLEVEL%
echo NPM version:
npm --version || EXIT /B %ERRORLEVEL%

REM Install dependencies
echo Installing dependencies...
npm install || EXIT /B %ERRORLEVEL%

REM Install Cypress binary
echo Installing Cypress binary...
npx cypress install || EXIT /B %ERRORLEVEL%

REM Ensure Cypress binary exists
if exist "%LOCALAPPDATA%\Cypress\Cache" (
    echo Cypress binary found.
) else (
    echo Cypress binary missing! Exiting.
    EXIT /B 1
)

REM Done
echo Setup complete! You can now run Cypress with 'npx cypress run'.
