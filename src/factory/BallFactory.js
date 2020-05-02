import Ball from '../entity/Ball.js';

export default class BallFactory {
    constructor(canvas) {
        this.canvas = canvas;
    }

    makeActiveBall() {
        const ball = new Ball();
        ball.position.x = this.canvas.width / 2;
        ball.position.y = this.canvas.height / 4;
        ball.velocity.x = 200 * (Math.random() > .5 ? 1 : -1);
        ball.velocity.y = 200 * (Math.random() > .5 ? 1 : -1);
        ball.velocity.length = 350;
        return ball;
    }
}
