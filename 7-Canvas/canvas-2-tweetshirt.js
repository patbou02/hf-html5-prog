"use strict";

console.info("Chapter 7: Canvas API - TweetShirt");

window.onload = function() {
  let button = document.getElementById('previewButton');
  button.onclick = previewHandler;
};

function previewHandler() {
  let canvas = document.getElementById('tshirtCanvas');
  let context = canvas.getContext('2d');

  // start with a blank canvas
  fillBackgroundColor(canvas, context);

  let selectObj = document.getElementById('shape');
  let index = selectObj.selectedIndex;
  let shape = selectObj[index].value;

  if (shape === 'squares') {
    for (let squares = 0; squares < 20; squares++) {
      drawSquare(canvas, context);
    }
  } else if (shape === 'circles') {
    for (let circles = 0; circles < 20; circles++) {
      drawCircle(canvas, context);
    }
  }
}

function drawSquare(canvas, context) {
  // calculate a random width w for the square
  let w = Math.floor(Math.random() * 40);

  // calculate a random x position for the square inside the canvas
  let x = Math.floor(Math.random() * canvas.width);

  // calculate a random y position for the square inside the canvas
  let y = Math.floor(Math.random() * canvas.height);

  // set the fillStyle to lightblue
  context.fillStyle = "lightblue";

  // draw a square at position x, y with width w
  context.fillRect(x, y, w, w);
}

function fillBackgroundColor(canvas, context) {
  // get color from selected option in dropdown list
  let selectObj = document.getElementById('backgroundColor');
  let index = selectObj.selectedIndex;
  let bgColor = selectObj[index].value;

  // set fillStyle property to be equal to whatever color is selected
  context.fillStyle = bgColor;

  // draw a square that fills the entire canvas
  context.fillRect(0, 0, canvas.width, canvas.height);
}

function drawCircle(canvas, context) {
  // set starting X, Y coordinates for circle center
  let x = Math.floor(Math.random() * canvas.width);
  let y = Math.floor(Math.random() * canvas.height);

  // set radius dimension of circle
  let radius = Math.floor(Math.random() * 40);

  // set start angle of circle
  let start = 0;

  // set end angle of circle
  let end = 360;

  // start path
  context.beginPath();

  // draw circle
  context.arc(x, y, radius, degreesToRadians(start), degreesToRadians(end), true);

  // set circle fillStyle
  context.fillStyle = "red";

  // end path
  context.fill();
}

function degreesToRadians(degrees) {
  return (degrees * Math.PI) / 180;
}

function updateTweets(tweets) {
  let tweetsSelection = document.getElementById('tweets');

  for (let i = 0; i < tweets.length; i++) {
    let tweet = tweets[i];
    let option = document.createElement('option');
    option.text = tweet.text;
    option.value = tweet.text.replace("\"", "'");
  }
  tweetsSelection.selectedIndex = 0;
}