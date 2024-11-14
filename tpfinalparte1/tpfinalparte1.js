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
    text(misTextos[estado], 50, 180);
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
  if (estado == 0) {
    if (mouseX > 360 && mouseX < 460 && mouseY > 400 && mouseY < 450) {
      estado++;
    } else if (mouseX > 160 && mouseX < 260 && mouseY > 400 && mouseY < 450) {
      estado= 23;
    }
  }
  if (mouseX > 270 && mouseX < 370 && mouseY > 400 && mouseY < 450) {
    if (estado ==22) {
      estado = 0;
    }
  }
  if ( estado == 1 ||  estado == 2 ||  estado == 3
    ||  estado == 6 ||  estado == 7 ||  estado == 8 ||  estado == 10
    ||  estado == 11 ||  estado == 12||  estado == 13 || estado == 14 ||  estado == 15
    || estado == 17 ||  estado == 18 || estado == 20  || estado == 21|| estado == 22) {
    if (mouseX > 270 && mouseX < 370 && mouseY > 400 && mouseY < 450) {
      if (estado==13) {
        estado=22;
      }
    }
    if (mouseX > 270 && mouseX < 370 && mouseY > 400 && mouseY < 450) {
      if (estado==17) {
        estado=22;
      }
    }
    if (mouseX > 270 && mouseX < 370 && mouseY > 400 && mouseY < 450) {
      estado++;
    }
  } else if (estado == 4 ||  estado == 9 ||  estado == 16 || estado == 19) {
    if (mouseX>110&&mouseX<210&&mouseY>335&&mouseY<385) {

      if (estado == 4 ) {
        estado = 6;
      } else if ( estado == 9) {
        estado = 14;
      } else if ( estado == 16) {
        estado = 17;
      } else if ( estado == 19) {
        estado = 21;
      }
    } else if (mouseX>430&&mouseX<530&&mouseY>335&&mouseY<385) {
      if (estado==16) {
        estado = 18;
      } else {
        estado++;
      }
    }
  } else if (estado == 5 &&  (mouseX > 270 && mouseX < 370 && mouseY > 400 && mouseY < 450)) {
    estado = 7;
  }
  if (estado >= 20) {
    if (mouseX > 270 && mouseX < 370 && mouseY > 400 && mouseY < 450) {
      estado = 22;
    }
  }
}



function keyPressed() {
  if (cancionBase.isPlaying()) {
    cancionBase.stop();
  } else {
    cancionBase.play();
  }
}
