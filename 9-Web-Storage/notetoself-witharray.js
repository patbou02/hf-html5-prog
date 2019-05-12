"use strict";

console.info("Chapter 9: Web Storage - Note to Self with Array");

// store Items
localStorage.setItem("sticky_0", "Pick up dry cleaning");
localStorage.setItem("sticky_1", "Cancel cable TV, who needs it now?");

window.onload = init;

function init() {
  let button = document.getElementById('add_button');
  button.onclick = createSticky;

  for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    if (key.substring(0, 6) === 'sticky') {
      let value = localStorage.getItem(key);
      addStickyToDOM(value);
    }
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
  let value = document.getElementById('note_text').value;
  let key = "sticky_" + localStorage.length;
  localStorage.setItem(key, value);

  addStickyToDOM(value);
}