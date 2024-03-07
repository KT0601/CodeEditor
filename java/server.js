const { Worker, workerData } = require("worker_threads")
const fs = require('fs');

// const Piscina = require("piscina")

const threads = [];

function createJavaWorker (id, file1){
    const worker = new Worker("./java/worker-thread.js", {workerData:{a:file1, c:id}});

    worker.on('message', (message) => {
      console.log(`Thread ${id} received message: ${message}`);
    });

    worker.on('error', (error) => {
      console.error(`Thread ${id} error: ${error.message}`);
    });

    worker.on('exit', (code) => {
      console.log(`Thread ${id} exited with code ${code}`);
      const file = file1.split(".")[0];
        fs.unlink(`${file}.class`, (err) =>{
          if (err) {
            console.error('Error deleting file:', err);
          } else {
            
          }
        }) 
    });

    threads.push(worker);
}


module.exports = createJavaWorker;

// createWorker(1, "hello.py");
// createWorker(2, "demo.py");
// createWorker(3, "demo2.py");
// createWorker(4, "demo3.py");