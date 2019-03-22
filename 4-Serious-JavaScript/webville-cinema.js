"use strict";

console.info("Chapter 4: Webville Cinema");

function Movie(title, genre, rating, showtimes) {
  this.title = title;
  this.genre = genre;
  this.rating = rating;
  this.showtimes = showtimes;
  this.getNextShowing = function() {
    let now = new Date().getTime();

    for (let i = 0; i < this.showtimes.length; i++) {
      let showtime = getTimeFromString(this.showtimes[i]);
      console.log('showtime: ', showtime);
      console.log('now: ', now);
      if ((showtime - now) > 0) {
        return `Next showing of ${this.title} is at ${this.showtimes[i]}.`;
      }
      return null;
    }
  };
}

// Instantiate Objects using Movie constructor
let LORDOFTHERINGS = new Movie("Lord of the Rings", "Fantasy", 4, ["3:00pm", "5:00pm", "7:00pm", "11:59pm"]);

let THEMATRIX = new Movie("The Matrix", "Science Fiction", 5, ["1:00pm", "3:45pm", "6:10pm", "9:05pm"]);

function getTimeFromString(timeString) {
  let theTime = new Date();
  let time = timeString.match(/(\d+)(?::(\d\d))?\s*(p?)/);
  theTime.setHours(parseInt(time[1]) + (time[3] ? 12 : 0));
  theTime.setMinutes(parseInt(time[2]) || 0);
  return theTime.getTime();
}

let nextShowing = LORDOFTHERINGS.getNextShowing();
console.log('Lord of the Rings: ' + nextShowing);
nextShowing = THEMATRIX.getNextShowing();
console.log('The Matrix: ' + nextShowing);