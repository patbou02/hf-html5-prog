"use strict";

console.info("Chapter 7: Canvas API - Gumball");

window.onload = function() {
  let canvas = document.getElementById("lookwhatIdrew");
  let context = canvas.getContext("2d");

  context.fillRect(10, 10, 100, 100);
};

let selectObj = document.getElementById('backgroundColor');
let index = selectObj.selectedIndex;
let bgColor = selectObj[index].value;

let selectObj = document.getElementById("shape");
let index = selectObj.selectedIndex;
let shape = selectObj[index].value;

let selectObj = document.getElementById("foregroundcolor");
let index = selectObj.selectedIndex;
let fgColor = selectObj[index].value;