
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	hammer = new Hammer(400,350,20,20)
	ground = new Ground(400,700,800,20)
	rubber = new Rubber(400,660,20,20)
	stone = new Stone(200,660,20,20)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  hammer.display()
  ground.display();
  rubber.display();
  stone.display();
  drawSprites();
  
 
}



