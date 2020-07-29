
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	roof = new Roof(400,100,700,50);

	bob1 = new Bob(100,600);
	bob2 = new Bob(250,600);
	bob3 = new Bob(400,600);
	bob4 = new Bob(550,600);
	bob5 = new Bob(700,600);

	rope1 = new Rope(bob1.body,roof.body,-300,0);
	rope2 = new Rope(bob2.body,roof.body,-150,0);
	rope3 = new Rope(bob3.body,roof.body,0,0);
	rope4 = new Rope(bob4.body,roof.body,150,0);
	rope5 = new Rope(bob5.body,roof.body,300,0);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);

  roof.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();
 
  keyPressed();

  textSize(15);
  text("Push the up arrow to bring the left bob up and the down arrow to bring the left bob down",100,50);
}


function keyPressed(){
	if(keyCode=== UP_ARROW){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-10,y:-15});
	}
}
