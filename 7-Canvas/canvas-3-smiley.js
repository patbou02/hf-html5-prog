"use strict";

console.info("Chapter 7: Canvas API - Smiley");

window.onload = function() {
  let button = document.getElementById('previewSmiley');
  button.onclick = previewHandler;
};

function previewHandler() {
  let canvas = document.getElementById('canvas');
  let context = canvas.getContext('2d');

  drawSmiley(context);
}

function drawSmiley(context) {
  // draw head
  context.beginPath();
  context.arc(300, 300, 200, 0, degreesToRadians(360), true);
  context.fillStyle = "beige";
  context.fill();
  context.stroke();

  // draw left eye
  context.beginPath();
  context.arc(200, 250, 25, 0, degreesToRadians(360), true);
  context.stroke();

  // draw right eye
  context.beginPath();
  context.arc(400, 250, 25, 0, degreesToRadians(360), true);
  context.stroke();

  // draw nose
  context.beginPath();
  context.moveTo(300, 300);
  context.lineTo(300, 350);
  context.stroke();

  // draw mouth
  context.beginPath();
  context.arc(300, 350, 75, degreesToRadians(20), degreesToRadians(160), false);
  context.stroke();
}

function degreesToRadians(degrees) {
  return (degrees * Math.PI) / 180;
}