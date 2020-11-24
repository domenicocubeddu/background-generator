var css = document.querySelector("h3");
var color1 = document.querySelector("#palette1");
var color2 = document.getElementById("palette2");
var body = document.querySelector("body");
var gradient1 = document.querySelector("#palette1").value;
var gradient2 = document.getElementById("palette2").value;
var btn = document.getElementById("random");

body.style.background = "linear-gradient(to right, " + gradient1 + ", " + gradient2 + ")";

css.textContent = body.style.background + ";";

function setGradient() {
	body.style.background = "linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";
	css.textContent = body.style.background + ";";
};

function randomGradient() {
	body.style.background = "linear-gradient(to right, rgb(" 
	+ Math.floor(Math.random() * 255) + ", "
	+ Math.floor(Math.random() * 255) + ", "
	+ Math.floor(Math.random() * 255) + "), "
	+ "rgb(" + Math.floor(Math.random() * 255)
	+ ", " + Math.floor(Math.random() * 255) 
	+ ", " + Math.floor(Math.random() * 255)
	+ "))";
	css.textContent = body.style.background + ";";
}

btn.addEventListener("click", randomGradient);

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);


