class Principal {
  constructor() {
  }

  ManejoPantallas() {
    if (indiceActual === 0) {
      image(imagenes[indiceActual], 0, 0);
      botones.dibujarBotonJugar();
      fill(255);
    } else if (indiceActual === 1) { // pantalla instrucciones
      background(185, 156, 107);
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
    } else if (indiceActual === 2) { // pantalla juego
      juego.dibujar();
    } else if (indiceActual === 3) { // pantalla ganaste
      image(imagenes[19], 0, 0);
      fill(0, 255, 0);
      textAlign(CENTER, CENTER);
      textSize(50);
      text("¡GANASTE!", width / 2, height / 2 - 40);
      textSize(20);
      text("Haz clic para reiniciar...", width / 2, height / 2 + 20);
      // botones.dibujarBotonReiniciar();
    } else if (indiceActual === 4) { // pantalla perdiste
      image(imagenes[22], 0, 0);
      fill(255, 0, 0);
      textAlign(CENTER, CENTER);
      textSize(50);
      text("¡PERDISTE!", width / 2, height / 2 - 40);
      textSize(20);
      text("Haz clic para reiniciar...", width / 2, height / 2 + 20);
      // botones.dibujarBotonReiniciar();
    }
  }

  ClickPantalla () {

    if (indiceActual === 0) {
      indiceActual = 1;
      juego.reiniciar();
      musica.play();
    } else if (indiceActual === 1) {
      indiceActual = 2;
      this.juego.tiempoInicio = millis();
      juego.iniciar();
    } else if (indiceActual === 3) {
      indiceActual = 0;
      juego.reiniciar();
    } else if (indiceActual === 4) {
      indiceActual = 0;
      juego.reiniciar();
    }
  }
}
