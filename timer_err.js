const startBtn = document.querySelector('.start');
const resetBtn = document.querySelector('.reset');
let timer = false;
let countSec = 0;
let countMin = 5;

startBtn.addEventListener('click', (e) => {
    timer = true;   
    
    if(startBtn.className == "start") {  
        setInterval(timerTimer, 1000);    //Here, 'timerTimer' is a callback function
        startBtn.innerHTML = "Stop";        // sets the className to '.stop' by removing previous className (here, '.start')
    }  else {
        stop();
        startBtn.innerHTML = "Start";
    }
    startBtn.classList.toggle('stop');
});     


resetBtn.addEventListener('click', () => {
    timer = false;

    countMin = 5;
    countSec = 0;
    document.getElementById('sec').innerHTML = '0' + countSec;
    document.getElementById('min').innerHTML = countMin;
    if(startBtn.contains('start')) {
        startBtn.className('start');
        startBtn.innerHTML = 'Start';
    }
})

//stop function...
function stop() {
    timer = false;
}

//actual function of timer...
function timerTimer() {
    const seconds = document.getElementById('sec');
    const minutes = document.getElementById('min');
    if(timer == true) {
    
        if(countSec == 00 && countMin > 0) {
            countSec = 59;
            countMin --;
        }
    
        else if(countMin >= 0 && countSec > 00){
            countSec --;
        }

        if(countSec < 10)          //if the number is less than 10, then concatenate 0 infront of that number...
                countSec = '0' + countSec;
       
    // console.log(seconds, minutes);
    }
    seconds.innerHTML = countSec;
    minutes.innerHTML = countMin;
}