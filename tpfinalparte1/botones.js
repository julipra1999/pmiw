function botonesDecisivos() {
  if (estado == 4 ||  estado == 9 ||  estado == 16 || estado == 19) {
    fill(255, 0, 0);
    rect(110, 400, 100, 50, 50);
    fill(0, 0, 255);
    rect(430, 400, 100, 50, 50);
    noStroke();
    push();
    textSize(30);
    fill(255);
    text("Si", 145, 430 );
    text("No", 465, 430);
    pop();
  }
}
function botonReinicio() {
  if (estado == 22 ||estado == 23) {
    fill(255, 0, 0);
    rect(270, 400, 100, 50, 50);
    fill(255);
    textSize(20);
    text('reiniciar', 285, 430);
  }
}

function botonSiguiente() {
  if (estado == 1 ||  estado == 2 ||  estado == 3 || estado == 5
    ||  estado == 6 ||  estado == 7 ||  estado == 8 ||  estado == 10
    ||  estado == 11 ||  estado == 12 ||  estado == 13||  estado == 14
    ||  estado == 15 || estado == 17 ||  estado == 18 ||  estado == 20||  estado == 21) {
    fill(255, 0, 0);
    rect(270, 400, 100, 50, 50);
    push();
    fill(255);
    textSize(17);
    text('Siguiente', 290, 430);
    pop();
  }
  if(estado == 0){
  fill(255, 0, 0);
    noStroke();
    rect(160, 400, 100, 50, 50);
    rect(360, 400, 100, 50, 50);
    push();
    fill(255);
    textSize(17);
    text('Créditos', 180, 430);
    text('Comenzar', 375, 430);
    pop();
   
  }
}
