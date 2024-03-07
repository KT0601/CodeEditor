import runCPPCode from './Exexute.js';
import { parentPort, workerData } from "worker_threads";

async function run_worker(file1, id) {
    try {
        const stdout = await runCPPCode(file1, id);
        console.log(stdout);
        parentPort.postMessage(stdout);
    } catch (error) {
        console.error(error);
    }
}

run_worker(workerData.a, workerData.c);
