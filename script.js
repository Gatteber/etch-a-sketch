//slider variables
var slider = document.getElementById("etchRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value + " x " + slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value + " x " + this.value;
}

//create divs
function generate() {
    const sketchGenerate = document.querySelector('.etch-box');
    let boxSize = Math.sqrt((147456 / slider.value ** 2));
    console.log(boxSize + " boxes to be generated.");
    let boxAmount = slider.value ** 2; //square slider value
    for (let i = 0; i < boxAmount; i++) {
        const generateBox = document.createElement('div');
        generateBox.classList.add('etch-child');
        generateBox.style.width = boxSize + "px"; //wtf it works LMAO
        generateBox.style.height = boxSize + "px";
        sketchGenerate.appendChild(generateBox);
    }
}
generate();


//drawing colors
const etchColoring = document.querySelectorAll('.etch-child');

//go through each child, set background color.
etchColoring.forEach((child) => {
    child.addEventListener('mouseover', function (event) {
        event.target.style.backgroundColor = mouseColor;
    })
});


//color and clear selectors
let mouseColor = "black";
const blackColor = "black";
const blueColor = "blue";
const rainbowColor = getRandomColor();
const clearAll = "clear";
const changeBlack = document.querySelector('.black-btn');
const changeBlue = document.querySelector('.blue-btn');
const changeRainbow = document.querySelector('.rainbow-btn');
const clearPad = document.querySelector('.clear-btn');

//rainbow
function getRandomColor () {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


changeBlack.addEventListener("click", function() {
    mouseColor = blackColor;
    console.log("I was clicked!!");
});
changeBlue.addEventListener("click", function() {
    mouseColor = blueColor;
    console.log("I was clicked!!");
});
changeRainbow.addEventListener("click", function() {
    mouseColor = rainbowColor;
    console.log("I was clicked!!");//need to add rainbow coloring.
});
clearPad.addEventListener("click", function() {
    for (i = 0; i < etchColoring.length; i++) {
        etchColoring[i].style.backgroundColor = "white";
    } //loops through children and sets to white.
});

