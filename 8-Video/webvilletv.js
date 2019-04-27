"use strict";

console.info("Chapter 8: Video API - Webville TV");

/* Set Global Variables */
let position = 0; // keep track of which video is playing
let playlist;     // video playlist array will be stored here
let video;        // reference to video element

window.onload = function() {
  console.log("page has loaded");

  // Setup Playlist
  playlist = [
    "video/preroll.mp4",
    "video/areyoupopular.mp4",
    "video/destinationearth.mp4",
  ];

  // Grab video element.
  video = document.getElementById("video");

  // Set video event listener.
  video.addEventListener("ended", nextVideo, false);

  // set video source, load video and play it.
  video.src = playlist[position];
  video.load();
  video.play();
};