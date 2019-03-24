"use strict";

console.info("Chapter 5: My Location");

window.onload = getMyLocation;

const OURCOORDS = {
  latitude: 47.624851,
  longitude: -122.52099,
};
let map;

function getMyLocation() {
  navigator.geolocation ? navigator.geolocation.getCurrentPosition(displayLocation, displayError) : console.log('No geolocation support.');
}

function displayLocation(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;

  let div = document.getElementById('location');
  div.innerHTML = `You are at Latitude: ${latitude}, Longitude: ${longitude}.`;

  let unit = prompt("Please enter 'KM' or 'ML' if you want to view distance in Kilometers or Miles respectively.").toLowerCase();
  // TODO: provide fall back is value entered is not KM or ML

  let dist = computeDistance(position.coords, OURCOORDS, unit);
  let distance = document.getElementById('distance');
  switch(unit) {
    case 'km':
      distance.innerHTML = `You are ${dist} kilometers from the WickedlySmart HQ.`;
      break;
    case 'ml':
      distance.innerHTML = `You are ${dist} miles from the WickedlySmart HQ.`;
      break;
  }

  showMap(position.coords);
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

function computeDistance(startCoords, destCoords, unit) {
  let startLatRads = degreesToRadians(startCoords.latitude);
  let startLongRads = degreesToRadians(startCoords.longitude);
  let destLatRads = degreesToRadians(destCoords.latitude);
  let destLongRads = degreesToRadians(destCoords.longitude);

  let Radius;
  switch(unit) {
    case 'km':
      Radius = 6371; // radius of the Earth in km
      break;
    case 'ml':
      Radius = 3958; // radius of the Earth in miles
      break;
  }
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