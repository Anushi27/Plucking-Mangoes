
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600,height,1200,20);

	mango1 = new Mango(1050,350,40);
  mango2 = new Mango(800,350,35);
	mango3 = new Mango(840,250,40);
	mango4 = new Mango(810,280,40);
	mango5 = new Mango(900,300,35);
	mango6 = new Mango(950,210,35);
	mango7 = new Mango(1100,300,40);
	mango8 = new Mango(890,370,40);
	mango9 = new Mango(1100,370,40);
	mango10 = new Mango(790,300,40);
	

  tree = new Tree(900,430,550,530);

	boy = new Boy(500,620,150,300);

	stone = new Stone(450,550,50)

  slingshot = new SlingShot(stone.body,{x:460, y:555});  

  

  
}


function draw() {
  rectMode(CENTER);
  background(0);

  Engine.run(engine);

  ground.display();

  stone.display()

  tree.display();


  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();

  boy.display();

  stone.display()

  slingshot.display()

  //detectollision()
 

  
  drawSprites();
 
}


function mouseDragged(){
  Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
  slingshot.fly();
  
}



