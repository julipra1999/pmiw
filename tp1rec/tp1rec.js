let OpArt;
let circulos = 90;
let radioGrande, radioChico;
let ajusteAngulo = 0;
let mover = false;
let distanciaInicial;
let aumento = 1.0;

function preload() {
  OpArt = loadImage('assets/opart.jpeg');
}
function setup() {
  createCanvas(800, 400);
  radioGrande = width*0.2;
  radioChico = radioGrande/4;
  distanciaInicial = dist(mouseX, mouseY, 600, 200); //guarda la distancia inicial para reiniciar
}

function draw() {
  background(255);
  image(OpArt, 0, 0, 400, 400);
  ellipse(600, 200, radioGrande * 2 * aumento, radioGrande * 2 * aumento); // aumento circulo grande
  mover = verificarMouse();
  dibujarCirculosEnRadios(color(255, 100, 50), color(0));
  fill(255);
  ellipse(600, 200, 40 * aumento, 40 * aumento); // aumento circulo del medio
 if (keyIsPressed && key === 'r') {//reinicio
    reiniciarPrograma();
  }
}
function verificarMouse() {//verificacion del mouse
  let distanciaMouse = dist(mouseX, mouseY, 600, 200);
  if (distanciaMouse < radioGrande * aumento / 2) {
    ajusteAngulo += 0.01;
    return true;
  } else {
    return false;
  }
}
function dibujarCirculosEnRadios(circuloNaranja, circuloNegro) {
  for (let j = 1; j <= 4; j++) {
    for (let i = 0; i < circulos; i++) {//calculo de los radios para dibujar los circulos chicos
      let angulo = TWO_PI / circulos * i + (mover ? (j % 2 === 0 ? ajusteAngulo : -ajusteAngulo) : 0);

      push();
      translate(600, 200);
      rotate(angulo);
      translate((radioGrande - j * radioChico) * aumento, 0);
      let borde = 1.5 / j; // se ajusta el grosor del borde según el tamaño de los círculos
      strokeWeight(borde);
      stroke(255);
      fill(i % 2 === 0 ? circuloNaranja : circuloNegro);
      ellipse(0, 0, radioChico * 2 * aumento, radioChico * aumento);
      pop();
    }
  }
}
function reiniciarPrograma() {
  ajusteAngulo = 0;
  aumento = 1.0;
}
function mousePressed() {
  if (verificarMouse()) {
    aumentarEscala(1.1); //aumenta el tamaño al hacer clic
  }
}
function aumentarEscala(incremento) {//funcion propia con parametro que retorna valor
  aumento *= incremento;
  return aumento;
}
