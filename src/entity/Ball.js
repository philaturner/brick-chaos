import Shape from '../drawing/Shape.js';
import Vector from '../math/Vector.js';

export default class Ball extends Shape {
    constructor(size = 6) {
        super(size || 6, size || 6);
        this.velocity = new Vector();
    }
}
