class ProgramaDeFlujoGeneral {
  constructor() {
    this.pantallaDeInicio = new PantallaDeInicio();
    this.pantallaInstruccion = new PantallaInstruccion();
    this.pantallaCredito = new PantallaCredito();
    this.juego = null;
    this.pantallaActiva = 0;
  }

  actualizarEstadoFinal(estado) {
    this.pantallaCredito.mostrarMensajeFinal(estado);
    this.cambioDePantalla("creditos");
  }

  cambioDePantalla(nombreDePantalla) {
  if(nombreDePantalla === "inicio"){
    this.pantallaActiva = 0;
    this.juego = null;
  }else if(nombreDePantalla === "instrucciones"){
    this.pantallaActiva = 1;
  }else if(nombreDePantalla === "juego"){
    if(this.pantallaActiva !== 2){
      if(!this.juego){
        this.juego = new Juego(5); // Asegurarse de que el juego solo se cree una vez
      }
      this.juego.iniciarJuego();  // Inicia el juego correctamente
    }
    this.pantallaActiva = 2;
  }else if(nombreDePantalla === "creditos"){
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
    if (this.pantallaActiva === 0) {
      if (this.pantallaDeInicio.botonInicio.botonPresionado()) {
        this.cambioDePantalla("juego");
      } else if (this.pantallaDeInicio.botonInstrucciones.botonPresionado()) {
        this.cambioDePantalla("instrucciones");
      } else if (this.pantallaDeInicio.botonCreditos.botonPresionado()) {
        this.cambioDePantalla("creditos");
      }
    }

    if (this.pantallaActiva === 1) {
      if (this.pantallaInstruccion.boton.botonPresionado()) {
        this.cambioDePantalla("inicio");
      }
    }

    if (this.pantallaActiva === 3) {
      if (this.pantallaCredito.boton.botonPresionado()) {
        this.cambioDePantalla("inicio");
      }
    }
  }
}
