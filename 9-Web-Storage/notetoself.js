"use strict";

console.info("Chapter 9: Web Storage - Note to Self");

// store Items
localStorage.setItem("sticky_0", "Pick up dry cleaning");
localStorage.setItem("sticky_1", "Cancel cable TV, who needs it now?");

let sticky = localStorage.getItem("sticky_0");
alert(sticky);

// second way of setting and getting local storage items.
localStorage['sticky_2'] = "Time to by some groceries";
let sticky2 = localStorage['sticky_2'];

alert(sticky2);

// use length property and key method to access all localStorage items.
for (let i = 0; i < localStorage.length; i++) {
  let key = localStorage.key(i);
  let value = localStorage[key];

  console.info(`Local Storage item: ${key} with a value of: ${value}.`);
}