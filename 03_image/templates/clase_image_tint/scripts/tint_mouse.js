let img;
let y; // vamos a guardar la posicion del puntero en el eje y
let x; // vamos a guardar la posicion del puntero en el eje x

function preload() {
  // cargamos la imagen
  img = loadImage("assets/neptuno.jpg");
}

function setup() {
  createCanvas(img.width, img.___);
  // *** ocultar el cursor
  // https://p5js.org/reference/#/p5/noCursor
}

function draw() {
  // https://p5js.org/reference/#/p5/map
  // https://p5js.org/reference/#/p5/mouseX
  x = map(___, 0, width, 0, 255);

  // https://p5js.org/reference/#/p5/tint
  tint(255, 0, 0);
  image(___, 0, 0, img.___, img.height);
    
  // *** usar algun filtro
  // https://p5js.org/reference/#/p5/filter
}