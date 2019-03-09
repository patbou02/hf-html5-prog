"use strict";

console.info("=== Chapter 2: Webville Tunes ===");

let button = document.getElementById('addButton');

button.onclick = handleButtonClick;

function handleButtonClick() {
  console.log('button was clicked');
}