"use strict";

console.info("=== Chapter 3-Event-Handlers: Webville Tunes ===");

window.onload = init;

function init() {
  let button = document.getElementById('addButton');
  button.onclick = handleButtonClick;
  loadPlaylist();
}

function handleButtonClick() {
  let textInput = document.getElementById("songTextInput");
  let songName = textInput.value;

  addSong(songName);
  save(songName);
}

function addSong(song) {
  let ul = document.getElementById("playlist");
  let li = document.createElement("li");
  li.innerHTML = song;
  ul.appendChild(li);
}