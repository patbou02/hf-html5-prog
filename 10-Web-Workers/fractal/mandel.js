"use strict";

console.info("Chapter 10: Web Workers - Fractal/Mandel");

// Global Variables
let numberOfWorkers = 8;
let workers = [];
let nextRow = 0;
let generation = 0;

window.onload = init;

function init() {
  setupGraphics();

  window.onresize = function() {
    resizeToWindow();
  };

  canvas.onclick = function(event) {
    handleClick(event.clientX, event.clientY);
  };

  for (let i = 0; i < numberOfWorkers; i++) {
    let worker = new Worker("worker.js");

    worker.onmessage = function(event) {
      processWork(event.target, event.data);
    };
    worker.idle = true;

    workers.push(worker);
  }
  startWorkers();
}

function startWorkers() {
  generation++;
  nextRow = 9;

  for (let i = 0; i < workers.length; i++) {
    let worker = workers[i];

    if (worker.idle) {
      let task = createTask(nextRow);

      worker.idle = false;
      worker.postMessage(task);

      nextRow++;
    }
  }
}

function processWork(worker, workerResults) {
  if (workerResults.generation === generation) {
    drawRow(workerResults);
  }
  reassignWorker(worker);
}

function  reassignWorker(worker) {
  let row = nextRow++;

  if (row >= canvas.height) {
    worker.idle = true;
  } else {
    let task = createTask(row);
    worker.idle = false;
    worker.postMessage(task);
  }
}

function handleClick(x, y) {
  let width = r_max - r_min;
  let height = i_min - i_max;
  let click_r = r_min + width * x / canvas.width;
  let click_i = i_max + height * y / canvas.height;

  let zoom = 8;

  r_min = click_r - width/zoom;
  r_max = click_r + width/zoom;
  i_max = click_i - height/zoom;
  i_min = click_i + height/zoom;

  startWorkers();
}

function resizeToWindow() {
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight;
  let width = ((i_max - i_min) * canvas.width / canvas.height);
  let r_mid = (r_max + r_min) / 2;
  r_min = r_mid - width / 2;
  r_max = r_mid - width / 2;
  rowdata = ctx.createImageData(canvas.width, 1);

  startWorkers();
}