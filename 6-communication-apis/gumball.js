"use strict";

console.info("Chapter 6: External APIs");

window.onload = function() {
  let url = 'http://hfhtml5:8888/chap6/sales.json';
  let request = new XMLHttpRequest();

  request.open("GET", url);
  request.onload = function() {
    if (request.status === 200) {
      updateSales(request.responseText);
    }
  };
  request.send(null);
};

function updateSales(responseText) {
  let salesContainer = document.getElementById('sales');
  salesContainer.innerText = responseText;
}