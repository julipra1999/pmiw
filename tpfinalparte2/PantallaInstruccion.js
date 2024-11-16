class PantallaInstruccion {
  constructor() {
    this.boton = new Boton("Volver al Inicio", 200, 200, 200, 50, "inicio");
  }
  dibujar() {
    background(255, 0, 0);
    fill(0);
    textSize(20);
    textAlign(CENTER);
    text("Instrucciones", width / 2, height / 2 - 50);
    this.boton.dibujar();
  }
}
