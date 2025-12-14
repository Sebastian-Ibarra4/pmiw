// https://youtu.be/xfNb-kom5TI

let fuente, fuente2;
let imagenes = [];
let cantidad = 25;
let indiceActual = 0;
let misTextos;
let musica;

function preload() {
  fuente = loadFont("data/OpenSans-Bold.ttf");
  fuente2 = loadFont("data/OpenSans-Italic.ttf");
  misTextos = loadStrings("data/dialogos.txt");
  soundFormats('mp3');
  musica = loadSound("data/musiquita.mp3");

  for (let i = 0; i < cantidad; i++) {
    imagenes[i] = loadImage("data/FT" + (i+1) + ".png");
  }
}

function setup() {
  createCanvas(640, 480);
  textAlign(CENTER);
}

function draw() {
  dibujarPantalla();

  if (indiceActual == 0) {
    dibujarBotonInicio();
  } else if (indiceActual == 5) {
    dibujarBotonDecision5();
  } else if (indiceActual == 15) {
    dibujarBotonDecision9();
  } else if (indiceActual == 11) {
    dibujarBotonFin();
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
  logicaBoton();
}
