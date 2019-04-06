"use strict";

console.info("Chapter 7: Canvas API - Look what I drew");

window.onload = function() {
  let canvas = document.getElementById("lookwhatIdrew");
  let context = canvas.getContext("2d");

  context.fillRect(10, 10, 100, 100);
};