let countdown;
const timerDisplay = document.querySelector('.display_time-left');
const buttons = document.querySelectorAll('[data-time]');

function timer (seconds) {
    // clear previous timer
    clearInterval(countdown);
    const now = Date.now();
    const then = now + seconds * 1000;
    displayTimeLeft(seconds);
    

    countdown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now()) / 1000);
        // checks if timer has any time left
        if(secondsLeft < 0) {
            clearInterval(countdown);
            return;
        }
        // display the timer
        displayTimeLeft(secondsLeft);        
    }, 1000)
}

function displayTimeLeft(seconds) {
   const minutes = Math.floor(seconds / 60);
    const remainderSeconds = seconds % 60;
    const display = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
    console.log(minutes, remainderSeconds);
    document.title = display;
    timerDisplay.textContent = display;
}

function startTimer() {
    const seconds = parseInt(this.dataset.time);
    timer(seconds);
}

buttons.forEach(button => button.addEventListener('click', startTimer));
document.customTime.addEventListener('submit', function(e) {
    e.preventDefault();
    const mins = this.minutes.value;
    timer(mins * 60);
    this.reset;
})