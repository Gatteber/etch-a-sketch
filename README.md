# etch-a-sketch
Etch-a-Sketch project in vanilla JS.

### TO DO ###
1.) HTML Boilerplate                      [X]
2.) Super Basic CSS styling               [X]
3.) add 16x16 divs inside a box in HTML   [X]
4.) Style                                 [X]
5.) Add Javascript procedural generation  [X]
6.) Listener functionality for hover      [X]
7.) Color changes (blue)                  [X]
8.) Clear Button                          [X]
9.) Slider for new grid                   [X]
10.) Add transform for btn when clicked   [X]
11.) Rainbow color calculator             [X]

### Notes ###
using flexbox, need to calculate the number of grid items and divide it by the total space for the slider.


//base values: height/width 384px (sketch box)
//base values: height/width 24px (child)

//total pixels available 147456 
// divide pixels available by slider input^2
// take square root to get width/height? (seems to work)
// Math.sqrt((147456 / 16 ** 2));
