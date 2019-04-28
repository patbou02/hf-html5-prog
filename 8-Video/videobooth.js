"use strict";

console.info("Chapter 8: Video API - Video Booth");

let videos = {
  video1: "video/demovideo1",
  video2: "video/demovideo2",
};

window.onload = function() {
  let video = document.getElementById("video");
  video.src = videos.video1 + getFormatExtension();
  video.load();

  // Set onClick handler for effect links.
  let effectLinks = document.querySelectorAll("a.effect");
  for (let i = 0; i < effectLinks.length; i++) {
    effectLinks[i].onclick = setEffect;
  }

  // Set onClick handler for control links.
  let controlLinks = document.querySelectorAll("a.control");
  for (let j = 0; j < controlLinks.length; j++) {
    controlLinks[j].onclick = handleControl;
  }

  // Set onClick handler for video selection links.
  let videoLinks = document.querySelectorAll("a.videoSelection");
  for (let k = 0; k < videoLinks.length; k++) {
    videoLinks[k].onclick = setVideo;
  }

  // Helper function to visually depress 'video1' and 'normal' buttons.
  pushUnpushButtons("video1", []);
  pushUnpushButtons("normal", []);

  // Set on ended handler for when video ends playing;
  video.addEventListener("ended", endedHandler, false);
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
  let id = e.target.getAttribute("id");
  let video = document.getElementById("video");

  if (id === "play") {
    pushUnpushButtons("play", ["pause"]);
    if (video.ended) {
      video.load();
    }
    video.play();
  } else if (id === "pause") {
    pushUnpushButtons("pause", ["play"]);
    video.pause();
  } else if (id === "loop") {
    (isButtonPushed("loop")) ?
      pushUnpushButtons("", ["loop"]) : pushUnpushButtons("loop", []);
    video.loop = !video.loop;
  } else if (id === "mute") {
    (isButtonPushed("mute")) ?
      pushUnpushButtons("", ["mute"]) : pushUnpushButtons("mute", []);
    video.muted = !video.muted;
  }
}

function setVideo(e) {
  let id = e.target.getAttribute("id");
  let video = document.getElementById("video");

  if (id === "video1") {
    pushUnpushButtons("video1", ["video2"]);
  } else if (id === "video2") {
    pushUnpushButtons("video2", ["video1"]);
  }

  video.src = videos[id] + getFormatExtension();
  video.load();
  video.play();

  pushUnpushButtons("play", ["pause"]);
}

function endedHandler() {
  pushUnpushButtons("", ["play"]);
}

// Helper Functions
function pushUnpushButtons(idToPush, idArrayToUnpush) {
  if (idToPush != "") {
    var anchor = document.getElementById(idToPush);
    var theClass = anchor.getAttribute("class");

    if (!theClass.indexOf("selected") >= 0) {
      theClass = theClass + " selected";
      anchor.setAttribute("class", theClass);
      var newImage = "url(images/" + idToPush + "pressed.png";
      anchor.style.backgroundImage = newImage;
    }
  }

  for (let i = 0; i < idArrayToUnpush.length; i++) {
    anchor = document.getElementById(idArrayToUnpush[i]);
    theClass = anchor.getAttribute("class");
    if (theClass.indexOf("selected") >= 0) {
      theClass = theClass.replace("selected", "");
      anchor.setAttribute("class", theClass);
      anchor.style.backgroundImage = "";
    }
  }
}

function isButtonPushed(id) {
  let anchor = document.getElementById(id);
  let theClass = anchor.getAttribute("class");

  return (theClass.indexOf("selected") >= 0);
}

function getFormatExtension() {
  let video = document.getElementById("video");
  
  if (video.canPlayType("video/mp4") != "") {
    return ".mp4";
  } else if (video.canPlayType("video/webm") != "") {
    return ".webm";
  } else if (video.canPlayType("video/ogg") != "") {
    return ".ogg";
  }
}