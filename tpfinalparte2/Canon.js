class Canon{
  constructor(posX, posY){
    this.posX = posX;
    this.posY = posY;
    this.cantBalas = [];
    this.balaDisparada = false;
  }

  dibujar(){
    fill(255);
    rectMode(CENTER);
    rect(this.posX, this.posY, 10, 10);
    for (let i = this.cantBalas.length - 1; i >= 0; i--) {
      let bala = this.cantBalas[i];
      bala.mover();
      bala.dibujar();
     if (bala.posY < 0 || bala.posY > height) {
        this.cantBalas.splice(i, 1);  
      }
    }
  }
  
   disparo(){  
    if (keyIsDown(ENTER) && this.cantBalas.length === 0) {
      this.cantBalas.push(new Bala(this.posX, this.posY));
      this.balaDisparada = true;
    }
  }
}
