export default class Renderer {
    constructor(canvas, context) {
        this.canvas = canvas;
        this.context = context;

    }

    clearBackground(color = '#000') {
        this.context.fillStyle = color;
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }

    renderShape(shape, colour = '#fff') {
        this.context.fillStyle = colour;
        this.context.fillRect(shape.left, shape.top, shape.size.x, shape.size.y);
    }
}
