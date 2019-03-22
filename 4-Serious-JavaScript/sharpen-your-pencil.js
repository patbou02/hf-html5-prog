"use strict";

console.info("Chapter 4: Sharpen Your Pencil");

function dogsAge(age) {
  return age * 7;
}
let myDogsAge = dogsAge(4);

function rectangleArea(width, height) {
  let area = width * height;
  return area;
}
let rectArea = rectangleArea(3, 4);

function addUp(numArray) {
  let total = 0;
  for (let i = 0; i < numArray.length; i++) {
    total += numArray[i];
  }
  return total;
}
let theTotal = addUp([1, 5, 3, 9]);

function getAvatar(points) {
  let avatar;
  if (points < 100) {
    avatar = "Mouse";
  } else if (points > 100 && points < 1000) {
    avatar = "Cat";
  } else {
    avatar = "Ape";
  }
  return avatar;
}
let myAvatar = getAvatar(335);

/*
myDogsAge = 28
rectArea = 12
theTotal = 18
myAvatar = "Cat"
*/

console.log('myDogsAge: ' + myDogsAge);
console.log('rectArea: ' + rectArea);
console.log('theTotal: ' + theTotal);
console.log('myAvatar: ' + myAvatar);