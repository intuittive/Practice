var hundredths = 0;
var seconds = 0;
var minutes = 0;
var interval = null;
var status = "stopped;";

var timerToggleButton = document.getElementById("start-stop");
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
    setTimerDisplay(
      getTimerDisplayVal(hundredths),
      getTimerDisplayVal(seconds),
      getTimerDisplayVal(minutes)
    );
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
  setToggleButtonText("Start");
  setTimerDisplay("00", "00", "00");
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

/**
 * This function will produce two displays of time using two digits.
 *
 * @param {*} timeVal
 * @returns {number} values
 */
function getTimerDisplayVal(timeVal) {
  return timeVal <= 9 ? "0" + timeVal : timeVal;
}

/**
 * This function will set the display for the Stopwatch.
 *
 * @param {*} displayHundredths
 * @param {*} displaySeconds
 * @param {*} displayMinutes
 */
function setTimerDisplay(displayHundredths, displaySeconds, displayMinutes) {
  hundredthsEl.innerHTML = displayHundredths;
  secondsEl.innerHTML = displaySeconds;
  minutesEl.innerHTML = displayMinutes;
}

/**
 * This function is setting the toggle button - start/stop.
 *
 * @param {*} text
 */
function setToggleButtonText(text) {
  timerToggleButton.innerHTML = text;
}

function isTimerActive() {
  return interval !== null;
}

/**
 * @param { }
 */
timerToggleButton.addEventListener("click", timerToggleHandler);
resetButton.addEventListener("click", resetTimer);

/**
 * This function turns a string into a veganized version of the food
 * For example 'beef' will turn into 'vegan beef'
 * @param {string} food the food item we want to veganize
 * @returns {string} the veganized version of our food name
 */
function getVeganFood(food) {
  const veganizedFood = "vegan " + food;
  return veganizedFood;
}
