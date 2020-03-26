let img;

function preload() {
  img = loadImage("assets/neptuno.jpg");
}

function setup() {
  createCanvas(img.width, img.height);
  background(127);

  image(img, 0, 0, img.width, img.height);
  filter(BLUR, 10);

  tint(150, 20, 250);
  image(img, img.width / 2, img.height / 2, img.width / 2, img.height / 2);

  noTint();
  image(img, img.width / 2, 0, img.width / 2, img.height / 2);
}