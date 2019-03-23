"use strict";

console.info("Chapter 5: My Location");

window.onload = getMyLocation;

function getMyLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(displayLocation, displayError);
  } else {
    console.log('No geolocation support.');
  }
}

function displayLocation(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;

  let div = document.getElementById('location');
  div.innerHTML = `You are at Latitude: ${latitude}, Longitude: ${longitude}.`;
}

function displayError(error) {
  let errorTypes = {
    0: 'Unknown error',
    1: 'Permission denied by user',
    2: 'Position is not available',
    3: 'Request timed out',
  };
  let errorMessage = errorTypes[error.code];
  if (error.code === 0 || error.code === 2) {
    errorMessage += ` ${error.message}`;
  }
  let div = document.getElementById('location');
  div.innerHTML = errorMessage;
}

function computeDistance(startCoords, destCoords) {
  let startLatRads = degreesToRadians(startCoords.latitude);
  let startLongRads = degreesToRadians(startCoords.longitude);
  let destLatRads = degreesToRadians(destCoords.latitude);
  let destLongRads = degreesToRadians(destCoords.longitude);
  let Radius = 6371; // radius of the Earth in km
  return Math.acos(Math.sin(startLatRads) * Math.sin(destLatRads) +
    Math.cos(startLatRads) * Math.cos(destLatRads) *
    Math.cos(startLongRads - destLongRads)) * Radius;
}

function degreesToRadians(degrees) {
  return (degrees * Math.PI) / 180;
}