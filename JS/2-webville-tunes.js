"use strict";

console.info("=== Chapter 2: Webville Tunes ===");

window.onload = init;

function init() {
  let button = document.getElementById('addButton');
  button.onclick = handleButtonClick;
}

function handleButtonClick() {
  console.log('button was clicked');
}