// - - - Variáveis - - -
const startStop = document.getElementById("startStop"); 
const clock = document.getElementById("timer");

const pomodoro = document.getElementById("pomodoro");
const shortBreak = document.getElementById("shortBreak");
let selectedTimer = "pomodoro";

let isRunning = false;
let timeLeft = 1500;
let interval;

function selectTimer(timer)
{
    selectedTimer = timer
    changeSelectClasses(timer)
    changeTimerValue(timer)
}
function changeSelectClasses(timer)
{
    if (timer == pomodoro)
        {
            pomodoro.classList.add("activeButton")
            shortBreak.classList.remove("activeButton")
        }
    else if (timer == shortBreak)
        {
            pomodoro.classList.remove("activeButton")
            shortBreak.classList.add("activeButton")
        }
}
function changeTimerValue(timer)
{
    if(timer == pomodoro)
    {
        clock.textContent = secondsToMinutes(1500)
    }
    else if(timer == shortBreak)
    {
        clock.textContent = secondsToMinutes(300) 
    }
}
// - - - Contador - - -
const stopTimer = () => clearInterval(interval);
function secondsToMinutes(second)
{
    const minutes = Math.floor(second/60);
    const seconds = second % 60;
    const padMinutes = minutes.toString().padStart(2,"0")
    const padSeconds = seconds.toString().padStart(2,"0")
    return `${padMinutes}:${padSeconds}`
}
const UpdateTimer = () =>
{
    /*const minutes = Math.floor(timeLeft/60);
    const seconds = timeLeft % 60;
    clock.innerHTML = `${minutes.toString().padStart(2,"0")}:${seconds.toString().padStart(2,"0")}`;*/
}
function StartStop (timer)
{
    let seconds
    if (!isRunning)
    {
        document.getElementById('startStop').textContent = 'Stop'
        interval = setInterval(() => 
        {    
            timeLeft--;
            clock.innerHTML = secondsToMinutes(seconds);
            if (timeLeft == 0)
            {
                clearInterval(interval);
                alert("Time's up!");
                clock.innerHTML = secondsToMinutes(seconds);
            }
        }, 
            1000)
        
    }
    else
    {
        stopTimer();
        document.getElementById('startStop').textContent = 'Start';
    }
    isRunning = !isRunning
}


