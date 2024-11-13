class Enemigo {
  constructor(posX,posY) {
    this.vidas = 1;
    this.posX = posX;
    this.posY = posY;
    this.ancho = 180;
    this.alto = 200;
  }

  dibujar() {       
    if (this.estaVivo) {
      image(imagenesEnemigos[0], this.posX, this.posY, this.ancho, this.alto);
    }
  }
  /*dividido() {
    this.estaVivo = 1;
  }*/
  matar() {
    this.estaVivo = 0;
  }
   estaVivo(){
    return this.vidas > 0;
  }
}
