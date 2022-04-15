const startBtn = document.querySelector('.start');
const resetBtn = document.querySelector('.reset');
let timer = false;
let countMin = 5;
let time = countMin * 60;

// button event listener
startBtn.addEventListener('click', () => {
    timer = true;
    if(timer == true && startBtn.classList.contains('start')) {
        start();
    }
    else {
        stop();
    }
})

resetBtn.addEventListener('click', reset);

//start function
function start() {
    timer = true;
    mainLogic();
    startBtn.textContent = "Stop";
    startBtn.classList.remove('start');
    startBtn.classList.add('stop');
}

//stop function
function stop() {
    timer = false;
    startBtn.textContent = "Start";
    startBtn.classList.remove('stop');
    startBtn.classList.add('start');
}

//reset function
function reset() {
    timer = false;
    countMin = 5;
    time = countMin * 60;
    document.getElementById('sec').textContent = '0' + 0;
    document.getElementById('min').textContent = countMin;
    startBtn.textContent = "Start";
    startBtn.classList.remove('stop');
    startBtn.classList.add('start');
    // window.location.reload();
}

//main logic function 
function mainLogic() {
    if(timer == true) {
        time--;
        const minutes = Math.floor(time / 60);  //removes decimal and only shows integer part...
        let seconds = time % 60;    // remainder of time after divided by 60 (i.e. from 00 to 59)
        seconds = seconds < 10 ? '0' + seconds : seconds;

        // if minutes is greater than 0, execute the code..
        if (minutes >= 0) {
        document.getElementById('sec').textContent = seconds;
        document.getElementById('min').textContent = minutes;

        // Here, mainLogic is a callback
        setTimeout(mainLogic, 1000);    //calls itself over and over again till the minutes is greater than 0...
        }   
    }
    }