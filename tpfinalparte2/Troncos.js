class Troncos {
  constructor(posX, posY) {
    this.color= color(255, 0, 0);
    this.posX = posX;
    this.posY = posY;
    this.velocidad = 4;
    this.anchoTronco = 30;
    this.altoTronco = 50;
  }

  dibujar() {
    fill(this.color);
    image(texturaTroncos, this.posX, this.posY, 30, 50);
    noStroke();

    this.movimientoTronco();
  }

  movimientoTronco() {
    this.posY = this.posY + this.velocidad;
  }
}
