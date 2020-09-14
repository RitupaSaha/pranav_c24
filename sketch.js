
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

	ground = new Dustbin(400,690,800,20);
	ground.shapeColor = color(243,191,202);
	
	paper = new Paper(100,200,10);
	
	dustbin1 = new Dustbin(600,670,200,20);
		
	dustbin2 = new Dustbin(500,630,20,100);
		
	dustbin3 = new Dustbin(700,630,20,100);
	
	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  paper.display();
  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();

}

function keyPressed() {
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
	}
}



