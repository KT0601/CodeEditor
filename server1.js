const createPythonWorker = require('./python/server')
const createCppWorker = require('./cpp/server')
const createJavaWorker = require('./java/server')

// createPythonWorker(1, "hello.py");
// createPythonWorker(2, "demo.py");
// createPythonWorker(3, "demo2.py");
// createPythonWorker(4, "demo3.py");

// createCppWorker(1,"test1.cpp");
// createCppWorker(2,"test2.cpp")

createJavaWorker(1, "P1.java");
createJavaWorker(2, "P2.java");