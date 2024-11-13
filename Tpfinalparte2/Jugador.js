class Jugador {
  constructor(posX, posY) {
    this.vida = 1;
    this.posX = posX;
    this.posY = posY;
    this.alto = 40;
    this.ancho = 80;
    // this.balaDisparada = false;
    this.canon = new Canon(this.posX, this.posY);
  }
  dibujar() {
    imageMode(CENTER);
    //image(imagenesJugador[0], this.posX, this.posY, this.ancho-40, this.alto+40);
    if (keyCode === RIGHT_ARROW) {
      image(imagenesJugador[3], this.posX, this.posY, this.ancho, this.alto);
    } else if (keyCode === LEFT_ARROW) {
      image(imagenesJugador[1], this.posX, this.posY, this.ancho, this.alto);
    } else if (keyCode === UP_ARROW) {
      image(imagenesJugador[0], this.posX, this.posY, this.ancho-40, this.alto+40);
    } else if (keyCode === DOWN_ARROW) {
      image(imagenesJugador[2], this.posX, this.posY, this.ancho-40, this.alto+40);
    }
    this.canon.dibujar();
  }

  /*moverDerecha() {
   this.posX = this.posX += 1.5;
   }
   
   moverIzquierda() {
   this.posX = this.posX -= 1.5;
   }
   
   moverArriba() {
   this.posY = this.posY -= 1.5;
   }
   
   moverAbajo() {
   this.posY = this.posY += 1.5;
   }*/
  /*disparo() {
   if (keyIsDown(ENTER)) {
   this.balaDisparada = true;
   }
   }*/


  mover() {
    if (keyCode === RIGHT_ARROW) {
      this.posX +=1.5;
    } else if (keyCode === LEFT_ARROW) {
      this.posX -=1.5;
    } else if (keyCode === UP_ARROW) {
      this.posY -=1.5;
    } else if (keyCode === DOWN_ARROW) {
      this.posY +=1.5;
    }
    this.canon.posX = this.posX
      this.canon.posY = this.posY
  }
  haDisparado() {
    return this.canon.balaDisparada;
  }
  teclaPresionada() {
    this.mover();
    this.canon.disparo();
  }
}
