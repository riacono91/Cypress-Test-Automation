const { exec } = require('child_process');

// Clone the repository
console.log("Cloning the repository...");
exec('git clone https://github.com/riacono91/Cypress-Test-Automation.git && cd Cypress-Test-Automation && npm install', (error, stdout, stderr) => {
    if (error) {
        console.error(`Error during setup: ${error.message}`);
        return;
    }
    if (stderr) {
        console.error(`Error: ${stderr}`);
        return;
    }
    console.log(stdout);
    console.log("Setup complete! You can now run Cypress with 'npx cypress open'.");
});
