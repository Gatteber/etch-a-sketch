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

//resize box
function removeAllChildNodes (parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
};
const etchRemove = document.querySelector('.etch-box');
const resizeButton = document.querySelector('.go-btn');
resizeButton.addEventListener("click", function () {
    removeAllChildNodes(etchRemove);
    generate();
    const etchColoring = document.querySelectorAll('.etch-child');
    etchColoring.forEach((child) => {
        child.addEventListener('mouseover', function (event) {
        event.target.style.backgroundColor = mouseColor;
    })//go through each child, set background color.
});
});


//drawing colors
const etchColoring = document.querySelectorAll('.etch-child');
etchColoring.forEach((child) => {
    child.addEventListener('mouseover', function (event) {
        event.target.style.backgroundColor = mouseColor;
    })//go through each child, set background color.
});


//color and clear selectors
let mouseColor = "black";
const changeBlack = document.querySelector('.black-btn');
const changeBlue = document.querySelector('.blue-btn');
const changeRainbow = document.querySelector('.rainbow-btn');
const clearPad = document.querySelector('.clear-btn');

changeBlack.addEventListener("click", function() {
    let etchColoring = document.querySelectorAll('.etch-child');
    etchColoring.forEach((child) => {
        child.addEventListener('mouseover', function (event) {
            event.target.style.backgroundColor = "black";
        })//set black color.
});
});
changeBlue.addEventListener("click", function() {
    let etchColoring = document.querySelectorAll('.etch-child');
    etchColoring.forEach((child) => {
        child.addEventListener('mouseover', function (event) {
            event.target.style.backgroundColor = "blue";
        })//set black color.
});
});

//rainbow
function getRandomColor () {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};
changeRainbow.addEventListener("click", function() {
    let etchColoring = document.querySelectorAll('.etch-child');
    etchColoring.forEach((child) => {
        child.addEventListener('mouseover', function (event) {
            event.target.style.backgroundColor = getRandomColor();
        })//set rainbow color.
    });
});

//clear
clearPad.addEventListener("click", function() {
    let eraser = document.querySelectorAll('.etch-child');
    for (i = 0; i < eraser.length; i++) {
        eraser[i].style.backgroundColor = "white";
    } //loops through children and sets to white.
});