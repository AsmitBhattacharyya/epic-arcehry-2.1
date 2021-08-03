const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var canvas, arrow, ground, playerArchery;
var base1, base2, computerArchery, player;


function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  arrowImg = loadImage("./assets/arrow.png");
  base1Img = loadImage("./assets/base1.png");
  base2Img = loadImage(".assets/base2.png");
  computerArcheryImg = loadImage(".assets/computerArchery.png");
  playerImg = loadImage(".assets/player.png");
  playerArchery = loadImage(".assets/playerArchery.png");

}

function setup() {
  canvas = createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;
  angle = -PI / 4;
  ground = new Ground(0, height - 1, width * 2, 1);
  base1 = new Tower(150, 350, 160, 310);
  base2 = new Tower(150, 350, 160, 310);
  arrow = new Tower(150, 350, 160, 310);
  compueterArchery = new Tower(150, 350, 160, 310);
  player = new Tower(150, 350, 160, 310);
  playerArchery = new Tower(150, 350, 160, 310);
  
  

}

function draw() {
  background(189);
  image(backgroundImg, 0, 0, width, height);

  

  Engine.update(engine);
  ground.display();
  

  cannon.display();
  base1.display();
  base2.display();
  arrow.dispaly();
  computerArchery.dispaly();
  player.display();
  playerArchery.dispaly();
  
 
}


