"use strict";

console.info("=== Chap2ter : Sharpen Your Pencils ===");

function handleButtonClick() {
  let textInput = document.getElementById("songTextInput");
  let songName = textInput.value;
  console.log(`Adding ${songName}.`);
}

// Bonus
function handleButtonClick() {
  let textInput = document.getElementById("songTextInput");
  let songName = textInput.value;
  (songName !== "") ? console.log(`Adding ${songName}.`) : console.log("Nothing was typed");
}