class Enemigo {
  constructor(posX, posY) {
    this.vivo = true;
    this.vidas = 1;
    this.posX = posX;
    this.posY = posY;
    this.ancho = 180;
    this.alto = 100;
    this.velocidad = 0.5;
    this.divisiones = 0;
  }

  dibujar() {
    if (this.estaVivo()) {
      image(imagenEnemigo, this.posX, this.posY, this.ancho, this.alto);
    }
  }


  dividir() {

    if (this.divisiones < 1) {
      let nuevoEnemigo1 = new Enemigo(this.posX + random(-50, 50), this.posY + random(-50, 50));
      let nuevoEnemigo2 = new Enemigo(this.posX + random(-50, 50), this.posY + random(-50, 50));
      nuevoEnemigo1.divisiones = nuevoEnemigo2.divisiones = this.divisiones + 1;
      this.divisiones = 1;
      nuevoEnemigo1.ancho = this.ancho / 2;
      nuevoEnemigo1.alto = this.alto / 2;
      nuevoEnemigo2.ancho = this.ancho / 2;
      nuevoEnemigo2.alto = this.alto / 2;
      nuevoEnemigo1.divisiones = this.divisiones + 1;
      nuevoEnemigo2.divisiones = this.divisiones + 1;
      this.divisiones = 1;

      return [nuevoEnemigo1, nuevoEnemigo2];
    }
    return [];
  }

  matar() {
    this.vivo = false;
  }

  estaVivo() {
    return this.vivo;
  }

  obtenerCajaDeColision() {
    let ajustarMargenX = this.ancho * 0.15;
    let ajustarMargenY = this.alto * 0.15;
    return {
      x: this.posX-this.ancho/2,
      y: this.posY-this.alto/2,
      width: this.ancho,
      height: this.alto,
    };
  }

  mover(jugador) {
    if (this.posX < jugador.posX) {
      this.posX += this.velocidad;
    } else if (this.posX > jugador.posX) {
      this.posX -= this.velocidad;
    }

    if (this.posY < jugador.posY) {
      this.posY += this.velocidad;
    } else if (this.posY > jugador.posY) {
      this.posY -= this.velocidad;
    }
  }
}
