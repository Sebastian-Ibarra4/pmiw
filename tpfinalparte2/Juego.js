class Juego {
  constructor() {
    this.jugador = new Jugador();
    this.cantTroncos = 100;
    this.troncos = [];
    this.tiempoInicio = 0;
    this.duracionJuego = 15000;
  }
  iniciar() {
    for (let i=0; i<this.cantTroncos; i++) {
      let posX = random(120, 480);
      let posY = random(-100, -10000);
      this.troncos [i] = new Troncos (posX, posY);
    }
  }
  reiniciar() {
    this.jugador.vidas = 3;
    this.jugador.posX = width/2;
    this.jugador.posY = 300;
    this.tiempoInicio = millis();
    this.duracionJuego = 15000;
  }

  verificarEstadoJuego() {
    let tiempoTranscurrido = millis() - this.tiempoInicio;
    if (tiempoTranscurrido >= this.duracionJuego) {
      indiceActual = 3;
      this.reiniciar();
    }
    if (this.jugador.vidas <= 0) {
      indiceActual = 4;
      this.reiniciar();
    }
  }

  dibujar() {
    this.dibujarRio();
    this.dibujarTroncos();
    this.dibujarDuende();
    this.jugador.dibujar();
    this.dibujarHud();
    this.controlColision();
    this.verificarEstadoJuego();
  }


  dibujarTroncos() {
    for (let i=0; i<this.cantTroncos; i++) {
      this.troncos [i].dibujar();
    }
  }

  dibujarDuende() {
    fill(0, 250, 30);
    image(duende, 500, 10, 140, 200);
  }

  dibujarRio() {
    let velocidad = 20;
    if (floor(frameCount / velocidad) % 2 == 0) {
      image(rio1, 0, 0, width, height);
    } else {
      image(rio2, 0, 0, width, height);
    }
  }

  dibujarHud() {
    fill(0);
    textSize(20);
    let tiempoTranscurrido = millis() - this.tiempoInicio;
    let tiempoRestante = (this.duracionJuego - tiempoTranscurrido) / 1000; //para pasar de milisegundos a segundos

    text("Vidas: " + this.jugador.vidas, 50, 450);
    text("Tiempo: " + ceil(max(0, tiempoRestante)), 570, 450);
  }

  teclaPresionada() {
    this.jugador.teclaPresionada();
  }

  controlColision() {
    for (let i=0; i<this.cantTroncos; i++) {
      if (dist(this.troncos [i].posX + 15 , this.troncos [i].posY + 25, this.jugador.posX + 45, this.jugador.posY + 55) < 40 ) { // anchoJugador = 90 / altoJugador = 110 / anchoTronco = 30 / altoTronco = 50
        this.jugador.quitarVida();
        this.iniciar();
      }
    }
  }
}
