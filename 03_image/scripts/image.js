let img; 

function preload() {
  img = loadImage("../assets/neptuno.jpg");
}

function setup() {
  createCanvas(img.width, img.height);
  image(img, 0, 0, img.width, img.height);
}