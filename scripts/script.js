var numSquares = prompt("size");
var pixels = 0;
var continerSizes = 1200;

var picker = document.querySelector("#picker");
var color = picker.value;
console.log(color);

pixels = continerSizes /(numSquares * 2);
var container = document.querySelector(".container");
container.setAttribute('style', `background-color: white; 
                                height: ${continerSizes/2}px; 
                                width: ${continerSizes/2}px; 
                                display: grid; 
                                grid-template-columns: repeat(${numSquares}, ${pixels}px ); 
                                grid-template-rows: repeat(${numSquares}, ${pixels}px );`);

for (let index = 0; index < numSquares * numSquares; index++) {
    const div = document.createElement('div');

    div.setAttribute('style',`background-color: white;
                              height: ${pixels}px; 
                              width: ${pixels}px; 
                              border-style: solid;
                              border-width: 1px; 
                              border-color: gray;`);
    div.classList.add('square');

    container.appendChild(div);  
}
var squares = document.querySelectorAll(".square");

squares.forEach( square => {
    square.onmouseover = function() { mouseOver() };
    function mouseOver() {
        square.style.backgroundColor = `${color}`;
    }
});

