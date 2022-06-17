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
