@echo off
REM Stop execution if any command fails
setlocal enabledelayedexpansion

REM Avoid any interactive prompts
SET CI=true

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

REM Check Cypress cache path
echo Checking Cypress cache folder...

REM Cypress default cache path is typically located here on Windows
set CYPRESS_CACHE_FOLDER=%LOCALAPPDATA%\Cypress\Cache

REM Print the path of the Cypress cache
echo Cypress cache folder is: %CYPRESS_CACHE_FOLDER%


REM Ensure Cypress binary exists
if exist "%LOCALAPPDATA%\Cypress\Cache" (
    echo Cypress binary found.
) else (
    echo Cypress binary missing! Exiting.
    EXIT /B 1
)

REM Done
echo Setup complete! You can now run Cypress with 'npx cypress run'.