const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("mins");
const seconds = document.getElementById("seconds");

const newYear = "1 Jan 2024";

function countdown() {
  const newYearDate = new Date(newYear);
  const currentDate = new Date();
  const totalSeconds = (newYearDate - currentDate) / 1000;
  const day = Math.floor(totalSeconds / 3600 / 24);
  const hour = Math.floor(totalSeconds / 3600) % 24;
  const minute = Math.floor(totalSeconds / 60) % 60;
  const second = Math.floor(totalSeconds) % 60;

  days.innerHTML = day;
  hours.innerHTML = hour < 10 ? "0" + hour : hour;
  minutes.innerHTML = minute < 10 ? "0" + minute : minute;
  seconds.innerHTML = second < 10 ? "0" + second : second;
}

//initial call
countdown();
setInterval(countdown, 1000);
