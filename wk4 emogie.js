function preload() {
e1 = loadImage ("emojis/emoticon_1.png");
e2 = loadImage ("emojis/emoticon_2.png");
e3 = loadImage ("emojis/emoticon_3.png");
}


function setup () {
emojis. push (el); 
emojis. push (e2);
emojis. push (e3);
createCanvas (400, 400) ;
checkbox = createCheckbox();
checkbox. position (200, 150);
}

function draw() {
background (220) ;
if (checkbox. checked()){
 let r = random (emojis);
image(r, 200, 200);
} else {
 background (255, 0, 0);
}
}