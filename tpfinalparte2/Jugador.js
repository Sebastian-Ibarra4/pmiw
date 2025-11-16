class Jugador {
  constructor() {
    this.vidas = 3;
    this.soldadito = new Soldadito();
  }

  dibujar() {
    this.soldadito.dibujar();
  }

  quitarVida() {
    this.vidas = this.vidas -1;
  }

  teclaPresionada() {
    this.soldadito.teclaPresionada();
  }
}
