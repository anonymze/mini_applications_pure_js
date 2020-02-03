const canvas = document.querySelector('#draw');

const ctx = canvas.getContext('2d');


// set width canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// set parametres des dessins du canvas (ctx)
ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 30;
//ctx.globalCompositeOperation = 'multiply'; /* blend mode de photoshop */

let is_drawing = false;
let last_x = 0;
let last_y = 0;
let hue = 0;
let direction = true;

function draw(e) {
    if (!is_drawing) return; // stop la fonction si la souris n'est pas cliqué
    console.log(e);
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;

    ctx.beginPath();
    ctx.moveTo(last_x, last_y);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    //last_x = e.offsetX;
    //last_y = e.offsetY;
    [last_x, last_y] = [e.offsetX, e.offsetY];
    hue++;

    if (hue >= 360) hue = 0;
    if (ctx.lineWidth >= 120 || ctx.lineWidth <= 1) direction = !direction;

    (direction) ? ctx.lineWidth++ : ctx.lineWidth--;    
}

canvas.addEventListener('mousedown', (e) =>  {
    is_drawing = true;
    [last_x, last_y] = [e.offsetX, e.offsetY];
});

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => is_drawing = false);
canvas.addEventListener('mouseout', () => is_drawing = false);