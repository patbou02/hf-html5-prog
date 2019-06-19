"use strict";

// Chapter 10: Web Workers - Ping Pong (Manager)

window.onload = function() {
  // Create new Worker
  console.log('Creating new Worker...');
  let worker = new Worker("worker.js");

  // Send Message to Worker
  console.log('Manager: Sending message to Worker...');
  worker.postMessage("ping");

  // Assign message handler to worker
  worker.onmessage = function(event) {
    console.log('Manager: Receiving message from Worker...');
    document.getElementById('output').innerHTML = `Worker says ${event.data}.`;
  };
};

