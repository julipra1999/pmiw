// Guillermo Franco 91308/0
// Julieta Pratti 83917/3
//comsión 5
//https://youtu.be/eG13OPC48kM
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
  //imageMode(CENTER);
  rectMode(CORNER);
  miJuego.dibujar(); 
  if (keyIsPressed) {
    if (miJuego.juego) {  
      miJuego.juego.teclaPresionada(); 
    }
  }
}

function mousePressed() {
  if (miJuego.pantallaActiva === 0) {
    if (miJuego.pantallaDeInicio.botonInicio.botonPresionado()) {
      miJuego.cambioDePantalla("juego");
    } else if (miJuego.pantallaDeInicio.botonInstrucciones.botonPresionado()) {
      miJuego.cambioDePantalla("instrucciones");
    } else if (miJuego.pantallaDeInicio.botonCreditos.botonPresionado()) {
      miJuego.cambioDePantalla("creditos");
    }
  }

  if (miJuego.pantallaActiva === 1) {
    if (miJuego.pantallaInstruccion.boton.botonPresionado()) {
      miJuego.cambioDePantalla("inicio");
    }
  }

  if (miJuego.pantallaActiva === 3) {
    if (miJuego.pantallaCredito.boton.botonPresionado()) {
      miJuego.cambioDePantalla("inicio");
    }
  }
}
