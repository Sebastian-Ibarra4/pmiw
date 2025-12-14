


function dibujarBotonSiguiente() {
  let anchoBoton = 120;
  let altoBoton = 50;
  let x = (width - anchoBoton) / 2;
  let y = height - altoBoton - 20;

  fill(139, 0, 0);
  rect(x, y, anchoBoton, altoBoton, 10); // botón con bordes redondeados

  fill(255);
  textSize(20);
  textAlign(CENTER, CENTER);
  textFont(fuente);
  text("Siguiente", x + anchoBoton/2, y + altoBoton/2 - 5);
}

function escribirTextos() {
  textFont(fuente2);
  text(misTextos[indiceActual], 75, -170, 500, 500);
}
