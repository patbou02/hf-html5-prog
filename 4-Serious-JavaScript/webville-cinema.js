"use strict";

console.info("Chapter 4: Webville Cinema");

let lordOfTheRings = {
  title: "Lord of the Rings",
  genre: "Fantasy",
  rating: 4,
  showtimes: ["3:00pm", "5:00pm", "7:00pm", "11:59pm"],
};

function getNextShowing(movie) {
  let now = new Date().getTime();

  for (let i = 0; i < movie.showtimes.length; i++) {
    let showtime = getTimeFromString(movie.showtimes[i]);
    console.log('showtime: ', showtime);
    console.log('now: ', now);
    if ((showtime - now) > 0) {
      return `Next showing of ${movie.title} is at ${movie.showtimes[i]}.`;
    }
    return "no options";
  }
}

function getTimeFromString(timeString) {
  let theTime = new Date();
  let time = timeString.match(/(\d+)(?::(\d\d))?\s*(p?)/);
  theTime.setHours(parseInt(time[1]) + (time[3] ? 12 : 0));
  theTime.setMinutes(parseInt(time[2]) || 0);
  return theTime.getTime();
}

let nextShowing = getNextShowing(lordOfTheRings);
console.log(nextShowing);