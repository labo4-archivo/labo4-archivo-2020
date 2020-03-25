// Esta es la estructura de un comentario de una linea en javascript. Todo lo que escriba despues de las dos // va a ser ignorado por el browser

/* 
Esta es la estructura de un comentario de varias lineas
todas las lineas que escriba entre los signos 
van a ser ignoradas por el browser
*/


// Declaramos fuera de las funciones las variables para poder modificarlas y usarlas en todas las funciones del programa. 

let videos = new Array(28); //array donde vamos a guardar las rutas a los videos. 

let columns; //cantidad de columnas que queremos tener en la grilla
let rows; //cantidad de filas que queremos tener en la grilla
let columnsCounter; //variable auxiliar para acomodar los videos en las columnas
let rowsCounter; //variable auxiliar para acomodar los videos en las filas

let colors = [];// array que voy a usar para asignarle un valor de color a cada cuadrado de la grilla
let firstColor;// variable que define cual va a ser el primer color que voy a tomar

let videoWidth;// ancho de los videos en px
let videoHeight; // alto de los videos en px

let playerSequence = "1234567890qwertyuiopasdfghjk"; //String en el que voy a definir cuales seran las teclas que voy a usar para prender y apagar los videos 
let playerKeys; // Array en el que voy a guardar el valor de cada tecla separado // Esto lo hacemos asi porque es mas facil/practico escribir una secuencia de caracteres seguida y separarla con la funcion .split()

let isPlaying = [] // array auxiliar que voy a usar para saber si un video esta siendo reproducido o esta pausado. 



// Usamos esta funcion para precargar los videos al inicio de la ejecución del programa
function preload(){ 
        
    videos.length = 28;

    for(let videoIndex = 0; videoIndex < videos.length; videoIndex++){
        //Para cargar imagenes usamos la funcion loadImage()
        //videos[videoIndex] = loadImage("videos/01.png");
       
        //Para cargar videos usamos la funcion createVideo()
        videos[videoIndex] = createVideo("videos/01.webm");
    }
}


// la función setup se va a ejecutar una sola vez al inicio del programa, en ella escribimos todo el codigo relacionado con la configuraciòn inicial del programa y asignamos valores a las constantes
function setup(){
    // Asignamos valores iniciales a las variables
    firstColor = 0;
    colors.lenght = videos.length;

    for(let videoIndex = 0; videoIndex <= videos.length; videoIndex++){
        colors[videoIndex] = firstColor + (int(255/28));
        firstColor = colors[videoIndex]
    }
    
    playerKeys = playerSequence.split("");

    //Configuracion de la grilla
    columns = 7;
    rows = 4;
    columnsCounter = 0;
    rowsCounter = 0;

    videoWidth = windowWidth/columns;
    videoHeight = windowHeight/rows;

    createCanvas(windowWidth, windowHeight)

    //inicialmente escondemos todos los videos. 
    for(let videoIndex = 0; videoIndex < videos.length; videoIndex++){
        videos[videoIndex].hide();

        //inicializamos las variables que indican si los videos estan siendo reproducidos en 0 (es decir, estan todos parados)
        isPlaying[videoIndex]=0;
    }           
}


//La función draw se ejecuta en loop, es decir que cada vez que llega a la última linea vuelve a ejecutarse desde la primera. En ella escribimos todo el código relacionado con la evolución en el tiempo de nuestro programa. Se ejecuta en Frames por segundo, como los videos. En cada frame se ejecuta una vez todo el còdigo que esta dentro.


function draw(){
    for(let videoIndex = 0; videoIndex < videos.length; videoIndex++){

        //Visualizamos la grilla con rectangulos y texto, identificamos que video va a aparecer en cada espacio
        fill(0, colors[videoIndex], 80);
        rect(columnsCounter*videoWidth, rowsCounter*videoHeight, videoWidth, videoHeight);
        
        textSize(32);
        fill (255)
        text(playerKeys[videoIndex], (columnsCounter*videoWidth)+videoWidth/2, (rowsCounter*videoHeight)+videoHeight/2);

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
    // damos play a todos los videos con un click
    // for(let videoIndex = 0; videoIndex < videos.length; videoIndex++){
    //     videos[videoIndex].loop()
    // }

    // Estoy guardando las últimas coordenadas donde hice click
  }


  function keyTyped(){
    for(let keyIndex = 0; keyIndex < playerKeys.length; keyIndex++){
        if (key === playerKeys[keyIndex]){
            if(isPlaying[keyIndex] === 0){
                videos[keyIndex].loop();
                isPlaying[keyIndex] = 1;

            } else if(isPlaying[keyIndex] === 1){
                videos[keyIndex].pause();
                isPlaying[keyIndex] = 0;
            }
        }
    }
  }

