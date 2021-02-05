// main.js

// TODO

const slider = document.getElementById("volume-slider");
const numvol = document.getElementById("volume-number");
const button = document.getElementById("honk-btn");
const audele = document.getElementById("horn-sound");
console.log('main loaded');
slider.addEventListener('input',changeVolSlide);
numvol.addEventListener('input',changeVolNum);

function changeVolSlide() {
	const value = slider.value;
	numvol.value = value;
	changeVolIcon(value);
}

function changeVolNum() {
	const value = numvol.value;
	slider.value = value;
	changeVolIcon(value);
}

function changeVolIcon(value) {
	const icon = document.getElementById("volume-image");
	let img = "";
	if(value < 1) {
		img = "./assets/media/icons/volume-level-0.svg";	
		button.disabled = true;
	}
	else if(value <= 33) {
		img = "./assets/media/icons/volume-level-1.svg";
		button.disabled = false;
	}
	else if(value <= 66) {
		img = "./assets/media/icons/volume-level-2.svg";
		button.disabled = false;
	}
	else {
		img = "./assets/media/icons/volume-level-3.svg";
		button.disabled = false;
	}
	icon.src = img;
	document.getElementById("horn-sound").volume = value/100;
}

const play = document.getElementById("party-horn-form");
play.addEventListener('submit',playsound);

function playsound(event) {
	event.preventDefault();
	document.getElementById('horn-sound').play();
}

const selector = document.getElementById("audio-selection");
const air = document.getElementById("radio-air-horn");
const car = document.getElementById("radio-car-horn");
const party = document.getElementById("radio-party-horn");
const horn = document.getElementById("sound-image");
selector.addEventListener('click',updatesound);

function updatesound() {
	if(air.checked) {
		audele.src = "./assets/media/audio/air-horn.mp3";
		horn.src = "./assets/media/images/air-horn.svg";
		horn.alt = "air-horn";
	}
	else if(car.checked) {
		audele.src = "./assets/media/audio/car-horn.mp3";
		horn.src = "./assets/media/images/car.svg";
		horn.alt = "car";
	}
	else {
		audele.src = "./assets/media/audio/party-horn.mp3";
		horn.src = "./assets/media/images/party-horn.svg";
		horn.alt = "party-horn";
	}
}

console.log(car.checked);