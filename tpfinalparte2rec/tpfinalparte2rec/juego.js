class Juego {
  constructor() {
    this.jugador = new Jugador();
    this.objetos = [];
    this.puntuacion = 0;
    this.circulosAtrapados = 0;
    this.circulosFallidos = 0;
    this.cuadradosAtrapados = 0;
    this.velocidadCaida = 4;
    this.estadoPantalla = 'instrucciones'; // Estado inicial
  }

  dibujar() {
    if (this.estadoPantalla === 'instrucciones') {
      this.mostrarInstrucciones();
    } else if (this.estadoPantalla === 'juego') {
      this.mostrarJuego();
    } else if (this.estadoPantalla === 'final') {
      this.mostrarPantallaFinal();
    }
  }

  mostrarInstrucciones() {
    background(0);
    fill(255);
    textSize(24);
    textAlign(CENTER, CENTER);
    text("Instrucciones", width / 2, height / 4);
    text("Creditos", width / 2, height / 1.5);
    textSize(18);
    text("1. Mueve el jugador usando las flechas izquierda y derecha.", width / 2, height / 3);
    text("2. Atrapa los círculos azules para ganar puntos.", width / 2, height / 2.5);
    text("3. Si atrapas 3 cuadrados rojos, pierdes.", width / 2, height / 2.1);
    text("4. Atrapa al menos el 80% de los círculos para ganar.", width / 2, height / 1.8);
    text("Paulina Caballe 120284/7 - Sebastian Ibarra 120321/3", width / 2, height / 1.3);
    text("Presiona cualquier tecla o clic en la pantalla para empezar.", width / 2, height - 50);
  }

  mostrarJuego() {
    background(0);
    fill(255);
    textSize(18);
    text("Puntuación: " + this.puntuacion, 10, 20);
    text("Círculos atrapados: " + this.circulosAtrapados + "/" + totalCirculos, 10, 40);
    text("Cuadrados atrapados: " + this.cuadradosAtrapados, 10, 60);

    // Mover y mostrar al jugador
    this.jugador.mover();
    this.jugador.mostrar();

    // Crear nuevos objetos aleatoriamente
    if (frameCount % 60 === 0) {
      this.objetos.push(new ObjetoCayendo(this.velocidadCaida));
    }

    // Mover y mostrar los objetos
    for (let i = this.objetos.length - 1; i >= 0; i--) {
      this.objetos[i].mover();
      this.objetos[i].mostrar();

      // Comprobar colisión con el jugador
      if (this.objetos[i].choca(this.jugador)) {
        if (this.objetos[i].tipo === 'circulo') {
          this.puntuacion++;
          this.circulosAtrapados++;
          this.velocidadCaida += 0.5;
        } else if (this.objetos[i].tipo === 'rectangulo') {
          this.cuadradosAtrapados++;
        }
        this.objetos.splice(i, 1);
      } else if (this.objetos[i].fueraDePantalla()) {
        if (this.objetos[i].tipo === 'circulo') {
          this.circulosFallidos++;
        }
        this.objetos.splice(i, 1);
      }
    }

    // Verifica si gana o pierde
    if (this.circulosAtrapados + this.circulosFallidos >= totalCirculos) {
      if (this.circulosAtrapados / totalCirculos >= porcentajeMinimo) {
        this.terminarJuego("¡Ganaste!");
      } else {
        this.terminarJuego("Perdiste: No atrapaste el 80% de los círculos");
      }
    }

    // Verificar atrapó 3 cuadrados
    if (this.cuadradosAtrapados >= 3) {
      this.terminarJuego("¡Perdiste! Atrapaste 3 cuadrados");
    }
  }

  mostrarPantallaFinal() {
    background(0);
    fill(255, 0, 0);
    textSize(32);
    textAlign(CENTER);
    text("Juego Terminado", width / 2, height / 2 - 40);
    textSize(24);
    text("Presiona el botón para reiniciar", width / 2, height / 2);

    // Mostrar reinicio en la pantalla final
    botonReinicio.mostrar();
  }

  terminarJuego(mensaje) {
    fill(255, 0, 0);
    textSize(32);
    textAlign(CENTER);
    text(mensaje, width / 2, height / 2);
    noLoop(); // Detiene el loop
    this.estadoPantalla = 'final'; 
    botonReinicio.mostrar();
  }

  reiniciarJuego() {
    this.puntuacion = 0;
    this.circulosAtrapados = 0;
    this.circulosFallidos = 0;
    this.cuadradosAtrapados = 0;
    this.velocidadCaida = 4;
    this.objetos = [];
    loop(); // Vuelve a iniciar el loop
    this.estadoPantalla = 'instrucciones'; // Regresa al estado de instrucciones
    botonReinicio.esconder(); 
  }
}

// Cambia de estado cuando se presiona una tecla o se hace clic
function keyPressed() {
  if (juego.estadoPantalla === 'instrucciones') {
    juego.estadoPantalla = 'juego'; // Cambiar a juego
  }
}

function mousePressed() {
  if (juego.estadoPantalla === 'instrucciones') {
    juego.estadoPantalla = 'juego'; // Cambiar a juego
  }
}
