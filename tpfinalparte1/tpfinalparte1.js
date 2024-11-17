// Guillermo Franco 91308/0
// Julieta Pratti 83917/3
//comsión 5
let pantallas = [24];
let estado = 0;
let cancionBase;
let font;
let misTextos;


function preload() {
  for (let i = 0; i < 24; i++) {
    pantallas[i] = loadImage('data/' + i + '.png');
  }
  font = loadFont('data/angrybirds-regular.ttf')
    soundFormats('mp3');
  cancionBase = loadSound('data/CancionBase.mp3')
    misTextos = loadStrings('data/aventura.txt');
  print(misTextos);
}

function setup() {
  createCanvas(640, 480);
  textFont(font);
}


function draw() {
  background(0);
  console.log(mouseX, mouseY, estado);
  image(pantallas[estado], 0, 0, width, height);
  // textosDePantallas();
  botonReinicio();
  botonSiguiente();
  botonesDecisivos();
  if (estado < misTextos.length) {
    fill(255);
    textSize(20);
    if (estado > 0 && estado < 22) {
      fill(255, 0, 0, 200);
      noStroke();
      rect(45, 55, width - 100, 40);
      fill(255);
    }
    text(misTextos[estado], 50, 80);
  }
  if (estado == 23) {
    push();
    fill(255);
    textAlign(CENTER);
    textSize(30);
    text ("Créditos", width/2, 220);
    textSize(20);
    text("Julieta Pratti legajo 83917/3", width/2, height/2+10);
    text("Guillermo Franco legajo 91308/0", width/2, height/2+50 );
    text("Comision 5 - Trabajo Práctico Final Parte 1", width/2, height/2+90 );
    pop();
  }
}
function mousePressed() {
  manejoDePantallas();
}

function keyPressed() {
  if (cancionBase.isPlaying()) {
    cancionBase.stop();
  } else {
    cancionBase.play();
  }
}
