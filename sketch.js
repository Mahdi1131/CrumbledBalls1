
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1500, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600,height,1500,50);
	paper = new Bird(100,400, 50);

	box1 = new Box(width/2 + 200, height - 25, 200, 20 );
	box2 = new Box(width/2 +100, height -65, 20,100);
	box3 = new Box(width/2 +300, height -65, 20,100);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(170);

  ground.display();
  paper.display();
  box1.display();
  box2.display();
  box3.display();

  keyPressed();

  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position, {x:25, y:-17});
	}
}
