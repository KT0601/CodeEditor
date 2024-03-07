const { Worker, workerData } = require("worker_threads")
// const Piscina = require("piscina")

const threads = [];

function createPythonWorker (id, file1){
    const worker = new Worker("./python/worker-thread.js", {workerData:{a:file1, c:id}});

    worker.on('message', (message) => {
      console.log(`Thread ${id} received message: ${message}`);
    });

    worker.on('error', (error) => {
      console.error(`Thread ${id} error: ${error.message}`);
    });

    worker.on('exit', (code) => {
      console.log(`Thread ${id} exited with code ${code}`);
    });

    threads.push(worker);
}

function getPythonThreads(){
  return threads.length;
}

module.exports = createPythonWorker, getPythonThreads;

// createWorker(1, "hello.py");
// createWorker(2, "demo.py");
// createWorker(3, "demo2.py");
// createWorker(4, "demo3.py");