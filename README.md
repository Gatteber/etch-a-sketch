# etch-a-sketch
Etch-a-Sketch project in vanilla JS.

### TO DO ###
1.) HTML Boilerplate                      [X]
2.) Super Basic CSS styling               [X]
3.) add 16x16 divs inside a box in HTML   [X]
4.) Style                                 [X]
5.) Add Javascript procedural generation  [X]
6.) Listener functionality for hover      [X]
7.) Color changes (blue, rainbow)         [X]
8.) Clear Button                          [X]
9.) Slider for new grid                   [X]
10.) Add transform for btn when clicked   [X]
11.) Rainbow color calculator             [X]
Done!

### Notes ###
using flexbox, need to calculate the number of grid items and divide it by the total space for the slider.


//base values: height/width 384px (sketch box)
//base values: height/width 24px (child)

//total pixels available 147456 
// divide pixels available by slider input^2
// take square root to get width/height? (seems to work)
// Math.sqrt((147456 / 16 ** 2));


### Reflection ###
This is definitely my strongest project so far. I think during the RPS-ui project, where I was working with my previous legacy code (likely this is intended as part of the course) I felt as though I was really trapped in a lot of decisions and it felt like every time I tried to do something or add something, it was broken and I was constantly trying not to tear my hair out over hacking together two sets of code.

On the other hand, this project was much smoother. I ended up using some copy/paste (particularly for the slider and also the rainbow function - It was really cool that someone just joined together a bunch of random numbers to create a hex value) but for the most part, I figured out how to do most of the rest by myself. I needed a little help with the forEach() method, but thankfully I was able to get it down and even implement a bit of it myself!

My goals for improvement on the next project:
Color selection still ended up being a lot of code. I believe there's room for optimization with some sort of "color choice" function, but even after scratching my head and looking at it, I couldn't come up with how to even approach it. I initially had it stored in a variable, but that didn't want to play nice with my rainbow function solution. I think, at the root of everything, the rainbow function is kind of what broke my original idea, and if there were a way to say, randomiz the input WITHOUT re-selecting everything, I could probably implement it, but I don't know how to do that.

I also want to make sure to start taking time to make things look a little nicer. I'm starting to learn pretty quickly that while I can imagine nice designs, I'm not very good at using my minds eye to imagine and implement said design.

Finally, I should start making an effort to organize my code. I cleaned it up a bit, but I still think I could organize it better.

On to the next one! You can do it!