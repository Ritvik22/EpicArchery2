const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var computerBase;
var computer;
var computerArcher;
var playerBase;
var player;
var playerArcher;
var angle;

function preload() {

  

}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
 
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;

  angle = -PI/4
  
  playerBase = new PlayerBase(300, random(450, height - 300), 180, 150);
  player = new Player(285, playerBase.body.position.y - 153, 50, 180);
  computerBase = new ComputerBase(width - 300, random(450, height - 300), 180, 150);
  computer = new CompPlayer(width - 285, computerBase.body.position.y - 153, 50, 180);
  computerArcher = new CompArcher(width - 300, computerBase.body.position.y - 153, 50, 180);
  playerArcher = new PlayerArcher(300, playerBase.body.position.y - 200, 140, 200, angle);
  playerArrow = new PlayerArrow(300, playerBase.body.position.y - 200, 100, 20, angle);

 }

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   
   computerBase.display();
   playerBase.display();
   player.display();
   computer.display();
   computerArcher.display();
   playerArcher.display();
   playerArrow.display();

   console.log(playerArcher.angle);

}

function keyReleased() {
  if (keyCode === UP_ARROW) {
    //cannonball.shoot()
    playerArrow.shoot(playerArcher.angle);
  }
}


function keyPressed(){
  if (keyCode === UP_ARROW) {

     playerArrow = new PlayerArrow(300, playerBase.body.position.y - 200, 100, 20, playerArcher.angle);

  }
}

