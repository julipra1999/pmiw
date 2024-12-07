class PantallaDeInicio{
  constructor(){
    this.botonInicio = new Boton("Iniciar Juego", 200, 200, 200, 50, "juego");
    this.botonInstrucciones = new Boton("Instrucciones", 200, 270, 200, 50, "instrucciones");
    this.botonCreditos = new Boton("Créditos", 200, 340, 200, 50, "creditos");
  }

  dibujar(){
    image(imagenInicio, width / 2, height / 2, width, height);
    this.botonInicio.dibujar();
    this.botonInstrucciones.dibujar();
    this.botonCreditos.dibujar();
  }
}
