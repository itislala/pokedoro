// - - - Pomodoro - - -
const startStop = document.getElementById("startStop"); 
const timer = document.getElementById("timer");

let isRunning = false;
let timeLeft = 1500;
let interval;

// - - - Contador - - -
const UpdateTimer = () =>
{
    const minutes = Math.floor(timeLeft/60);
    const seconds = timeLeft % 60;
    timer.innerHTML = `${minutes.toString().padStart(2,"0")}:${seconds.toString().padStart(2,"0")}`;
}
const StartStop = () =>
{
    if (!isRunning)
    {
        document.getElementById('startStop').textContent = 'Stop'
        interval = setInterval(() => 
        {    
            timeLeft--;
            UpdateTimer();
            if (timeLeft ==0)
            {
                clearInterval(interval);
                alert("Time's up!");
                timeLeft = 1500;
                UpdateTimer;
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
const stopTimer = () => clearInterval(interval);

