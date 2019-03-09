"use strict";

console.info("=== Chapter 3: Webville Tunes (READY BAKE CODE) ===");

function save(item) {
  let playlistArray = getStoreArray("playlist");
  playlistArray.push(item);
  localStorage.setItem("playlist", JSON.stringify(playlistArray));
}

function loadPlaylist() {
  let playlistArray = getSavedSongs();
  let ul = document.getElementById("playlist");
  if (playlistArray !== null) {
    for (let i = 0; i < playlistArray.length; i++) {
      let li = document.createElement("li");
      li.innerHTML = playlistArray[i];
      ul.appendChild(li);
    }
  }
}

function getSavedSongs() {
  return getStoreArray("playlist");
}

function getStoreArray(key) {
  let playlistArray = localStorage.getItem(key);
  if (playlistArray == null || playlistArray === "") {
    playlistArray = new Array();
  } else {
    playlistArray = JSON.parse(playlistArray);
  }
  return playlistArray;
}