
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

function preload()
{
boy=loadImage("Images/boy.png")	
}

function setup() {
	createCanvas(1300, 600);


	engine = Engine.create();
	world = engine.world;
	tree = new Tree(1000,300)
	ground=new Ground(700,610,1400,100);
	mango1= new Mango(1050,50,35);
	mango2= new Mango(980,110,34);
	mango3= new Mango(950,180,34);
	mango4= new Mango(1020,220,50);
	mango5= new Mango(1110,160,37);
	mango6= new Mango(1050,120,33);
	mango7= new Mango(940,60,35);
	mango8= new Mango(920,250,38);
	mango9= new Mango(860,200,34); 
	mango10= new Mango(1150,230,35);
	//Create the Bodies Here.

	
stone=new Stone(235,420,30)
launcher= new Launcher(stone.body,{x:235,y:420})	
Engine.run(engine);
  
}


function draw() {
 
  background("white");
  rectMode(CENTER);
  image (boy,200,340,200,300)
 ground.display();

  stone.display();
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

  launcher.display();
  detectCollision(stone,mango1)
  detectCollision(stone,mango2)
  detectCollision(stone,mango3)
  detectCollision(stone,mango4)
  detectCollision(stone,mango5)
  detectCollision(stone,mango6)
  detectCollision(stone,mango7)
  detectCollision(stone,mango8)
  detectCollision(stone,mango9)
  detectCollision(stone,mango10)
  drawSprites();
 
}

function mouseDragged(){
	console.log("inside mouse dragged")
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}
function mouseReleased()
{
	launcher.fly();
    // distance=int(dist(stoneObj.x,stoneObj.y,mango1.x,mango1.y));
console.log("inside Mouse Relesed")
}

function keyPressed(){
	if(keyCode===32){
	//	launcher.fly();
		Matter.Body.setPosition(stone.body,{x:235,y:420});
		launcher.attach(stone.body)
	}
}
function detectCollision(lstone,lmango){
	
	mangoBodyPosition=lmango.body.position
	stoneBodyPosition=lstone.body.position
	
	var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
	//console.log(distance)
   // console.log(lmango.r+lstone.r)
		if(distance<=lmango.r+lstone.r)
	  {
		//console.log(distance);
		  Matter.Body.setStatic(lmango.body,false);
	  }
  
	}