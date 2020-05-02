import Shape from '../drawing/Shape.js';
import Vector from '../math/Vector.js';

export default class Paddle extends Shape {
    constructor() {
        super(100, 20);
        this.velocity = new Vector;
        this.score = 0;

        this.lastPosition = new Vector;
    }

    update(deltaTime) {
        this.velocity.x = (this.position.x - this.lastPosition.x) / deltaTime;
        this.lastPosition.x = this.position.x;
    }
}
