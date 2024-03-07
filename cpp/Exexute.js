// const { rejects } = require('assert');
const { exec } = require('child_process');
const fs = require('fs');
// const { resolve } = require('path');


// Function to run Python code from a source file
function runPythonCode(sourceFile,id) {
    return new Promise(async (resolve, reject) => {
        const file = sourceFile.split(".")[0];
        try {
            // await copyFileContent(sourceFile);
                // Once the requirements are installed, proceed to run the Python script
                exec(`g++ -o ${file} ${sourceFile}`, (error, stdout, stderr) => {
                    if (error) {
                        console.error(`Compilation Error: ${error.message}`);
                        reject(error);
                        return;
                    }
                    if (stderr) {
                        console.error(`stderr: ${stderr}`);
                        reject(stderr);
                        return;
                    }
                    exec(`${file}.exe`, (error, stdout, stderr) => {
                        if (error) {
                            console.error(`Runtime Error: ${error.message}`);
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
                    fs.unlink(`${file}.exe`, (err) =>{
                        if (err) {
                          console.error('Error deleting file:', err);
                        } else {
                          
                        }
                    })                    
                })
                            
        } catch (err) {
            reject(err);
        }
    });
}


// Export the runPythonCode function
module.exports = runPythonCode;
