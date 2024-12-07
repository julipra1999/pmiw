class Jugador {
  constructor(posX, posY) {
    this.posX = posX;
    this.posY = posY;
    this.alto = 70;
    this.ancho = 45;
    this.canon = new Canon(this.posX, this.posY);
    this.vidas = 3;
  }

  dibujar() {
    imageMode(CENTER);
    image(imagenJugador, this.posX, this.posY, this.ancho, this.alto);
    this.canon.dibujar();
    this.mostrarVidas();
  }
  perderVida() {
    this.vidas -= 1;
    if (this.vidas <= 0) {
      this.vidas = 0;
    }
  }

  mostrarVidas() {
    fill(255, 0, 0);
    for (let i = 0; i < this.vidas; i++) {
      ellipse(30 + i * 20, 30, 15);
    }
  }
  mover() {
    if (keyIsDown(RIGHT_ARROW)) {
      this.posX += 2;
    } else if (keyIsDown(LEFT_ARROW)) {
      this.posX -= 2;
    } else if (keyIsDown(UP_ARROW)) {
      this.posY -= 2;
    } else if (keyIsDown(DOWN_ARROW)) {
      this.posY += 2;
    }
    this.canon.posX = this.posX;
    this.canon.posY = this.posY;
  }
  obtenerCajaDeColision() {
    let ajustarMargenX = this.ancho * 0.2; 
    let ajustarMargenY = this.alto * 0.2;
    return {
    x:
      this.posX - this.ancho/2,
      y:
      this.posY - this.alto/2,
      width:
      this.ancho,
      height:
      this.alto,
    };
  }
}
