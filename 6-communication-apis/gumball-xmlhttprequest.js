"use strict";

console.info("Chapter 6: External APIs");

let lastReportTime = 0;

window.onload = function() {
  /* If using XMLHttpRequest object */
  let url = 'http://gumball.wickedlysmart.com/?lastreporttime=123214490';
  let request = new XMLHttpRequest();

  request.open("GET", url);
  request.onload = function() {
    if (request.status === 200) {
      updateSalesXMLHttpRequest(request.responseText);
    }
  };
  request.send(null);
};

function updateSalesXMLHttpRequest(responseText) {
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