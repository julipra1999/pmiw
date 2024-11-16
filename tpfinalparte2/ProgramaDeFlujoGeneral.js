class ProgramaDeFlujoGeneral {
  constructor() {
    this.pantallaDeInicio = new PantallaDeInicio();
    this.pantallaInstruccion = new PantallaInstruccion();
    this.pantallaCredito = new PantallaCredito();
    this.juego = new Juego(5);
    this.pantallaActiva = 0;
  }

  cambioDePantalla(nombreDePantalla) {
    if (nombreDePantalla === "inicio") {
      this.pantallaActiva = 0;
    } else if (nombreDePantalla === "instrucciones") {
      this.pantallaActiva = 1;
    } else if (nombreDePantalla === "juego") {
      this.pantallaActiva = 2;
    } else if (nombreDePantalla === "creditos") {
      this.pantallaActiva = 3;
    }
  }
  dibujar() {
    if (this.pantallaActiva === 0) {
      this.pantallaDeInicio.dibujar();
    } else if (this.pantallaActiva === 1) {
      this.pantallaInstruccion.dibujar();
    } else if (this.pantallaActiva === 2) {
      this.juego.dibujar();
    } else if (this.pantallaActiva === 3) {
      this.pantallaCredito.dibujar();
    }
  }
  /*botonClickeado() {
    if (this.botonInicio.botonPresionado()) {
      this.cambioDePantalla("juego");
    } else if (this.botonInstrucciones.botonPresionado()) {
      this.cambioDePantalla("instrucciones");
    } else if (this.botonCreditos.botonPresionado()) {
      this.cambioDePantalla("creditos");
    }
  }*/
}
