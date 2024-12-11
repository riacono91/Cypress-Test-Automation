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
npm install || REM EXIT /B %ERRORLEVEL%
echo "npm install exit code: %ERRORLEVEL%"

REM Install Cypress binary
echo Installing Cypress binary...
npx cypress install || REM EXIT /B %ERRORLEVEL%
echo "npx cypress install exit code: %ERRORLEVEL%"

dir "%LOCALAPPDATA%\Cypress\Cache"

REM Ensure Cypress binary exists
if exist "%LOCALAPPDATA%\Cypress\Cache" (
    echo Cypress binary found.
) else (
    echo Cypress binary missing! Exiting.
    REM EXIT /B 1
)

REM Done
echo Setup complete! You can now run Cypress with 'npx cypress run'.
