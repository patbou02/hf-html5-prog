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
  drawCircle(context, 300, 300, 200, 0, 360, true, "beige");

  // draw left eye
  drawCircle(context, 200, 250, 25, 0, 360, true, "white");

  // draw right eye
  drawCircle(context, 400, 250, 25, 0, 360, true, "white");

  // draw nose
  context.beginPath();
  context.moveTo(300, 300);
  context.lineTo(300, 350);
  context.stroke();

  // draw mouth
  drawCircle(context,300, 350, 75, 20, 160, false, "beige");
}

function degreesToRadians(degrees) {
  return (degrees * Math.PI) / 180;
}

function drawCircle(context, x, y, r, start, end, direction, bgColor) {
  context.beginPath();
  context.arc(x, y, r, degreesToRadians(start), degreesToRadians(end), direction);
  if (bgColor !== null) {
    context.fillStyle = bgColor;
    context.fill();
  }
  context.stroke();
}