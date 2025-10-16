var breakLength = document.getElementById("breakLength");
var sessionLength = document.getElementById("sessionLength");
var started = false;
var isSession = true;
var isReset = true;
var timerLabel = document.getElementById("timerLabel");
var currentTime = document.getElementById("currentTime");
var currentTimeSeconds = parseInt(sessionLength.innerHTML) * 60;
var interval;
var changeTimeButtons = document.querySelectorAll(".changeTimeButton");
var timerDiv = document.querySelector(".timerDiv");

function breakLengthMinus() {
  if (!isReset) return;
  let b = parseInt(breakLength.innerHTML);
  if (b > 1) {
    b--;
    breakLength.innerHTML = b;
  }
}
function sessionLengthMinus() {
  if (!isReset) return;
  let s = parseInt(sessionLength.innerHTML);
  if (s > 1) {
    s--;
    console.log(s);
    sessionLength.innerHTML = s;
    currentTime.innerHTML = s + ":00";
    currentTimeSeconds = s * 60;
  }
}
function breakLengthPlus() {
  if (!isReset) return;
  let b = parseInt(breakLength.innerHTML);
  b++;
  breakLength.innerHTML = b;
}
function sessionLengthPlus() {
  if (!isReset) return;
  let s = parseInt(sessionLength.innerHTML);
  s++;
  sessionLength.innerHTML = s;
  currentTime.innerHTML = s + ":00";
  currentTimeSeconds = s * 60;
}
function reset() {
  clearInterval(interval);
  isReset = true;
  started = false;
  timerLabel.innerHTML = "Start Session";
  currentTime.innerHTML = `${parseInt(sessionLength.innerHTML)}:00`;
  currentTimeSeconds = parseInt(sessionLength.innerHTML) * 60;
  changeTimeButtons.forEach((element) => {
    element.style.backgroundColor = "#e9701f";
    element.style.cursor = "pointer";
  });
  timerDiv.style.backgroundImage = `linear-gradient(  to top,  rgb(255, 83, 83) 0%,  rgb(255, 83, 83) 0%,  rgb(255, 211, 161) 0%, rgb(255, 211, 161) 100% )`;
}
function startStop() {
  if (isReset) {
    changeTimeButtons.forEach((element) => {
      element.style.backgroundColor = "grey";
      element.style.cursor = "not-allowed";
    });
  }
  if (started) {
    started = false;
    timerLabel.innerHTML = "Paused";
    clearInterval(interval);
  } else {
    isReset = false;

    started = true;
    interval = setInterval(myTimer, 1000);
    if (isSession) {
      timerLabel.innerHTML = "Session";
    } else {
      timerLabel.innerHTML = "Break";
    }
  }
}
function myTimer() {
  if (currentTimeSeconds != 0) {
    currentTimeSeconds--;
    currentTime.innerHTML = `${Math.floor(currentTimeSeconds / 60)}:${
      currentTimeSeconds % 60
    }`;
    let i = 0;
    isSession
      ? (i =
          100 -
          (currentTimeSeconds / 60 / parseInt(sessionLength.innerHTML)) * 100)
      : (i =
          100 -
          (currentTimeSeconds / 60 / parseInt(breakLength.innerHTML)) * 100);
    console.log(i);
    timerDiv.style.backgroundImage = `linear-gradient(  to top,  rgb(255, 83, 83) 0%,  rgb(255, 83, 83) ${i}%,  rgb(255, 211, 161) 0%, rgb(255, 211, 161) 100% )`;
  } else {
    if (isSession) {
      currentTimeSeconds = parseInt(breakLength.innerHTML) * 60;
      timerLabel.innerHTML = "Break";
      isSession = false;
    } else {
      currentTimeSeconds = parseInt(sessionLength.innerHTML) * 60;
      timerLabel.innerHTML = "Session";
      isSession = true;
    }
    currentTime.innerHTML = `${Math.floor(currentTimeSeconds / 60)}:${
      currentTimeSeconds % 60
    }`;
  }
}
