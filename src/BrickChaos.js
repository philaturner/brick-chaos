import Ball from './entity/Ball.js';
import Paddle from './entity/Paddle.js';
import Renderer from './drawing/Renderer.js';
import Collider from './utility/Collider.js';
import BallFactory from './factory/BallFactory.js';
import Level from './entity/Level.js';
import Block from './entity/Block.js';

export default class BrickChaos {
    constructor(canvas) {
        this.canvas = canvas;
        this.context = canvas.getContext('2d');
        this.renderer = new Renderer(this.canvas, this.context);
        this.ballFactory = new BallFactory(this.canvas);
        this.intialiseObjects();
        this.initialiseBlocks();
        this.initialiseGameLoop();
    }

    addBall() {
        const newBall = this.ballFactory.makeActiveBall();
        if (this.balls.length < 50 ) {
            this.balls.push(newBall);
        }
    }

    initialiseBlocks() {
        this.blocks = [];
        this.level.blocks.forEach((columns, columnIndex) => {
            columns.forEach((block, rowIndex) => {
                if (block > 0) {
                    const blockX = ((this.canvas.width / columns.length) * rowIndex) + 50;
                    const blockY = ((20) * columnIndex) + 10;
                    this.blocks.push(
                        new Block(blockX, blockY, block)
                    )
                }
            })
        });
    }

    intialiseObjects() {
        this.level = new Level;
        this.collider = new Collider;
        this.player = new Paddle;
        const newBall = this.ballFactory.makeActiveBall();
        this.balls = [
            newBall
        ];
        this.player.position.x = this.canvas.width / 2;
        this.player.position.y = this.canvas.height - 50;
    }

    initialiseGameLoop() {
        let previousTime = null;
        this.frameCallback = (milliseconds) => {
            if (previousTime !== null) {
                const diff = milliseconds - previousTime;
                this.update(diff / 1000);
            }
            previousTime = milliseconds;
            requestAnimationFrame(this.frameCallback);
        };
    }

    start() {
        this.renderer.clearBackground();
        this.renderer.renderShape(this.player);
        requestAnimationFrame(this.frameCallback);
    }

    update(deltaTime) {
        this.player.update(deltaTime);
        this.balls.forEach(ball => {
            ball.position.x += ball.velocity.x * deltaTime;
            ball.position.y += ball.velocity.y * deltaTime;

            //stop ball if below bottom
            if (ball.velocity.y > 0 && ball.bottom > this.canvas.height) {
                ball.velocity.x = 0;
                ball.velocity.y = 0;
                ball.position.y = -10;
            }

            //rebound top
            if (ball.velocity.y < 0 && ball.top < 0) {
                ball.velocity.y = -ball.velocity.y;
            }

            ///rebound top
            if (ball.velocity.x < 0 && ball.left < 0 ||
                ball.velocity.x > 0 && ball.right > this.canvas.width) {
                ball.velocity.x = -ball.velocity.x;
            }

            // collide with paddle
            if (this.collider.collided(ball, this.player)) {
                const priorLength = ball.velocity.length;
                ball.velocity.y = -ball.velocity.y * 1.05;
                ball.length = priorLength;
                this.addBall();
                this.addBall();
                this.addBall();
                this.addBall();
                this.addBall();
                this.addBall();
            }

            // collide with block
            this.blocks.forEach(block => {
                if (this.collider.collided(ball, block)) {
                    if (block.value > 0) {
                        block.value = block.value - 1;
                        const priorLength = ball.velocity.length;
                        ball.velocity.y = -ball.velocity.y * 1.05;
                        ball.length = priorLength;
                    }
                }
            });


        });
        this.render();
    }

    render() {
        this.renderer.clearBackground();
        this.balls.forEach(ball => {
            this.renderer.renderShape(ball, '#77fcf0');
        });
        this.blocks.forEach(block => {
            if (block.value > 0) {
                this.renderer.renderShape(block, block.colorMap[block.value]);
            }
        });
        this.renderer.renderShape(this.player);
    }
}
