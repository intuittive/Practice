var hundredths = 0;
var seconds = 0;
var minutes = 0;
var interval = null;
var displayHundredths = "00";
var displaySeconds = "00";
var displayMinutes = "00";
var status = "stopped;";

var timerToggleButton = document.getElementById("start-stop");
// var stopButton = document.getElementById("button-stop");
var resetButton = document.getElementById("button-reset");

var secondsEl = document.getElementById("seconds");
var hundredthsEl = document.getElementById("hundredths");
var minutesEl = document.getElementById("minutes");

function timerToggleHandler() {
  if (!isTimerActive()) startTimer();
  else stopTimer();
}

function startTimer() {
  interval = setInterval(() => {
    incrementTime();
    setTimerVals();
    setTimerDisplay();
  }, 1);
  setToggleButtonText("Stop");
}

function stopTimer() {
  clearInterval(interval);
  interval = null;
  setToggleButtonText("Start");
}

function resetTimer() {
  if (isTimerActive()) clearInterval(interval);
  interval = null;
  displayHundredths = "00";
  displaySeconds = "00";
  displayMinutes = "00";
  setToggleButtonText("Start");
  setTimerDisplay();
}

function incrementTime() {
  hundredths++;
  if (hundredths === 100) {
    hundredths = 0;
    seconds++;
  }
  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }
  if (minutes === 60) {
    minutes = 0;
  }
}

function setTimerVals() {
  displayHundredths = hundredths;
  displaySeconds = seconds;
  displayMinutes = minutes;
  if (displayHundredths <= 9) {
    displayHundredths = "0" + displayHundredths;
  }
  if (displaySeconds <= 9) {
    displaySeconds = "0" + displaySeconds;
  }
  if (displayMinutes <= 9) {
    displayMinutes = "0" + displayMinutes;
  }
}

function setTimerDisplay() {
  hundredthsEl.innerHTML = displayHundredths;
  secondsEl.innerHTML = displaySeconds;
  minutesEl.innerHTML = displayMinutes;
}

function setToggleButtonText(text) {
  timerToggleButton.innerHTML = text;
}

function isTimerActive() {
  return interval !== null;
}

timerToggleButton.addEventListener("click", timerToggleHandler);
resetButton.addEventListener("click", resetTimer);
