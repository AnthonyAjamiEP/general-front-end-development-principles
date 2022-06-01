const wholePage = document.getElementById("wholeBody");
const ball = document.getElementById("basketball");
const field = document.getElementById("field");

const widthOfField = field.clientWidth;
const heightOfField = field.clientHeight;
const widthOfBall = ball.clientWidth;

let startToken = 0;
let clickCount = 0;

var timeLeft = 9;
var timeElem = document.getElementById('time_count');
var counterElem = document.getElementById('click_count');

var timerId;

timeElem.innerHTML = '10 seconds remaining';
counterElem.innerHTML = "Touch the ball!"


function countdown() {
    if (timeLeft == 0) {
        clearTimeout(timerId);
        endGame();
    } else {
        timeElem.innerHTML = timeLeft + ' seconds remaining';
        timeLeft--;
    }
}

function endGame() {
    alert("Time is Up. You got a score of: " + clickCount);
    startToken = 0;
    clickCount = 0;
    timeElem.innerHTML = '0 seconds remaining';

}

ball.addEventListener("click", function () {
    if (clickCount == 0) {
        startToken = 1;
        timerId = setInterval(countdown, 1000);
    }

    if (startToken == 1) {
        ball.style.top = `${parseInt(Math.random() * (widthOfField - widthOfBall)) + 60}px`
        ball.style.left = `${parseInt(Math.random() * (heightOfField - widthOfBall)) + 50}px`
        clickCount++;
        // timeElem.innerHTML = timeLeft + ' seconds remaining';
        counterElem.innerHTML = 'Touches: ' + clickCount;
    }

})