"use strict";

console.info("Chapter 9: Web Storage - Shell Game");

function shellGame() {
  localStorage.setItem("shell1", "pea");
  localStorage.setItem("shell2", "empty");
  localStorage.setItem("shell3", "empty");
  // pea in shell1

  localStorage["shell1"] = "empty";
  localStorage["shell2"] = "pea";
  localStorage["shell3"] = "empty";
  // pea in shell2

  let value = localStorage.getItem("shell2");

  localStorage.setItem("shell1", value);
  // pea in shell1
  value = localStorage.getItem("shell3");
  localStorage["shell2"] = value;

  let key = "shell2";

  localStorage[key] = "pea";
  key = "shell1";
  localStorage[key] = "empty";
  key = "shell3";
  localStorage[key] = "empty";

  for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    let value = localStorage.getItem(key);

    console.log(`${key}: ${value}.`);
  }
}