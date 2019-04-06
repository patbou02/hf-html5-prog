"use strict";

console.info("Chapter 7: Canvas API - Cookie");

window.onload = function() {
  let button = document.getElementById('previewCookie');
  button.onclick = previewHandler;
};

function previewHandler() {
  let canvas = document.getElementById('canvas');
  let context = canvas.getContext('2d');
}