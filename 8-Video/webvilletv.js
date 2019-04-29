"use strict";

console.info("Chapter 8: Video API - Webville TV");

/* Set Global Variables */
let position = 0; // Keep track of which video is playing.
let playlist;     // Video playlist array will be stored here.
let video;        // Reference to video element.

window.onload = function() {
  console.log("page has loaded");

  // Setup Playlist
  playlist = [
    "video/preroll",
    "video/areyoupopular",
    "video/destinationearth",
  ];

  // Grab video element.
  video = document.getElementById("video");

  // Set video event listener.
  video.addEventListener("ended", nextVideo, false);

  // Set video source, load video and play it.
  video.src = playlist[position] + getFormatExtension();
  video.load();
  video.play();
  console.info(`Loaded and playing video: ${video.src}`);
};

function nextVideo() {
  // Increase position of video to be played.
  position++;

  // Set position to 0 if we reach the end of the playlist.
  if (position >= playlist.length) {
    position = 0;
  }

  // Set src, load and play video.
  video.src = playlist[position] + getFormatExtension();
  video.load();
  video.play();
  console.info(`Loaded and playing video: ${video.src}`);
}

function getFormatExtension() {
  if (video.canPlayType("video/mp4") != "") {
    return ".mp4";
  } else if (video.canPlayType("video/webm") != "") {
    return ".webm";
  } else if (video.canPlayType("video/ogg") != "") {
    return ".ogg";
  }
}