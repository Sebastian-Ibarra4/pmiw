let juego;
let fuente, fuente2;
let imagenes = [];
let cantidad = 25;
let indiceActual = 0;
let misTextos;
let musica;
let texturaTroncos, duende, rio1, rio2,soldado;

function preload() {
  fuente = loadFont("data/OpenSans-Bold.ttf");
  fuente2 = loadFont("data/OpenSans-Italic.ttf");
  misTextos = loadStrings("data/dialogos.txt");
  soundFormats('mp3');
  musica = loadSound("data/musiquita.mp3");
  texturaTroncos = loadImage("data/tronco.png");
  duende = loadImage("data/duende.png");
  rio1 = loadImage("data/texturaRio1.png");
  rio2 = loadImage("data/texturaRio2.png");
  soldado = loadImage("data/Soldadito.png");


  for (let i = 0; i < cantidad; i++) {
    imagenes[i] = loadImage("data/FT" + (i+1) + ".png");
  }
}

function setup() {
  createCanvas(640, 480);
  textAlign(CENTER);
  juego = new Juego();
  juego.iniciar();
}

function draw() {
  dibujarPantalla();

  if (indiceActual == 0) {
    dibujarBotonJugar();
  } else if (indiceActual == 5) {
    dibujarBotonDecision5();
  } else if (indiceActual == 15) {
    background(78, 59, 49);
    juego.dibujar();
    // dibujarBotonDecision9();
  } else if (indiceActual == 11) {
    dibujarBotonFin();
  } else if (indiceActual == 17) {
    dibujarBotonJugar();
  } else if (indiceActual == 19) {
    dibujarBotonFin();
  } else if (indiceActual == 23) {
    dibujarBotonFin();
  } else if (indiceActual == 24) {
    dibujarBotonReiniciar();
    musica.stop();
  } else {
    dibujarBotonSiguiente();
  }
}

function mouseClicked() {
  let anchoBoton = 120;
  let altoBoton = 50;
  let x3 = (width/2 - anchoBoton/2);
  let y2 = height - altoBoton - 60;

  if (indiceActual == 0 && mouseX > x3 && mouseX < x3 + anchoBoton && mouseY > y2 && mouseY < y2 + altoBoton) {
    musica.play();
  }
  if (indiceActual == 15) {
    if (juego.estado === "instrucciones") {
      juego.estado = "jugando";
      juego.tiempoInicio = millis();
      return;
    } else if (juego.estado === "perdiste") {
      indiceActual = 21;
      juego.reiniciar();
      return;
    } else if (juego.estado === "ganaste") {
      indiceActual = 18;
      juego.reiniciar();
      return;
    }
  }
  logicaBoton();
}

function keyPressed() {
  juego.teclaPresionada();
}
