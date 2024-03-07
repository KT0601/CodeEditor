import { exec } from 'child_process';

// Function to run Python code from a source file
async function runPythonCode(sourceFile, id) {
    return new Promise((resolve, reject) => {
        try {
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
            });
        } catch (err) {
            reject(err);
        }
    });
}

// Export the runPythonCode function
export default runPythonCode;
