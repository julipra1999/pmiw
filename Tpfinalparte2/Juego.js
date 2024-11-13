class Juego {
  constructor(cantidadDeEnemigos) {
    this.cantidadDeEnemigos = cantidadDeEnemigos;
    this.crearEnemigos();
    this.crearJugador();
    this.pantalla = new Pantalla();  
  }

  dibujar() {
    this.pantalla.dibujar();
    image(imagenesFondos[0], width/2, height/2, width, height);   
    for (let i = 0; i < this.cantidadDeEnemigos; i++) {
      this.enemigos[i].dibujar();
    }
     this.jugador.dibujar();    
  }
   
  crearJugador() {
    this.jugador = new Jugador(width/2, height/2);
  }
  teclaPresionada() {
    this.jugador.teclaPresionada();
  }
  
   crearEnemigos() {
    this.enemigos = [];
    for (let i = 0; i < this.cantidadDeEnemigos; i++) {
      this.enemigos[i] = new Enemigo(i*80,10);
    }
  }
 
}
