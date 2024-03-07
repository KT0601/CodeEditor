// const { rejects } = require('assert');
const { exec } = require('child_process');
// const fs = require('fs');
// const { resolve } = require('path');


// Function to run Python code from a source file
function runPythonCode(sourceFile,id) {
    return new Promise(async (resolve, reject) => {
        try {
            // await copyFileContent(sourceFile);
                // Once the requirements are installed, proceed to run the Python script
                exec(`python ${sourceFile}`, (error, stdout, stderr) => {
                    if (error) {
                        console.error(`Error running Python script: ${error.message}`);
                        reject(error);
                        return;
                    }
                    if (stderr) {
                        console.error(`stderr: ${stderr}`);
                        reject(stderr);
                        return;
                    }
                    resolve(stdout);
                })
                
            
        } catch (err) {
            reject(err);
        }
    });
}


// Export the runPythonCode function
module.exports = runPythonCode;
