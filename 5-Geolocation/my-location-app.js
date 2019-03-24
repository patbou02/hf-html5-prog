"use strict";

console.info("Chapter 5: My Location APP");

window.onload = getMyLocation;

const OURCOORDS = {
  latitude: 47.624851,
  longitude: -122.52099,
};
let map;

function getMyLocation() {
  if (navigator.geolocation) {
    let watchButton = document.getElementById('watch');
    let clearWatchButton = document.getElementById('clearWatch');
    watchButton.onclick = watchLocation;
    clearWatchButton.onclick = clearWatch;
  } else {
    console.log('No geolocation support.');
  }
}

let watchId = null;

function watchLocation() {
  watchId = navigator.geolocation.watchPosition(displayLocation, displayError);
}

function clearWatch() {
  navigator.geolocation.clearWatch(watchId);
  watchId = null;
}

function displayLocation(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;

  let div = document.getElementById('location');
  div.innerHTML = `You are at Latitude: ${latitude}, Longitude: ${longitude} (with ${position.coords.accuracy} meters accuracy).`;

  let dist = computeDistance(position.coords, OURCOORDS);
  let distance = document.getElementById('distance');

  if (map === null) {
    showMap(position.coords);
  } else {
    scrollMapToPosition(position.coords);
  }
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

function showMap(coords) {
  let GOOGLELATANDLONG = new google.maps.LatLng(coords.latitude, coords.longitude);
  let MAPOPTIONS = {
    zoom: 10,
    center: GOOGLELATANDLONG,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
  };
  let mapDiv = document.getElementById('map');
  map = new google.maps.Map(mapDiv, MAPOPTIONS);
  let title = 'Your Location';
  let content = `You are here: ${coords.latitude}, ${coords.longitude}.`;
  addMarker(map, GOOGLELATANDLONG, title, content);
}

function addMarker(map, latlong, title, content) {
  let MARKEROPTIONS = {
    position: latlong,
    map: map,
    title: title,
    clickable: true,
  };
  let MARKER = new google.maps.Marker(MARKEROPTIONS);
  let INFOWINDOWOPTIONS = {
    content: content,
    position: latlong,
  };
  let INFOWINDOW = new google.maps.InfoWindow(INFOWINDOWOPTIONS);

  google.maps.event.addListener(MARKER, 'click', function() {
    INFOWINDOW.open(map);
  });
}

function scrollMapToPosition(coords) {
  let latitude = coords.latitude;
  let longitude = coords.longitude;
  let latlong = new google.maps.LatLng(latitude, longitude);

  map.panTo(latlong);

  addMarker(map, latlong, 'Your new location', `You moved to: ${latitude}, ${longitude}.`);
}