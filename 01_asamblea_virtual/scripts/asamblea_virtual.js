// Declaramos fuera de las funciones las variables
let videos = [];

let columns;
let rows;
let colors = [];
let firstColor;
let columnsCounter;
let rowsCounter;

let videoWidth;
let videoHeight; 

let lastClickPositionX;
let lastClickPositionY;

function preload(){
    videos.length = 28;
    colors.lenght = videos.length;

    // for(let videoIndex = 0; videoIndex < videos.length; videoIndex++){
    //     videos[videoIndex] = loadImage("../assets/01.png");
    // }
}

function setup(){
    // Asignamos valores iniciales a las variables

    firstColor= 0;

    columnsCounter = 0;
    rowsCounter = 0;

    for(let videoIndex = 0; videoIndex <= videos.length; videoIndex++){
        colors[videoIndex] = firstColor + 7;
        firstColor = colors[videoIndex]
    }

    //Configuracion de la grilla
    columns = 7;
    rows = 4;

    videoWidth = windowWidth/columns;
    videoHeight = windowHeight/rows;

    createCanvas(windowWidth, windowHeight)

    // for(let videoIndex = 0; videoIndex < videos.length; videoIndex++){
    //     videos[videoIndex].hide();
    // }
}

function draw(){

    for(let videoIndex = 0; videoIndex < videos.length; videoIndex++){

        //Visualizamos la grilla con rectangulos y texto, identificamos que video va a aparecer en cada espacio
            fill(colors[videoIndex]);
            rect(columnsCounter*videoWidth, rowsCounter*videoHeight, videoWidth, videoHeight);

            textSize(32);
            fill (255)
            text(videoIndex, columnsCounter*videoWidth, (rowsCounter*videoHeight)+50);

        
        //image(videos[videoIndex], videoWidth*columnsCounter, videoHeight*rowsCounter, videoWidth, videoHeight);

        columnsCounter++;

        if(columnsCounter === columns){
            columnsCounter = 0;
            rowsCounter++;
            if(rowsCounter === rows){
                rowsCounter = 0;
            }
        }
    }

}

function mousePressed() {
    for(let videoIndex = 0; videoIndex < videos.length; videoIndex++){
        // videos[videoIndex].loop()
    }
    lastClickPositionX=mouseX;
    lastClickPositionY=mouseY;
  }