"use strict";

console.info("Chapter 9: Web Storage - Note to Self with Array");

window.onload = init;

function init() {
  let button = document.getElementById('add_button');
  button.onclick = createSticky;

  let stickiesArray = getStickiesArray();

  for (let i = 0; i < stickiesArray.length; i++) {
    let key = stickiesArray[i];
    let value = localStorage[key];
    addStickyToDOM(value);
  }
}

function addStickyToDOM(value) {
  let stickies = document.getElementById('stickies');
  let sticky = document.createElement('li');
  let span = document.createElement('span');
  span.setAttribute('class', 'sticky');
  span.innerHTML = value;
  sticky.appendChild(span);
  stickies.appendChild(sticky);
}

function createSticky() {
  let stickiesArray = getStickiesArray();
  let currentDate = new Date();
  let key = "sticky_" + currentDate.getTime();
  let value = document.getElementById('note_text').value;
  localStorage.setItem(key, value);
  stickiesArray.push(key);
  localStorage.setItem('stickiesArray', JSON.stringify(stickiesArray));

  addStickyToDOM(value);
}

function getStickiesArray() {
  let stickiesArray = localStorage.getItem('stickiesArray');

  if (!stickiesArray) {
    stickiesArray = [];
    localStorage.setItem('stickiesArray', JSON.stringify(stickiesArray));
  } else {
    stickiesArray = JSON.parse(stickiesArray);
  }

  return stickiesArray;
}