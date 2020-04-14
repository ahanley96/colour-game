var numSquares = 6;
var colors = [];
var pickedColor;
var h1 = document.querySelector("h1");
var squares = document.querySelectorAll(".square");
var messageDisplay = document.querySelector("#message");
var colorDisplay = document.getElementById("colorDisplay");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();


function init(){

	setupModeButtons();
	setupSquares();
	reset();
}

function setupSquares(){
	for(var i = 0; i < squares.length; i++){

		//add click listeners to squares
		squares[i].addEventListener("click", function() {
			//grab color of clicked squares
			var clickedColor = this.style.background;
			//compare color to pickedColor
			if(clickedColor === pickedColor) {
				messageDisplay.textContent = "Correct!";
				resetButton.textContent = "Play Again?";
				changeColors(clickedColor);
				h1.style.background = clickedColor;
			} else {
				this.style.background = "#232323";
				messageDisplay.textContent = "Try Again";
			}
		});
	}

}

function setupModeButtons(){
	for(var i = 0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener("click", function() {
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");	
			this.textContent === "Easy" ?	numSquares = 3 : numSquares = 6;
			reset();
		});
	}	

}

function reset() {
	colors = generateRandomColors(numSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	//change colorDisplay to match picked Color
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";
	//change colors of squares
	for(var i = 0; i < squares.length; i++) {
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
	h1.style.background = "steelblue";
}

resetButton.addEventListener("click", function(){
	reset();
});


//Helper Functions

function changeColors(color){
	//Loop through all squares
	for(var i = 0; i < squares.length; i++){
		//Change colour of all squares to the pickedColour.
		squares[i].style.backgroundColor = color;
	}
}

//Picks a random index of the colors array.
function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

//Generates how every many colours dictacted by the argument num.
function generateRandomColors(num){
	var arr = [];
	for(var i = 0; i < num; i++){
		arr.push(randomColor());
	}
	return arr;
}

//Generates random RGB Colour
function randomColor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);

	return "rgb(" + r + ", " + g + ", " + b + ")"
}


