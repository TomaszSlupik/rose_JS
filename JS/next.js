const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const color = document.querySelector(".color");
let textRose = document.querySelector(".textRose");
const changeone = document.querySelector(".changeone");
const changesize = document.querySelector(".changesize");

const photo = document.querySelector(".photo");
const photorose = document.querySelector(".photorose");
const photorosechange = document.querySelector(".photorosechange");

function change() {
	textRose.classList.toggle("changeone");
}

function size() {
	textRose.classList.toggle("changesize");
}

function minimum() {
	textRose.classList.toggle("min");
}

function image() {
	photorose.classList.toggle("photorosechange");
}

color.addEventListener("click", change);
plus.addEventListener("click", size);
minus.addEventListener("click", minimum);
photo.addEventListener("click", image);
