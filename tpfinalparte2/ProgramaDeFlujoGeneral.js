class ProgramaDeFlujoGeneral {
  constructor() {
    this.pantallaDeInicio = new PantallaDeInicio();
    this.pantallaInstruccion = new PantallaInstruccion();
    this.pantallaCredito = new PantallaCredito();
    this.juego = null;
    this.pantallaActiva = 0;
  }

  cambioDePantalla(nombreDePantalla) {
    if (nombreDePantalla === "inicio") {
      this.pantallaActiva = 0;
      this.juego = null;
    } else if (nombreDePantalla === "instrucciones") {
      this.pantallaActiva = 1;
    } else if (nombreDePantalla === "juego") {
      if (this.pantallaActiva !== 2) {
        this.juego = this.juego || new Juego(5);
        this.juego.reiniciar();
      }
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
      if (this.juego) {
        this.juego.dibujar();
      }
    } else if (this.pantallaActiva === 3) {
      this.pantallaCredito.dibujar();
    }
  }
  mousePresionado() {

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
}
