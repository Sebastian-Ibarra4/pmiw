class Jugador {
  constructor() {
    this.vidas = 3;
    this.velocidad = 10;
    this.color= color(255, 100, 50);
    this.posX = width/2;
    this.posY = 300;
    this.anchoJugador = 90;
    this.altoJugador = 110;
  }

  dibujar() {
    fill(this.color);
    image(soldado, this.posX, this.posY, 90, 110);
  }

  quitarVida() {
    this.vidas = this.vidas -1;
  }

  teclaPresionada() {
    if (keyCode === LEFT_ARROW) {
      this.posX = this.posX - 30;
    } else if (keyCode === RIGHT_ARROW) {
      this.posX = this.posX + 30;
    }
  }
}
