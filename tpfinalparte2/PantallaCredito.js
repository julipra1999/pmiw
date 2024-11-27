class PantallaCredito {
  constructor() {
    this.boton = new Boton("Volver al Inicio", 200, 400, 200, 50, "inicio");
    this.mensajeFinal = "";
  }
  mostrarMensajeFinal(mensaje) {
    this.mensajeFinal = mensaje;
  }
  dibujar() {
    background(255, 0, 150);

    fill(0);
    textSize(20);
    textAlign(CENTER);
    text("Créditos", width/2, 220);
    text("Julieta Pratti legajo 83917/3", width/2, height/2+10);
    text("Guillermo Franco legajo 91308/0", width/2, height/2+50 );
    text("Comision 5 - Trabajo Práctico Final Parte 1", width/2, height/2+90 );
    text(this.mensajeFinal, width/2, height/2);
    this.boton.dibujar();
  }
}
