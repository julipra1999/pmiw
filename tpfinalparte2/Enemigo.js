class Enemigo{
  constructor(posX, posY){
    this.vivo = true;
    this.vidas = 1;
    this.posX = posX; 
    this.posY = posY; 
    this.ancho = 180;  
    this.alto = 100;   
    this.velocidad = 0.5; 
  }

  dibujar(){
  if(this.estaVivo()){
    image(imagenEnemigo, this.posX, this.posY, this.ancho, this.alto);
  }
}

  matar(){
    this.vivo = false;
  }

  estaVivo(){
    return this.vivo;
  }


  obtenerCajaDeColision(){
    let cajaDeColisionX = this.posX;
    let cajaDeColisionY = this.posY;
    return { 
      x: cajaDeColisionX, 
      y: cajaDeColisionY, 
      width: this.ancho, 
      height: this.alto 
    };
  }

  mover(jugador){
    if(this.posX < jugador.posX){
      this.posX += this.velocidad;
    }else if(this.posX > jugador.posX){
      this.posX -= this.velocidad;
    }

    if(this.posY < jugador.posY){
      this.posY += this.velocidad;
    }else if(this.posY > jugador.posY){
      this.posY -= this.velocidad;
    }
  }
}
