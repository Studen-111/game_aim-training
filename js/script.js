const startBtn = document.querySelector('#start');
const screens = document.querySelectorAll('.screen');
const timeList = document.querySelector('#time-list');
const timer = document.querySelector('#time');
const board = document.querySelector('#board');
const colors = ['#00ff00', '#00ffff', '#dc143c', '#ff1493', '#4b0082'];

let time = 0;
let score = 0;

startBtn.addEventListener('click', (event) => {

    event.preventDefault();
    screens[0].classList.add('up');
});

timeList.addEventListener('click', (event) => {
    if (event.target.classList.contains('time-btn')) {
        time = parseInt(event.target.getAttribute('data-time'));
        screens[1].classList.add('up');
        startGame();
    }
});

board.addEventListener('click', (event) => {
    if (event.target.classList.contains('circle')) {
        score++;
        event.target.remove();
        createRandomCircle();
    }
});

function startGame() {
    setInterval(deacreaseTime, 1000);
    createRandomCircle();
    setTime(time);
}

function deacreaseTime() {
    if (time === 0) {
        finishGame();
    } else {
        let current = --time;

        if (current < 10) {
            current = `0${current}`;
        }
        setTime(current);
    }
}

function setTime(value) {
    timer.innerHTML = `00:${value}`;
}

function finishGame() {
    timer.parentElement.classList.add('hide');
    board.innerHTML = `<h1>Score: <span class="primary">${score}</span></h1>`;
}

function createRandomCircle() {
    const circle = document.createElement('div');
    const size = getRandomNumber(15, 60);
    const { width, height } = board.getBoundingClientRect();
    const x = getRandomNumber(0, width - size);
    const y = getRandomNumber(0, height - size);

    circle.classList.add('circle');
    circle.style.width = `${size}px`;
    circle.style.height = `${size}px`;
    circle.style.top = `${y}px`;
    circle.style.left = `${x}px`;
    circle.style.backgroundColor = getRandomColor();
    circle.style.boxShadow = `-5px 5px 30px 5px ${circle.style.backgroundColor}`;

    board.append(circle);
}

function getRandomNumber(min, max) {
    return Math.round((Math.random() * (max - min) + min));
}

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}
