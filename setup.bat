@echo off
REM Stop execution if any command fails
setlocal enabledelayedexpansion

REM Avoid any interactive prompts
SET CI=true

REM Install Node.js 18 using nvm
CALL nvm install 18

REM Use Node.js 18
CALL nvm use 18

REM Log the environment
echo Node version:
CALL node --version || EXIT /B %ERRORLEVEL%
echo NPM version:
CALL npm --version || EXIT /B %ERRORLEVEL%


REM Install dependencies
echo Installing dependencies...
CALL npm install
echo npm install completed with exit code %ERRORLEVEL%
if %ERRORLEVEL% neq 0 (
    echo npm install failed, exiting.
    EXIT /B %ERRORLEVEL%
)

REM Install Cypress binary
echo Installing Cypress binary...
CALL npx cypress install
echo npx cypress install completed with exit code %ERRORLEVEL%
if %ERRORLEVEL% neq 0 (
    echo Cypress install failed, exiting.
    EXIT /B %ERRORLEVEL%
)

REM Ensure Cypress binary exists
if exist "%LOCALAPPDATA%\Cypress\Cache" (
    echo Cypress binary found.
) else (
    echo Cypress binary missing! Exiting.
    EXIT /B 1
)

REM Done
echo Setup complete! You can now run Cypress with 'npx cypress run'.