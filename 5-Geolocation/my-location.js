"use strict";

console.info("Chapter 5: My Location");

window.onload = getMyLocation;

function getMyLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(displayLocation);
  } else {
    console.log('No geolocation support.');
  }
}