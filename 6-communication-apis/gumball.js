"use strict";

console.info("Chapter 6: External APIs");


window.onload = function() {
  /* If using XMLHttpRequest object */
  /*let url = 'http://gumball.wickedlysmart.com/?lastreporttime=12321449090';
  let request = new XMLHttpRequest();

  request.open("GET", url);
  request.onload = function() {
    if (request.status === 200) {
      updateSalesXMLHttpRequest(request.responseText);
    }
  };
  request.send(null);*/

  /* If using JSONP */
  setInterval(handleRefresh, 3000);
};

/*function updateSalesXMLHttpRequest(responseText) {
  let salesContainer = document.getElementById('sales');
  let sales = JSON.parse(responseText);
  for (let i = 0; i < sales.length; i++) {
    let sale = sales[i];
    let div = document.createElement("div");
    div.setAttribute("class", "saleItem");
    div.innerHTML = `${sale.name} sold ${sale.sales} gumballs`;
    salesContainer.appendChild(div);
  }
}*/

function updateSalesJSONP(sales) {
  let salesContainer = document.getElementById('sales');
  for (let i = 0; i < sales.length; i++) {
    let sale = sales[i];
    let li = document.createElement("li");
    li.setAttribute("class", "saleItem");
    li.innerHTML = `${sale.name} sold ${sale.sales} gumballs`;
    salesContainer.appendChild(li);
  }
}

function handleRefresh() {
  console.log('refreshing...');
  let url = "http://gumball.wickedlysmart.com/?lastreporttime=12321449090?callback=updateSalesJSONP";
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