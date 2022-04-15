let hr  = 0, min = 0, sec = 0, count = 0;
let timer = false;

const startBtn = document.querySelector('.start');
const resetBtn = document.querySelector('.reset');

startBtn.addEventListener('click', () => {
    timer = true;
    stopwatch();

    if(startBtn.classList != 'start') {          //when the class of START button is 'stop' then the timer will return false which will stop the stopwatch()... 
        stop();
    }

    if(startBtn.innerHTML == "Stop") {
        startBtn.innerHTML = "Start";
    }
    else {
        startBtn.innerHTML = "Stop";
    }
    startBtn.classList.toggle('stop');
})

resetBtn.addEventListener('click', () => {
    timer = false;
    hr = 0, min = 0, sec = 0, count = 0;
        document.getElementById('hour').innerHTML = "00";
        document.getElementById('min').innerHTML = "00";
        document.getElementById('sec').innerHTML = "00";
        document.getElementById('msec').innerHTML = "00";
        startBtn.classList.remove('stop');
        startBtn.innerHTML = "Start";
})

function stop() {
    timer = false;
}

//main functionality...
function stopwatch() {
    if(timer == true) {
        count ++;
        if( count == 100) {
            sec ++;
            count = 0;
        }

        if( sec == 60) {
            min ++;
            sec = 0;
        }

        if(min == 60) {
            hr ++;
            min = 0;
            sec = 0;
        }

        let hrString = hr;      // to add 0 infront of hr when the value of hr is less than 10..
        let minString = min;
        let secString = sec;
        let countString = count;

        if(hr < 10) {
            hrString = "0" + hrString;
        }
        if(min < 10) {
            minString = "0" + minString;
        }
        if(sec < 10) {
            secString = "0" + secString;
        }
        if(count < 10) {
            countString = "0" + countString;
        }
       
        document.getElementById('hour').innerHTML = hrString;
        document.getElementById('min').innerHTML = minString;
        document.getElementById('sec').innerHTML = secString;
        document.getElementById('msec').innerHTML = countString;
        setTimeout(stopwatch, 10);
    }
}