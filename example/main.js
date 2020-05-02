import BrickChaos from "../src/BrickChaos.js";

const canvas = document.querySelector('#brick-chaos');
const game = new BrickChaos(canvas);

canvas.addEventListener('mousemove', event => {
    const scale = event.offsetX / event.target.getBoundingClientRect().width;
    game.player.position.x = canvas.width * scale;
});

game.start();
