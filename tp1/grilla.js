//funcion para dibujar los circulos
function grilla ( i, j, modj, modi) {
  for ( i = 0; i < width/2; i+=modi ) {
    for ( j = 0; j < height; j+=modj ) {
      circle( i+width/2, j, tam);
      tam = 16;
      //agranda el tamaño de los circulos cundo el mouse se mueve horizontalmente dependiendo lo cerca que esten
      if (dist (mouseX, mouseX, i+width/2, i+width/2)< 50) {
        tam = tam+10;
      } else if (dist (mouseX, mouseX, i+width/2, i+width/2)> 50 && dist (mouseX, mouseX, i+width/2, i+width/2) < 100) {
        tam = tam+7;
      }
    }
  }
}
