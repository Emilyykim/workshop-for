let el, e2, e3;
let slection;

function preload() {
el = loadImage ("emojis/emoticon_1.png");
e2 = loadImage ("emojis/emoticon_2.png");
e3 = loadImage ("emojis/emoticon_3.png");
}

function setup () {
createCanvas (400, 400) ; 
selection = createSelect();
selection. position (100, 100); 
selection. option ('emoji 1'); 
selection. option ('emoji 2'); 
selection. option ('emoji 3');
}

function draw() {
background (220) ;
let x = selection. selected();
if (x === 'emoji 1'){
image (e1, 200, 200);
} else if (x === 'emoji 2'){
  image (e1, 200, 200);
} else if (x === 'emoji 3'){
image (e3,200, 200)
}
}