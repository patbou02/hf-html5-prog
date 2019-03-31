"use strict";

console.info("Chapter 6: External APIs");

window.onload = function() {
  let url = 'http://localhost/sales.json';
  let request = new XMLHttpRequest();

  request.open("GET", url);
  request.onload = function() {
    if (request.status === 200) {
      updateSales(request.responseText);
    }
  };
  request.send(null);
};