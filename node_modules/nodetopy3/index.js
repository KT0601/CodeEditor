const { exec } = require('child_process');
const fs = require('fs');

// Function to copy the content of a source file to a destination file
function copyFileContent(sourceFile, destinationFile) {
    return new Promise((resolve, reject) => {
        fs.readFile(sourceFile, 'utf8', (err, data) => {
            if (err) {
                reject(err);
                return;
            }
            fs.writeFile(destinationFile, data, 'utf8', (err) => {
                if (err) {
                    reject(err);
                    return;
                }
                resolve();
            });
        });
    });
}

// Function to run Python code from a source file
function runPythonCode(sourceFile) {
    return new Promise(async (resolve, reject) => {
        try {
            await copyFileContent(sourceFile, 'hello.py');
                // Once the requirements are installed, proceed to run the Python script
                exec('python3 hello.py', (error, stdout, stderr) => {
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
                });
            
        } catch (err) {
            reject(err);
        }
    });
}


// Export the runPythonCode function
module.exports = runPythonCode;
