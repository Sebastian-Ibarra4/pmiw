// TP#1
// Sebastian Ibarra n°l 120321/3
// https://www.youtube.com/watch?v=WP5pRMqMFPo


let imagen; //funcion para cargar imagen
let tam; //funcion tamaño de curculos

//precargar la imagen
function preload(){ 
  imagen = loadImage("data/obra.jpg");}

function setup() {
//tamaño de lo que se muestra
  createCanvas(800,400);
//cambiar el tamaño de la imagen de la obra
  imagen.resize(400, 400);
//quitar bordes 
  noStroke ();
//cambiar de rgb a hsb
  colorMode(HSB, 360, 20, 10);
 
}


  
function draw() {
//color de fondo
  background (1);
//mostrar la imagen 
  image(imagen, 0, 0);
//llama a la grilla
 grilla (0, 0, width/2 / 13, height / 13);

}

function mousePressed () {
  //cambiar color de los circulos al precionar el mouse
  fill (random(0, 360), 50, 100);
}
//reiniciar
function keyPressed () {
  fill(360);
  tam = 16;
}
