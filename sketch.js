console.log("in sketch.js");

let sketchRNN;
function preload() {
    sketchRNN = ml5.sketchRNN('cat');
}

function setup() {
    createCanvas(400, 400);
    console.log('model loaded');
}

function draw() {
    background(220);
}