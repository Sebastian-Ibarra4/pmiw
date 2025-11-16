function logicaBoton() {



  let anchoBoton = 120;
  let altoBoton = 50;
  let x = (width - anchoBoton) / 2 + 75;
  let y = height - altoBoton - 20;
  let x2 = (width - anchoBoton) / 2 - 75;
  let x3 = (width/2 - anchoBoton/2);
  let y2 = height - altoBoton - 60;

  let estadoFinal;

// botones decision
  switch(indiceActual) {
  case 5:
    estadoFinal = [13, 7];
    break;
  case 15:
    estadoFinal = [17, 21];
  }


  if (mouseX > x && mouseX < x + anchoBoton && mouseY > y && mouseY < y + altoBoton) {
    indiceActual = estadoFinal[0];
  } else if (mouseX > x2 && mouseX < x2 + anchoBoton && mouseY > y && mouseY < y + altoBoton) {
    indiceActual = estadoFinal[1];
  } 


// botones siguiente, inicio, reinicio y fin
  switch(indiceActual) {
  case 0:
    estadoFinal = [1];
    break;
  case 11:
    estadoFinal = [24];
    break;
  case 19:
    estadoFinal = [24];
    break;
    case 23:
    estadoFinal = [24];
    break;
  case 24:
    estadoFinal = [0];
  }

  if (mouseX > x3 && mouseX < x3 + anchoBoton && mouseY > y2 && mouseY < y2 + altoBoton) {
    indiceActual = estadoFinal[0];
  }  else if (mouseX > x3 && mouseX < x3 + anchoBoton && mouseY > y && mouseY < y + altoBoton) {
    indiceActual++;
  }
 }
