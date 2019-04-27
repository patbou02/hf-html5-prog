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

function setEffect(e) {
  let id = e.target.getAttribute("id");

  if (id === "normal") {
    pushUnpushButtons("normal", ["western", "noir", "scifi"]);
  } else if (id === "western") {
    pushUnpushButtons("western", ["normal", "noir", "scifi"]);
  } else if (id === "noir") {
    pushUnpushButtons("noir", ["normal", "western", "scifi"]);
  } else if (id === "scifi") {
    pushUnpushButtons("scifi", ["normal", "western", "noir"]);
  }
}

function handleControl(e) {
  let id = e.target.getAttribute('id');

  if (id === "play") {
    pushUnpushButtons("play", ["pause"]);
  } else if (id === "pause") {
    pushUnpushButtons("pause", ["play"]);
  } else if (id === "loop") {
    (isButtonPushed("loop")) ?
      pushUnpushButtons("", ["loop"]) : pushUnpushButtons("loop", []);
  } else if (id === "mute") {
    (isButtonPushed("mute")) ?
      pushUnpushButtons("", ["mute"]) : pushUnpushButtons("mute", []);
  }
}

function setVideo(e) {
  let id = e.target.getAttribute("id");

  if (id === "video1") {
    pushUnpushButtons("video1", ["video2"]);
  } else if (id === "video2") {
    pushUnpushButtons("video2", ["video1"]);
  }
}