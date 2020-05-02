import Shape from '../drawing/Shape.js';
import Vector from '../math/Vector.js';

export default class Block extends Shape {
    constructor(x, y, value = 0) {
        super(100, 20);
        this.velocity = new Vector;
        this.value = value;
        this.position.x = x;
        this.position.y = y;
        this.colorMap = {
            1: '#62D4EA',
            2: '#58CDE4',
            3: '#4DC4DB',
            4: '#3EB9D1',
            5: '#36B3CC',
            6: '#26A8C1',
            7: '#1CA2BC',
            8: '#19A0BA',
            9: '#0597B2',
            10: '#0093AE'
        }
    }
}
