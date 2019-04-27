"use strict";

console.info("Chapter 8: Video API - Video Booth");

window.onload = function() {
  // Set onClick handler for effect links.
  let effectLinks = document.querySelectorAll("a.effect");
  for (let i = 0; i < effectLinks.length; i++) {
    effectLinks[i].onClick = setEffect;
  }

  // Set onClick handler for control links.
  let controlLinks = document.querySelectorAll("a.control");
  for (let j = 0; j < controlLinks.length; j++) {
    controlLinks[j].onClick = handleControl;
  }

  // Set onClick handler for video selection links.
  let videoLinks = document.querySelectorAll("a.videoSelection");
  for (let k = 0; k < videoLinks.length; k++) {
    videoLinks[k].onClick = setVideo;
  }

  // Helper function to visually depress 'video1' and 'normal' buttons.
  pushUnpushButtons("video1", []);
  pushUnpushButtons("normal", [])
};