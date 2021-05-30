const box = window;
const ballElements = document.querySelectorAll('.fixed');
const ballSize = ballElements[0].offsetWidth;

const ball = {
    size: ballSize,
    minX: 0,
    minY: 0,
    maxX: window.innerWidth - (ballSize),
    maxY: window.innerHeight - (ballSize),
}

const random = (min, max) => gsap.utils.random(min, max);
const randomSign = () => (Math.random() < 0.5 ? -1 : 1);

gsap.set(ballElements[0], { x: '5vw', y: '5vw' });
gsap.set(ballElements[1], { x: '20vw', y: '20vw' });
gsap.set(ballElements[2], { x: '70vw', y: '40vw' });

const moveBall = () => {
    gsap.to(ballElements[0], {
        duration: random(170000, 190000),
        x: random(400000, 800000) * randomSign(),
        y: random(400000, 800000) * randomSign(),
        modifiers: { x: gsap.utils.unitize(modX), y: gsap.utils.unitize(modY) },
        onComplete: moveBall,
    });
    gsap.to(ballElements[1], {
        duration: random(100000, 120000),
        x: random(400000, 800000) * randomSign(),
        y: random(400000, 800000) * randomSign(),
        modifiers: { x: gsap.utils.unitize(modX), y: gsap.utils.unitize(modY) },
        onComplete: moveBall,
    });
    gsap.to(ballElements[2], {
        duration: random(100000, 120000),
        x: random(400000, 800000) * randomSign(),
        y: random(400000, 800000) * randomSign(),
        modifiers: { x: gsap.utils.unitize(modX), y: gsap.utils.unitize(modY) },
        onComplete: moveBall,
    });
}
moveBall();

function modX(x) {
    if (x > ball.maxX || x < ball.minX) {
        const delta = ((x % ball.maxX) + ball.maxX) % ball.maxX;
        const start = x > ball.maxX ? 1 : 0;
        const ratio = x / ball.maxX + start;
        const even = !(ratio & 1);
        x = even ? ball.maxX - delta : ball.minX + delta;
    }
    return x;
}

function modY(y) {
    if (y > ball.maxY || y < ball.minY) {
        const delta = ((y % ball.maxY) + ball.maxY) % ball.maxY;
        const start = y > ball.maxY ? 1 : 0;
        const ratio = y / ball.maxY + start;
        const even = !(ratio & 1);
        y = even ? ball.maxY - delta : ball.minY + delta;
    }
    return y;
}