
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1,mango2,mango3,mango4,mango5;
var world,boy;
var sling, stone;

function preload(){
	boy=loadImage("boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1 = new Mango(1050,300,40);
  mango2 = new Mango(800,300,35);
	mango3 = new Mango(840,200,40);
	mango4 = new Mango(810,250,40);
	mango5 = new Mango(900,260,35);
	mango6 = new Mango(950,190,35);
	mango7 = new Mango(1100,255,40);
	mango8 = new Mango(890,300,40);
	mango9 = new Mango(1100,300,40);
	mango10 = new Mango(790,250,40);

	treeObj=new tree(950,580);
	groundObject=new ground(width/2,600,width,20);
	
	stone = new Stone(200,370,20);
	sling = new Sling(stone.body,{x:230,y:410});
	Engine.run(engine);

}

function draw() {

  background(164,230,237);
  textSize(25)
  textFont("Times New Roman")
  text("Press Space to get a second chance to Play!!",30,200);
  image(boy ,200,340,200,300);
  

  treeObj.display();
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


  stone.display();
  sling.display();
  groundObject.display();

  detectCollisions(stone,mango1);
  detectCollisions(stone,mango2);
  detectCollisions(stone,mango3);
  detectCollisions(stone,mango4);
  detectCollisions(stone,mango5);
  detectCollisions(stone,mango6);
  detectCollisions(stone,mango7);
  detectCollisions(stone,mango8);
  detectCollisions(stone,mango9);
  detectCollisions(stone,mango10);	
  

  
}

function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
	sling.fly();
}

function detectCollisions(lstone,lmango){
	mbodypos = lmango.body.position;
	sbodypos = lstone.body.position;

	var distance = dist(sbodypos.x,sbodypos.y,mbodypos.x,mbodypos.y);
	console.log(distance);
	console.log(lmango.r);
	console.log(lstone.r);
    if(distance<=lmango.r+lstone.r){
		Matter.Body.setStatic(lmango.body,false);
	}
}
function keyPressed(){
	if(keyCode === 32){
		Matter.Body.setPosition(stone.body,{x:200,y:370});
		sling.attach(stone.body);
	}
}

