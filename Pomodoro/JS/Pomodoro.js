// - - - Variáveis - - -
const startStop = document.getElementById("startStop");
const clock = document.getElementById("timer");

const pomodoro = document.getElementById("pomodoro");
const shortBreak = document.getElementById("shortBreak");
let selectedTimer = "pomodoro";
let timerParagraph = clock;

let isRunning = false;
let interval;
let secondsRemaining = null;

function selectTimer(timer) {
    selectedTimer = timer;
    changeSelectClasses(timer);
    changeTimerValue(timer);
    if (!isRunning) {
        secondsRemaining = getTimerValue(selectedTimer);
    }
}
function changeSelectClasses(timer) {
    if (timer == 'pomodoro') {
        pomodoro.classList.add("activeButton");
        shortBreak.classList.remove("activeButton");
    }
    else if (timer == 'shortBreak') {
        pomodoro.classList.remove("activeButton");
        shortBreak.classList.add("activeButton");
    }
}
function getTimerValue(timer) {
    return {
        pomodoro: 25 * 60,
        shortBreak: 5 * 60
    }[timer];
}
function changeTimerValue(timer) {
    timerParagraph.textContent = secondsToMinutes(getTimerValue(timer));
}

// - - - Contador - - -
const stopTimer = () => clearInterval(interval);

function secondsToMinutes(second) {
    const minutes = Math.floor(second / 60);
    const seconds = second % 60;
    const padMinutes = minutes.toString().padStart(2, "0");
    const padSeconds = seconds.toString().padStart(2, "0");
    return `${padMinutes}:${padSeconds}`;
}

function StartStop() {
    if (!isRunning) {
        if (secondsRemaining === null) {
            secondsRemaining = getTimerValue(selectedTimer);
        }

        document.getElementById('startStop').textContent = 'Stop'
        clock.textContent = secondsToMinutes(secondsRemaining)

        interval = setInterval(() => {
            secondsRemaining--;
            clock.innerHTML = secondsToMinutes(secondsRemaining);
            if (secondsRemaining <= 0) {
                clearInterval(interval);
                alert("Time's up!");
                clock.innerHTML = secondsToMinutes(0);
                isRunning = false;
                startStop.textContent = "Start";
                secondsRemaining = null
            }
        },
            100)
    }
    else {
        stopTimer();
        startStop.textContent = "Start";
    }
    isRunning = !isRunning;
}
pomodoro.addEventListener("click", () => selectTimer("pomodoro"));
shortBreak.addEventListener("click", () => selectTimer("shortBreak"));
startStop.addEventListener("click", StartStop);

changeTimerValue(selectedTimer);
secondsRemaining = getTimerValue(selectedTimer);