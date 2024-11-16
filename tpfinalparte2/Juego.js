class Juego {
  constructor(cantidadDeEnemigos) {
    this.cantidadDeEnemigos = cantidadDeEnemigos;
    this.crearEnemigos();
    this.crearJugador();
  }

  dibujar() {
    image(imagenFondo, width / 2, height / 2, width, height);

    for (let i = 0; i < this.cantidadDeEnemigos; i++) {
      this.enemigos[i].mover(this.jugador);
      this.enemigos[i].dibujar();
    }

    this.jugador.dibujar();
    this.colisionDeBalaConEnemigo();
  }

  crearJugador() {
    this.jugador = new Jugador(width/2, height/2);
  }

  teclaPresionada() {
    this.jugador.mover();
    this.jugador.canon.disparo();
  }

  crearEnemigos() {
    this.enemigos = [];
    for (let i = 0; i < this.cantidadDeEnemigos; i++) {
      this.enemigos[i] = new Enemigo(i * 80 + 50, 0);
    }
  }

  colisionDeBalaConEnemigo() {
    for (let i = 0; i < this.cantidadDeEnemigos; i++) {
      let enemigo = this.enemigos[i];
      if (enemigo.estaVivo()) {
        let cajaDeColision = enemigo.obtenerCajaDeColision();
        for (let j = 0; j < this.jugador.canon.cantBalas.length; j++) {
          let bala = this.jugador.canon.cantBalas[j];
          if (bala.posX > cajaDeColision.x && bala.posX < cajaDeColision.x + cajaDeColision.width &&
            bala.posY > cajaDeColision.y && bala.posY < cajaDeColision.y + cajaDeColision.height) {
            console.log("balazo");
            enemigo.matar();
            this.jugador.canon.cantBalas.splice(j, 1);
            break;
          }
        }
      }
    }
  }
}
