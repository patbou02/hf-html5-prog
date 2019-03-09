"use strict";

console.info("=== Chapter 2: Sharpen Your Pencils ===");

function addSongs() {
  let song1 = document.getElementById('song1');
  let song2 = document.getElementById('song2');
  let song3 = document.getElementById('song3');

  song1.innerHTML = "Blue Suede Strings, by Elvis Presley";
  song2.innerHTML = "Great Objects on Fire, by Jerry JSON Lewis";
  song3.innerHTML = "I Code the Line, by Johnny JavaScript";
}

window.onload = addSongs();