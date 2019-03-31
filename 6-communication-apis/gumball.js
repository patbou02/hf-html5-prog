"use strict";

console.info("Chapter 6: External APIs");

window.onload = function() {
  let url = 'http://gumball.wickedlysmart.com/?lastreporttime=12321449090';
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
  let sales = JSON.parse(responseText);
  for (let i = 0; i < sales.length; i++) {
    let sale = sales[i];
    let div = document.createElement("div");
    div.setAttribute("class", "saleItem");
    div.innerHTML = `${sale.name} sold ${sale.sales} gumballs`;
    salesContainer.appendChild(div);
  }
}