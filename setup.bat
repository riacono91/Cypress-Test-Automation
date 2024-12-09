@echo off

REM Clone the repository
echo Cloning the repository...
git clone https://github.com/riacono91/Cypress-Test-Automation.git
cd Cypress-Test-Automation

REM Install dependencies
echo Installing dependencies...
npm install

REM Done!
echo Setup complete! You can now run Cypress with 'npx cypress open'.
pause
