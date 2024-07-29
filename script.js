const gameArea = document.getElementById('gameArea');
const basket = document.getElementById('basket');
const ball = document.getElementById('ball');

let basketX = gameArea.clientWidth / 2 - basket.clientWidth / 2;
let ballY = 0;
let ballX = Math.random() * (gameArea.clientWidth - ball.clientWidth);
let basketSpeed = 10;
let ballSpeed = 2;

document.addEventListener('keydown', moveBasket);

function moveBasket(e) {
    if (e.key === 'ArrowLeft') {
        basketX = Math.max(0, basketX - basketSpeed);
    } else if (e.key === 'ArrowRight') {
        basketX = Math.min(gameArea.clientWidth - basket.clientWidth, basketX + basketSpeed);
    }
    basket.style.left = `${basketX}px`;
}

function dropBall() {
    ballY += ballSpeed;
    ball.style.top = `${ballY}px`;
    ball.style.left = `${ballX}px`;

    if (ballY + ball.clientHeight >= gameArea.clientHeight) {
        if (
            ballX + ball.clientWidth >= basketX &&
            ballX <= basketX + basket.clientWidth
        ) {
            alert('You caught the ball!');
            resetBall();
        } else {
            alert('You missed the ball!');
            resetBall();
        }
    }

    requestAnimationFrame(dropBall);
}

function resetBall() {
    ballY = 0;
    ballX = Math.random() * (gameArea.clientWidth - ball.clientWidth);
}

dropBall();
