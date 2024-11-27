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
    noStroke();
    fill(230, 200, 30);
    rect(this.posX, this.posY, this.ancho, this.alto, 10);
    fill(255);
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
