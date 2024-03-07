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

// Function to install Python libraries from a requirements file
function libinstall(sourceFile) {
    return new Promise(async (resolve, reject) => {
        try {
            await copyFileContent(sourceFile, 'requirement.txt');
            exec('python3 -m pip install -r requirement.txt', (error, stdout, stderr) => {
                if (error) {
                    console.error(`Error installing requirements: ${error.message}`);
                    reject(error);
                    return;
                }
                if (stderr) {
                    console.error(`stderr: ${stderr}`);
                    reject(stderr);
                    return;
                }
                console.log(`stdout: ${stdout}`);
                resolve(stdout);
            });
        } catch (err) {
            reject(err);
        }
    });
}

// Export the libinstall function
module.exports = libinstall;
