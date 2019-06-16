"use strict";

// Chapter 10: Web Workers - Ping Pong (Worker)

onmessage = pingPong;

// Send back message if string message includes the word 'ping'
function pingPong(event) {
  console.log('Worker: Message received from Manager, processing message...');
  if (event.data === 'ping') {
    console.log('Worker: Sending message to Manager...');
    postMessage('pong');
  }
}