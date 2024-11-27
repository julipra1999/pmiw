class PantallaInstruccion {
  constructor() {
    this.boton = new Boton("Volver al Inicio", 200, 400, 200, 50, "inicio");
  }
  dibujar() {
    background(255, 0, 0);
    fill(0);
    textSize(20);
    textAlign(CENTER);
    text("Instrucciones", width / 2, height / 2 - 50);
    text("Mové el bote con las flechas del teclado", width/2, height/2);
    text("Dispará conENTER para eliminar los barcos ", width/2, height/2+20);
    text("Cuidado de no chocar con los barcos o vas a perder!", width/2, height/2+40);

    this.boton.dibujar();
  }
}
