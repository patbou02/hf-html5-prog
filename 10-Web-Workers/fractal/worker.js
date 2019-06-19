// Import workerlib.js
importScripts('workerlib.js');

onmessage = function (task) {
  let workerResult = computeRow(task.data);

  postMessage(workerResult);
};