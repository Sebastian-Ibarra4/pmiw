function dibujarBotonDecision5() {
  let anchoBoton = 120;
  let altoBoton = 50;
  let x = (width - anchoBoton) / 2 + 75;
  let y = height - altoBoton - 20;
  let x2 = (width - anchoBoton) / 2 - 75;

  fill(139, 0, 0);
  rect(x, y, anchoBoton, altoBoton, 10); // botón con bordes redondeados
  rect(x2, y, anchoBoton, altoBoton, 10);
  
  fill(255);
  textSize(20);
  textAlign(CENTER, CENTER);
  textFont(fuente);
  text("Bolsillo", x + anchoBoton/2, y + altoBoton/2 - 5);
  text("Barquito", x2 + anchoBoton/2, y + altoBoton/2 - 5);
}

function dibujarBotonDecision9() {
  let anchoBoton = 120;
  let altoBoton = 50;
  let x = (width - anchoBoton) / 2 + 75;
  let y = height - altoBoton - 20;
  let x2 = (width - anchoBoton) / 2 - 75;

  fill(139, 0, 0);
  rect(x, y, anchoBoton, altoBoton, 10); // botón con bordes redondeados
  rect(x2, y, anchoBoton, altoBoton, 10);
  
  fill(255);
  textSize(20);
  textAlign(CENTER, CENTER);
  textFont(fuente);
  text("Resiste", x + anchoBoton/2, y + altoBoton/2 - 5);
  text("No Resiste", x2 + anchoBoton/2, y + altoBoton/2 - 5);
}
