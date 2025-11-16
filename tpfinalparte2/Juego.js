class Juego {
  constructor() {
    this.jugador = new Jugador();
    this.cantObstaculos = 100;
    this.obstaculos = [];
    this.estado = "instrucciones";
    this.tiempoInicio = 0;
    this.duracionJuego = 15000;
  }
  iniciar() {
    for (let i=0; i<this.cantObstaculos; i++) {
      let posX = random(120, 480);
      let posY = random(-100, -10000);
      this.obstaculos [i] = new Duende(posX, posY);
    }
  }
  reiniciar() {
    this.jugador.vidas = 3;
    this.jugador.soldadito.posX = width/2;
    this.jugador.soldadito.posY = 300;
    this.estado = "instrucciones";
    this.tiempoInicio = 0;
    this.duracionJuego = 15000;
  }


  dibujar() {

    if (this.estado === "instrucciones") {
      fill(255);
      textAlign(CENTER, CENTER);
      textSize(30);
      text("¡INSTRUCCIONES!", width / 2, height / 2 - 100);
      textSize(20);
      text("Usa las flechas para moverte.", width / 2, height / 2 - 40);
      text("Esquiva los troncos para sumar puntos.", width / 2, height / 2 - 10);
      text("Tienes 3 vidas. ¡Suerte!", width / 2, height / 2 + 20);

      textSize(22);
      fill(150, 255, 150);
      text("Haz clic para comenzar", width / 2, height / 2 + 80);
    } else if (this.estado === "jugando") {
      this.dibujarRio();
      this.dibujarObstaculos();
      this.jugador.dibujar();
      this.dibujarDuende();
      this.dibujarHud();
      this.controlColision();

      let tiempoTranscurrido = millis() - this.tiempoInicio;
      if (this.jugador.vidas <= 0) {
        this.estado = "perdiste";
      }
      if (tiempoTranscurrido >= this.duracionJuego) {
        this.estado = "ganaste";
      }
    } else if (this.estado === "perdiste") {
      //pantalla de "Perdiste"
      fill(255, 0, 0);
      textAlign(CENTER, CENTER);
      textSize(50);
      text("¡PERDISTE!", width / 2, height / 2 - 40);
      textSize(20);
      text("Haz clic para continuar la historia...", width / 2, height / 2 + 20);
    } else if (this.estado === "ganaste") {
      fill(0, 255, 0);
      textAlign(CENTER, CENTER);
      textSize(50);
      text("¡GANASTE!", width / 2, height / 2 - 40);
      textSize(20);
      text("Haz clic para continuar la historia...", width / 2, height / 2 + 20);
    }
  }


  dibujarObstaculos() {
    for (let i=0; i<this.cantObstaculos; i++) {
      this.obstaculos [i].dibujar();
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
    for (let i=0; i<this.cantObstaculos; i++) {
      if (dist(this.obstaculos [i].posX, this.obstaculos [i].posY, this.jugador.soldadito.posX, this.jugador.soldadito.posY) < 20 ) {
        this.jugador.quitarVida();
        this.iniciar();
      }
    }
  }
}
