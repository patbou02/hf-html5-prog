"use strict";

console.info("=== Chapter 1: Phrase-O-Matic ===");

function makePhrases() {
  // Set Arrays with words in side of them
  let words1 = ["24/7", "multi-Tier", "30,000 foot", "B-to-B", "win-win"];
  let words2 = ["empowered", "value-added", "oriented", "focused", "aligned"];
  let words3 = ["process", "solution", "tipping-point", "strategy", "vision"];

  // Create Random Words
  let rand1 = Math.floor(Math.random() * words1.length);
  let rand2 = Math.floor(Math.random() * words2.length);
  let rand3 = Math.floor(Math.random() * words3.length);
}

window.onload = makePhrases;