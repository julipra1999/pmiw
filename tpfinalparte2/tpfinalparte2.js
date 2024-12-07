// Guillermo Franco 91308/0
// Julieta Pratti 83917/3
//comsión 5

let miJuego;
let imagenJugador, imagenFondo, imagenEnemigo, imagenInicio, cancionBase;

function preload() {
  cancionBase = loadSound('data/CancionBase.mp3');
  imagenJugador = loadImage('data/jugador.png');
  imagenFondo = loadImage('data/fondo.png');
  imagenEnemigo = loadImage('data/enemigo.png');
  imagenInicio = loadImage('data/inicio.png');
}

function setup() {
  createCanvas(640, 480);
  miJuego = new ProgramaDeFlujoGeneral();
  imageMode(CENTER);
}

function draw() {
  rectMode(CORNER);
  miJuego.dibujar(); 
  if (keyIsPressed) {
    if (miJuego.juego) {  
      miJuego.juego.teclaPresionada(); 
    }
  }
}

function mousePressed() {
 miJuego.mousePresionado();
}
