//Match color inputs with background gradient

const color1 = document.querySelector('.color1');
const color2 = document.querySelector('.color2');
const body = document.getElementById('gradient');
const h3 = document.querySelector('h3');

function setGradient() {
	body.style.background = `linear-gradient(to right, ${color1.value} , ${color2.value})`;
	h3.textContent = body.style.background + ';';
}

color1.addEventListener('input', setGradient);

color2.addEventListener('input', setGradient);

//Select random colors
const random1 = document.getElementById('random1');
const random2 = document.getElementById('random2');

function randomNum() {
	return Math.floor(Math.random() * 256);
}

function numToHex(num) {
	let hex = num.toString(16);
	return hex.length === 1 ? '0' + hex : hex;
}

function rgbToHex(r,g,b) {
	let hexR = numToHex(r);
	let hexG = numToHex(g);
	let hexB = numToHex(b);
	return '#' + hexR + hexG + hexB;
}

random1.addEventListener('click', function() {
	let r = randomNum();
	let g = randomNum();
	let b = randomNum();
	body.style.background = `linear-gradient(to right, rgb(${r},${g},${b}) , ${color2.value})`;
	color1.value = rgbToHex(r,g,b);
	h3.textContent = body.style.background + ';';
});

random2.addEventListener('click', function() {
	let r = randomNum();
	let g = randomNum();
	let b = randomNum();
	body.style.background = `linear-gradient(to right, ${color1.value} , rgb(${r},${g},${b}))`;
	color2.value = rgbToHex(r,g,b);
	h3.textContent = body.style.background + ';';
});