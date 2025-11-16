

function dibujarBotonFin() {
  let anchoBoton = 120;
  let altoBoton = 50;
  let x = (width - anchoBoton) / 2;
  let y = height - altoBoton - 60;

  fill(139, 0, 0);
  rect(x, y, anchoBoton, altoBoton, 10); // botón con bordes redondeados

  fill(255);
  textSize(20);
  textAlign(CENTER, CENTER);
  textFont(fuente);
  text("FIN", x + anchoBoton/2, y + altoBoton/2 - 5);
}

function dibujarBotonReiniciar() {
  let anchoBoton = 120;
  let altoBoton = 50;
  let x = (width - anchoBoton) / 2;
  let y = height - altoBoton - 60;

  fill(139, 0, 0);
  rect(x, y, anchoBoton, altoBoton, 10); // botón con bordes redondeados

  fill(255);
  textSize(20);
  textAlign(CENTER, CENTER);
  textFont(fuente);
  text("REINICIAR", x + anchoBoton/2, y + altoBoton/2 - 5);
}

function dibujarBotonInicio() {
  let anchoBoton = 120;
  let altoBoton = 50;
  let x = (width - anchoBoton) / 2;
  let y = height - altoBoton - 60;

  fill(139, 0, 0);
  rect(x, y, anchoBoton, altoBoton, 10); // botón con bordes redondeados

  fill(255);
  textSize(20);
  textAlign(CENTER, CENTER);
  textFont(fuente);
  text("Inicio", x + anchoBoton/2, y + altoBoton/2 - 5);
}
