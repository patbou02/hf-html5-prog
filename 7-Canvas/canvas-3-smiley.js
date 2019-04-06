"use strict";

console.info("Chapter 7: Canvas API - Smiley");

window.onload = function() {
  let button = document.getElementById('previewSmiley');
  button.onclick = previewHandler;
};

function previewHandler() {
  let canvas = document.getElementById('canvas');
  let context = canvas.getContext('2d');

  context.beginPath();

  // draw head

  // draw left eye

  // draw right eye

  // draw nose

  // draw mouth
}