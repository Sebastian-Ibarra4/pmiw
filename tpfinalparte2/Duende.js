class Duende {
  constructor(posX, posY) {
    this.color= color(255, 0, 0);
    this.posX = posX;
    this.posY = posY;
    this.velocidad = 4;
  }

  dibujar() {
    fill(this.color);
    image(texturaTroncos,this.posX, this.posY, 30, 50);
    noStroke();
    
    
    
    this.movimientoObjeto();
  }

  movimientoObjeto() {
    this.posY = this.posY + this.velocidad;
  }
}
