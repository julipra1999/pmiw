class Juego {
  constructor(cantidadDeEnemigos) {
    this.cantidadDeEnemigos = cantidadDeEnemigos;
    //this.crearEnemigos();
    //this.crearJugador();
    this.musicaReproducida = false;
    this.estadoFinal = "";
    this.mostrarPantallaFinal = false;
    this.juegoIniciado = true;
  }

  dibujar() {
  if (!this.juegoIniciado) { 
    return; 
  }  
  image(imagenFondo, width / 2, height / 2, width, height);
  for (let i = 0; i < this.enemigos.length; i++) {
    this.enemigos[i].mover(this.jugador);
    this.enemigos[i].dibujar();
  }
  this.jugador.dibujar();
  this.jugador.mostrarVidas();
  this.colisionDeBalaConEnemigo();
  this.verificarColisionJugadorConEnemigo();
  if (this.jugador.vidas <= 0 && !this.estadoFinal) {
    this.estadoFinal = "Perdiste!";
    miJuego.actualizarEstadoFinal(this.estadoFinal);
  }
  if (this.verificarEnemigosRestantes() === false && !this.estadoFinal) {
    this.estadoFinal = "Ganaste!";
    miJuego.actualizarEstadoFinal(this.estadoFinal);
  }
}

  iniciarJuego() {
    this.estadoFinal = "";
    this.mostrarPantallaFinal = false;
    if (!this.jugador) {
      this.crearJugador();
    } else {
      this.jugador.reiniciar();
    }
    this.crearEnemigos();
    this.mostrarPantallaFinal = false;
  }

  textoGanaroPerder() {
    if (this.jugador.vidas <= 0) {
      this.estadoFinal = "Perdiste!";
    } else {
      this.estadoFinal = "Ganaste!";
    }
    miJuego.actualizarEstadoFinal(this.estadoFinal);
  }

  teclaPresionada() {
    this.jugador.mover();
    this.jugador.canon.disparo();
    this.controlarMusica();
  }

  controlarMusica() {
    if (key === ' ' && !this.musicaReproducida) {
      if (!cancionBase.isPlaying()) {
        cancionBase.play();
        this.musicaReproducida = true;
      }
    } else if (key === ' ' && this.musicaReproducida) {
      if (cancionBase.isPlaying()) {
        cancionBase.stop();
        this.musicaReproducida = false;
      }
    }
  }

  crearJugador() {
    if (!this.jugador) {
      this.jugador = new Jugador(width / 2, height - 50);
    }
  }

  crearEnemigos() {
    this.enemigos = [];
    for (let i = 0; i < this.cantidadDeEnemigos; i++) {
      let posX = random(0, width);
      let posY = random(-100, -50);
      this.enemigos[i] = new Enemigo(posX, posY);
    }
  }

  verificarEnemigosRestantes() {
    for (let i = 0; i < this.enemigos.length; i++) {
      if (this.enemigos[i].estaVivo()) {
        return true;
      }
    }
    return false;
  }
  verificarColisionJugadorConEnemigo() {
    for (let i = 0; i < this.enemigos.length; i++) {
      let enemigo = this.enemigos[i];
      if (enemigo.estaVivo()) {
        let cajaJugador = this.jugador.obtenerCajaDeColision();
        let cajaEnemigo = enemigo.obtenerCajaDeColision();
        if (cajaJugador.x < cajaEnemigo.x + cajaEnemigo.width &&
          cajaJugador.x + cajaJugador.width > cajaEnemigo.x &&
          cajaJugador.y < cajaEnemigo.y + cajaEnemigo.height &&
          cajaJugador.y + cajaJugador.height > cajaEnemigo.y) {
          this.jugador.perderVida();
          enemigo.matar();
          break;
        }
      }
    }
  }
  colisionDeBalaConEnemigo() {
    for (let i = 0; i < this.enemigos.length; i++) {
      let enemigo = this.enemigos[i];
      if (enemigo.estaVivo()) {
        let cajaDeColision = enemigo.obtenerCajaDeColision();
        for (let j = 0; j < this.jugador.canon.cantBalas.length; j++) {
          let bala = this.jugador.canon.cantBalas[j];
          if (bala.posX > cajaDeColision.x &&
            bala.posX < cajaDeColision.x + cajaDeColision.width &&
            bala.posY > cajaDeColision.y &&
            bala.posY < cajaDeColision.y + cajaDeColision.height) {
            enemigo.matar();
            let enemigosDivididos = enemigo.dividir();
            if (enemigosDivididos.length > 0) {
              this.enemigos = this.enemigos.concat(enemigosDivididos);
            }
            this.jugador.canon.cantBalas.splice(j, 1);
            break;
          }
        }
      }
    }
  }

  reiniciar() {
    this.crearEnemigos();
    this.crearJugador();
    this.musicaReproducida = false;
    cancionBase.stop();
    this.estadoFinal = " ";
    this.mostrarPantallaFinal = false;
  }
}
