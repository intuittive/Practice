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

/**
 * Starts the timer if the timer isn't already active.
 */
function timerToggleHandler() {
  if (!isTimerActive()) startTimer();
  else stopTimer();
}

/**
 * Starts the timer, increments values and changes toggle button - start/stop.
 */
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

/**
 * Stops timer, clears interval and changes toggle button - stop/start.
 */
function stopTimer() {
  clearInterval(interval);
  interval = null;
  setToggleButtonText("Start");
}

/**
 * Resets timer, clears interval and changes toggle button - start/stop.
 */
function resetTimer() {
  if (isTimerActive()) clearInterval(interval);
  interval = null;
  setToggleButtonText("Start");
  setTimerDisplay("00", "00", "00");
}

/**
 * Increments each component of the time.
 */
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
 * This function produces a displays of time using two digits.
 *
 * @param {number} timeVal Numeric time count.
 * @returns {string} timeVal - Two digit to be displayed.
 */
function getTimerDisplayVal(timeVal) {
  return timeVal <= 9 ? "0" + timeVal : timeVal;
}

/**
 * This function will set the DOM display for the Stopwatch.
 *
 * @param {number} displayHundredths Hundredths of seconds.
 * @param {number} displaySeconds Seconds.
 * @param {number} displayMinutes Minutes.
 */
function setTimerDisplay(displayHundredths, displaySeconds, displayMinutes) {
  hundredthsEl.innerHTML = displayHundredths;
  secondsEl.innerHTML = displaySeconds;
  minutesEl.innerHTML = displayMinutes;
}

/**
 * This function changes start/stop button text.
 *
 * @param {srting} text Text to display in the button.
 */
function setToggleButtonText(text) {
  timerToggleButton.innerHTML = text;
}

/**
 * This function checks if timer interval exists.
 *
 * @returns {boolean} Interval active or not.
 */
function isTimerActive() {
  return interval !== null;
}

timerToggleButton.addEventListener("click", timerToggleHandler);
resetButton.addEventListener("click", resetTimer);

export { getTimerDisplayVal };
