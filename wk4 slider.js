let img; 
let slider;

function preload() {
img = loadImage(" images/apples.jpg");
}

function setup() {
createCanvas (400, 400) ;
slider = createSlider (0, 255);
slider. position (100, 350);
slider. size(200);
}

function draw() {
//background (220) ;
let val = slider.value();
background (val);
}