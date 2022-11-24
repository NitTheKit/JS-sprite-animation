const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

const playerImage = new Image();
playerImage.src = 'shadow_dog.png'
const spriteWidth = 575;
const spriteHeight = 523;
let playerState = 'fall';

let gameFrame = 0;
const staggerFrames = 5;
const spriteAnimations = [];
const animationStates = [];

animationStates.forEach((state, index => {
    let frams = {
        loc:[],
    }
    for(let i = 0; i < state.frames; i++){
        let posX = i * spriteWidth;
        let posY = index * spriteHeight;
        frams.loc.push({x: posX, Y: posY});
    }
    spriteAnimations[state.name] = frames;
}));

function animate(){
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    let position = Math.floor(gameFrame/staggerFrames) % spriteAnimations[playerState].loc.length;
    let frameX = spriteWidth * position;
    let frameY = spriteAnimations[playerState].loc[position].y;
    
    ctx.drawImage(playerImage, frameX, frameY, spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight);

    gameFrame++;
    requestAnimationFrame(animate);
}
animate();
