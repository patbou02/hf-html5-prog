"use strict";

console.info("Chapter 9: Web Storage - Note to Self");

// store Items
localStorage.setItem("sticky_0", "Pick up dry cleaning");
localStorage.setItem("sticky_1", "Cancel cable TV, who needs it now?");

let sticky = localStorage.getItem("sticky_0");
alert(sticky);