import Shape from '../drawing/Shape.js';
import Vector from '../math/Vector.js';

export default class Level {
    constructor() {
        this.blocks = [
            [10,10,9,8,7,8,9,10,10],
            [10,9,8,7,6,7,8,9,10],
            [0,8,7,6,5,6,7,8,0],
            [0,0,6,5,5,5,6,0,0],
            [0,0,0,6,4,6,0,0,0],
            [0,8,7,6,5,6,7,8,0],
            [0,0,6,5,5,5,6,0,0],
            [0,0,0,6,4,6,0,0,0]
        ];
    }
}
