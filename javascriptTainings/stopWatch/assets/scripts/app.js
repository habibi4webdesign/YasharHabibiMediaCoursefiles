let seconds = 0;
let tens = 0;
let secondsEl = document.getElementById('seconds');
let tensEl = document.getElementById('tens');

let buttonStart = document.getElementById('button-start');
let buttonStop = document.getElementById('button-stop');
let buttonReset = document.getElementById('button-reset');

let Internval;

buttonStart.addEventListener('click', () => {
    Internval = setInterval(startTimer, 10);
});

buttonStop.addEventListener('click', () => {
    clearInterval(Internval);
});

buttonReset.addEventListener('click', () => {
    clearInterval(Internval);
    seconds = 0;
    tens = 0;
    secondsEl.innerHTML = '00';
    tensEl.innerHTML = '00';
});

function startTimer() {
    tens++;

    if (tens <= 9) {
        tensEl.innerHTML = '0' + tens;
    }

    if (tens > 9) {
        tensEl.innerHTML = tens;
    }

    if (tens > 99) {
        seconds++;
        secondsEl.innerHTML = '0' + seconds;
        tens = 0;
        tensEl.innerHTML = '00';
    }

    if (seconds > 9) {
        secondsEl.innerHTML = seconds;
    }
}
