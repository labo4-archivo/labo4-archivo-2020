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

let playerSequence = "1234567890qwertyuiopasdfghjk";
let playerKeys;

function preload(){
    videos.length = 28;
    colors.lenght = videos.length;

    for(let videoIndex = 0; videoIndex < videos.length; videoIndex++){
        
        //Para cargar imagenes usamos la funcion loadImage()
        //videos[videoIndex] = loadImage("videos/01.png");
       
        //Para cargar videos usamos la funcion createVideo()
        videos[videoIndex] = createVideo("videos/01.webm");
    }
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
    
    playerKeys = playerSequence.split("");

    //Configuracion de la grilla
    columns = 7;
    rows = 4;

    videoWidth = windowWidth/columns;
    videoHeight = windowHeight/rows;

    createCanvas(windowWidth, windowHeight)

    //inicialmente escondemos todos los videos. Se van a mostrar cuando hagamos click con el mouse en la pantalla
    for(let videoIndex = 0; videoIndex < videos.length; videoIndex++){
        videos[videoIndex].hide();
    }
}

function draw(){
    for(let videoIndex = 0; videoIndex < videos.length; videoIndex++){

        //Visualizamos la grilla con rectangulos y texto, identificamos que video va a aparecer en cada espacio
            
        /*
            fill(colors[videoIndex]);
            rect(columnsCounter*videoWidth, rowsCounter*videoHeight, videoWidth, videoHeight);

            textSize(32);
            fill (255)
            text(videoIndex, columnsCounter*videoWidth, (rowsCounter*videoHeight)+50);
        */

        //mostramos la secuencia de videos
        image(videos[videoIndex], videoWidth*columnsCounter, videoHeight*rowsCounter, videoWidth, videoHeight);

        //contamos la cantidad de columnas en la grilla
        columnsCounter++;

        //cada vez que el contador de columnas llega al maximo vuelve a 0
        if(columnsCounter === columns){
            columnsCounter = 0;

            //y pasa a la siguiente fila
            rowsCounter++;

            //cuando termina de contar las filas, vuelve al principio. 
            if(rowsCounter === rows){
                rowsCounter = 0;
            }
        }
    }

}

function mousePressed() {
    // for(let videoIndex = 0; videoIndex < videos.length; videoIndex++){
    //     videos[videoIndex].loop()
    // }

    // Estoy guardando las últimas coordenadas donde hice click
    lastClickPositionX=mouseX;
    lastClickPositionY=mouseY;
  }

  function keyTyped(){
    for(let keyIndex = 0; keyIndex < playerKeys.length; keyIndex++){
        if (key === playerKeys[keyIndex]){
            videos[keyIndex].loop();
        }
    }
  }

