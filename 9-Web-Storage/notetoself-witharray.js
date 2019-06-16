"use strict";

console.info("Chapter 9: Web Storage - Note to Self with Array");

window.onload = init;

function init() {
  let button = document.getElementById('add_button');
  button.onclick = createSticky;

  let stickiesArray = getStickiesArray();

  for (let i = 0; i < stickiesArray.length; i++) {
    let key = stickiesArray[i];
    let value = JSON.parse(localStorage[key]);
    addStickyToDOM(key, value);
  }
}

function addStickyToDOM(key, stickyObj) {
  let stickies = document.getElementById('stickies');
  let sticky = document.createElement('li');
  sticky.setAttribute('id', key);
  sticky.style.backgroundColor = stickyObj.color;
  let span = document.createElement('span');
  span.setAttribute('class', 'sticky');
  span.innerHTML = stickyObj.value;
  sticky.appendChild(span);
  stickies.appendChild(sticky);
  sticky.onclick = deleteSticky;
}

function removeStickyFromDOM(key) {
  let sticky = document.getElementById(key);
  sticky.parentNode.removeChild(sticky);
}

function createSticky() {
  let stickiesArray = getStickiesArray();
  let currentDate = new Date();
  let colorSelectObj = document.getElementById('note_color');
  let index = colorSelectObj.selectedIndex;
  let color = colorSelectObj[index].value;
  let key = "sticky_" + currentDate.getTime();
  let value = document.getElementById('note_text').value;
  let stickyObj = {
    "value": value,
    "color": color
  };
  localStorage.setItem(key, JSON.stringify(stickyObj));
  stickiesArray.push(key);
  localStorage.setItem('stickiesArray', JSON.stringify(stickiesArray));

  addStickyToDOM(key, stickyObj);
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

function deleteSticky(e) {
  let key = e.target.id;
  if (e.target.tagName.toLowerCase() === 'span') {
    key = e.target.parentNode.id;
  }
  localStorage.removeItem(key);
  let stickiesArray = getStickiesArray();
  if (stickiesArray) {
    for (let i = 0; i < stickiesArray.length; i++) {
      if (key === stickiesArray[i]) {
        stickiesArray.splice(i, 1);
      }
    }
    localStorage.setItem('stickiesArray', JSON.stringify(stickiesArray));
    removeStickyFromDOM(key);
  }
}