class Canon {
  constructor(posX, posY) {
    this.posX = posX;
    this.posY = posY;
    // this.bala = new Bala(this.posX, this.posY);
    this.cantBalas = [];
    // this.balaDisparada = false;
  }

  dibujar() {
    fill(255);
    rectMode(CENTER);
    rect(this.posX, this.posY, 10, 10);

    /*if(this.balaDisparada == true){
     this.bala.posY -= 5;
     }else{
     this.bala.posY = this.posY;
     this.bala.posX = this.posX;
     }
     this.bala.dibujar();*/
    for (let i = this.cantBalas.length - 1; i >= 0; i--) {
      let bala = this.cantBalas[i];
      bala.mover();
      bala.dibujar();
      if (bala.posY < 0) {
        this.cantBalas.splice(i, 1);
      }
    }
  }
  /*teclaPresionada() {
   if (keyCode === ENTER) {
   this.balaDisparada = true;
   }
   }*/
  disparo() {
    if (keyIsDown(ENTER)) {
      this.cantBalas.push(new Bala(this.posX, this.posY));
    }
  }
}
