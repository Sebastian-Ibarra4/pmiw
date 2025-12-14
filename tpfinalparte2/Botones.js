class Botones {
  constructor() {
    this.anchoBoton = 120;
    this.altoBoton = 50;
    this.x = (width - this.anchoBoton) / 2;
    this.y = height - this.altoBoton - 60;
  }


  dibujarBotonJugar() {
    fill(139, 0, 0);
    rect(this.x, this.y, this.anchoBoton, this.altoBoton, 10); // botón con bordes redondeados

    fill(255);
    textSize(20);
    textAlign(CENTER, CENTER);
    textFont(fuente);
    text("JUGAR", this.x + this.anchoBoton/2, this.y + this.altoBoton/2 - 5);
  }

  dibujarBotonReiniciar() {
    fill(139, 0, 0);
    rect(this.x, this.y, this.anchoBoton, this.altoBoton, 10); // botón con bordes redondeados

    fill(255);
    textSize(20);
    textAlign(CENTER, CENTER);
    textFont(fuente);
    text("REINICIAR", this.x + this.anchoBoton/2, this.y + this.altoBoton/2 - 5);
  }
}
