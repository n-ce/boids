const canvas = document.body.firstElementChild;
const ctx = canvas.getContext('2d');
canvas.height = document.documentElement.clientHeight;
canvas.width = document.documentElement.clientWidth;


function isoTrang(x1, y1, z1, color) {
	ctx.beginPath();
	ctx.moveTo(x1, y1);
	const size = 10;
	let angle = z1 * Math.PI / 180;
	let x2 = x1 + size * Math.cos(angle);
	let y2 = y1 + size * Math.sin(angle);
	ctx.lineTo(x2, y2);
	angle = (120 + z1) * Math.PI / 180;
	let x3 = x2 + size * Math.cos(angle);
	let y3 = y2 + size * Math.sin(angle);
	ctx.lineTo(x3, y3);
	ctx.fillStyle = color;
	ctx.fill();
}

const randomNum = (min, max) =>
	Math.floor(Math.random() * (max - min + 1)) + min;


let i = 100;
let j = 100;

setInterval(() => {
	ctx.clearRect(0, 0, canvas.width, canvas.height)
	if (i == canvas.width || i == 0) i = 0;
	if (j == canvas.height || j == 0) j = 0;
/*
	isoTrang(i * (0 / 3), j * (3 / 3), 0, 'blue');
	isoTrang(i * (1 / 3), j * (3 / 3), 105, 'purple');
	isoTrang(i * (2 / 3), j * (3 / 3), 90, 'violet');
*/
	isoTrang(i, j, 75, 'red');
/*
	isoTrang(i, j * (2 / 3), 60, 'yellow');
	isoTrang(i, j * (1 / 3), 45, 'orange');
	isoTrang(i, j * (0 / 3), 30, 'green');
*/
i++;
j++;
}, 10)