
//update the size of the cavas for user value
function updateValue(e) {
    var squares = document.querySelectorAll(".square");
    squares.forEach(item => item.remove());
    createCanvas(e.target.value);
    changeColor(document.querySelector("#colorWell").value);
}

//create the canvas
function createCanvas(numSquares){    
    var pixels = 0;
    var continerSizes = 1200;

    //create the size of the squares
    pixels = continerSizes /(numSquares * 2);

    //create the container
    var container = document.querySelector(".container");
    container.setAttribute('style',`background-color: #888888; 
                                    height: ${continerSizes/2}px; 
                                    width: ${continerSizes/2}px; 
                                    display: grid; 
                                    grid-template-columns: repeat(${numSquares}, ${pixels}px ); 
                                    grid-template-rows: repeat(${numSquares}, ${pixels}px );`);
    // create de squares
    for (let index = 0; index < numSquares * numSquares; index++) {
        const div = document.createElement('div');

        div.setAttribute('style',`background-color: #ededed;
                                height: ${pixels}px; 
                                width: ${pixels}px; 
                                border-style: solid;
                                border-width: 1px; 
                                border-color: gray;`);
        div.classList.add('square');

        container.appendChild(div);  
    }
    console.log(numSquares);
}

//color whel
function startup() {
    var colorWell;
    colorWell = document.querySelector("#colorWell");
    colorWell.value = defaultColor;
    colorWell.addEventListener("change", updateAll, false);
    colorWell.select();
}

// update colors
function updateAll(event) {
    changeColor(event.target.value);
}

//mouse over squares and color change
function changeColor (value) {
    var squares = document.querySelectorAll(".square");
    squares.forEach( square => {
        square.onmouseover = function() { mouseOver() };
        function mouseOver() {
            square.style.backgroundColor = value;
        }
    });
}

//canvas size
var defaultSize = document.querySelector("#canvasSize");
createCanvas(defaultSize.value);
defaultSize.addEventListener('change', updateValue);

//inicial color value
var defaultColor = "#000000"
changeColor(defaultColor);
window.addEventListener("load", startup, false);

//picker color 
var color_picker = document.getElementById("colorWell");
var color_picker_wrapper = document.getElementById("color-picker-wrapper");
color_picker.onchange = function() {
	color_picker_wrapper.style.backgroundColor = color_picker.value;    
}
color_picker_wrapper.style.backgroundColor = color_picker.value;





