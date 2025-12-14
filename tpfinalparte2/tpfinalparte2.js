//https://www.youtube.com/watch?v=BViunkuVCR0

let indiceActual = 0;
let fuente, fuente2;
let imagenes = [];
let misTextos;
let musica;
let texturaTroncos, duende, rio1, rio2, soldado;

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


  for (let i = 0; i < 25; i++) {
    imagenes[i] = loadImage("data/FT" + (i+1) + ".png");
  }
}

function setup() {
  createCanvas(640, 480);
  textAlign(CENTER);
  juego = new Juego();
  juego.iniciar();
  principal = new Principal();
  botones = new Botones();
}

function draw() {
  principal.ManejoPantallas();
}

function mouseClicked() {
principal.ClickPantalla();
}

function keyPressed() {
    juego.teclaPresionada();
}
