"use strict";

console.info("=== Chapter 3: Sharpen Your Pencils ===");

function handleButtonClick() {
  let textInput = document.getElementById("songTextInput");
  let songName = textInput.value;
  console.log(`Adding ${songName}.`);
}

// Bonus
function handleButtonClickBonus() {
  let textInput = document.getElementById("songTextInput");
  let songName = textInput.value;
  (songName === "") ? console.log("Please enter a song.") : console.log(`Adding ${songName}.`);
}