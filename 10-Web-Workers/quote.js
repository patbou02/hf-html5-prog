"use strict";

// Chapter 10: Web Workers - Quote

let quotes = [
  "I hope life isn't a joke, because I don't get it.",
  "There is a light at the end of every tunnel... just pray it's not a train!",
  "Do you believe in love at first sight or should I walk by again?",
];

let index = Math.floor(Math.random() * quotes.length);

postMessage(quotes[index]);