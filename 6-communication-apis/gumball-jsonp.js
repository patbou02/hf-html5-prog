"use strict";

console.info("Chapter 6: External APIs");

let lastReportTime = 0;

window.onload = function() {
  setInterval(handleRefresh, 3000);
};

function updateSalesJSONP(sales) {
  let salesContainer = document.getElementById('sales');
  for (let i = 0; i < sales.length; i++) {
    let sale = sales[i];
    let li = document.createElement("li");
    li.setAttribute("class", "saleItem");
    li.innerHTML = `${sale.name} sold ${sale.sales} gumballs`;
    salesContainer.appendChild(li);
  }
  if (sales.length > 0) {
    lastReportTime = sales[sales.length - 1].time;
  }
}

function handleRefresh() {
  console.log('refreshing...');
  let url = "http://gumball.wickedlysmart.com/" +
            "?callback=updateSalesJSONP" +
            "&lastreporttime=" + lastReportTime +
            "&random=" + (new Date()).getTime();
  let newScriptElement = document.createElement("script");
  newScriptElement.setAttribute("src", url);
  newScriptElement.setAttribute("id", "jsonp");

  let oldScriptElement = document.getElementById("jsonp");
  let head = document.getElementsByTagName("head")[0];
  if (oldScriptElement === null) {
    head.appendChild(newScriptElement);
  } else {
    head.replaceChild(newScriptElement, oldScriptElement);
  }
}