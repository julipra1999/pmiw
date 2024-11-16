class Boton {
  constructor(texto, posX, posY, ancho, alto, siguientePantalla) {
    this.alto = alto;
    this.ancho = ancho;
    this.posX = posX;
    this.posY = posY;
    this.texto = texto;
    this.siguientePantalla = siguientePantalla;
  }

  dibujar() {
    fill(200, 200, 255);
    rect(this.posX, this.posY, this.ancho, this.alto, 10);
    fill(0);
    textAlign(CENTER, CENTER);
    textSize(16);
    text(this.texto, this.posX + this.ancho / 2, this.posY + this.alto / 2);
  }
  botonPresionado() {
    if (mouseX > this.posX && mouseX < this.posX + this.ancho &&
      mouseY > this.posY && mouseY < this.posY + this.alto) {
      return true;
    }
    return false;
  }
}
