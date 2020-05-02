import Vector from '../math/Vector.js';

export default class Shape {
    constructor(width = 0, height = 0) {
        this.position = new Vector(0, 0);
        this.size = new Vector(width, height);
    }

    get left() {
        return this.position.x - this.size.x / 2;
    }

    get right() {
        return this.position.x + this.size.x / 2;
    }

    get top() {
        return this.position.y - this.size.y / 2;
    }

    get bottom() {
        return this.position.y + this.size.y / 2;
    }
}
