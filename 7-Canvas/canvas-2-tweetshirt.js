"use strict";

console.info("Chapter 7: Canvas API - TweetShirt");

window.onload = function() {
  let button = document.getElementById('previewButton');
  button.onclick = previewHandler;
};

function previewHandler() {
  let canvas = document.getElementById('tshirtCanvas');
  let context = canvas.getContext('2d');

  let selectObj = document.getElementById('shape');
  let index = selectObj.selectedIndex;
  let shape = selectObj[index].value;

  if (shape === 'squares') {
    for (let squares = 0; squares < 20; squares++) {
      drawSquare(canvas, context);
    }
  }
}

function drawSquare(canvas, context) {

  // calculate a random width w for the square

  // calculate a random x position for the square inside the canvas

  // calculate a random y position for the square inside the canvas

  // set the fillStyle to lightblue

  // draw a square at position x, y with width w
}