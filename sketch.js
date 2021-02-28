
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject,elastic;
var mango1, mango2 ,mango3 ,mango4, mango5, mango6, mango7 ,mango8,mango9,mango10,mango11,mango12,mango13,mango14,mango15,mango16,mango17,mango18,mango19,mango20;
var world,boy;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
	mango2=new mango(1150,100,30);
	mango3=new mango(1050,100,30);
	mango4=new mango(1000,100,30);
	mango5=new mango(1100,40,30);
	mango6=new mango(1100,160,30);
	mango7=new mango(1150,160,30);
	mango8=new mango(1050,160,30);
	mango9=new mango(1000,160,30);
	mango10=new mango(950,160,30);
	mango11=new mango(900,160,30);
	mango12=new mango(900,220,30);
	mango13=new mango(950,220,30);
	mango14=new mango(1000,220,30);
	mango15=new mango(1050,220,30);
	mango16=new mango(1100,220,30);
	mango17=new mango(1150,220,30);
	mango18=new mango(1200,220,30);
	mango19=new mango(1250,220,30);
	mango20=new mango(1200,160,30);

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	stoneObj=new Stone(230,360,30);
	elastic=new Elastic(stoneObj.body,{x:240,y:420})

	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);

  textSize(20);
  text("Press Space to get a second chance to play !!!!",50,50);

  detectCollision(stoneObj,mango1);
  detectCollision(stoneObj,mango2);
  detectCollision(stoneObj,mango3);
  detectCollision(stoneObj,mango4);
  detectCollision(stoneObj,mango5);
  detectCollision(stoneObj,mango6);
  detectCollision(stoneObj,mango7);
  detectCollision(stoneObj,mango8);
  detectCollision(stoneObj,mango9);
  detectCollision(stoneObj,mango10);
  detectCollision(stoneObj,mango11);
  detectCollision(stoneObj,mango12);
  detectCollision(stoneObj,mango13);
  detectCollision(stoneObj,mango14);
  detectCollision(stoneObj,mango15);
  detectCollision(stoneObj,mango16);
  detectCollision(stoneObj,mango17);
  detectCollision(stoneObj,mango18);
  detectCollision(stoneObj,mango19);
  detectCollision(stoneObj,mango20);




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
  mango11.display();
  mango12.display();
  mango13.display();
  mango14.display();
  mango15.display();
  mango16.display();
  mango17.display();
  mango18.display();
  mango19.display();
  mango20.display();
	stoneObj.display();
	elastic.display();
  groundObject.display();




}

function mouseDragged(){
    Matter.Body.setPosition(stoneObj.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    elastic.fly();
}

function detectCollision(lstone,lmango){
mangoBodyPosition=lmango.body.position;
stoneBodyPosition=lstone.body.position;

var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
if(distance<=lmango.r+lstone.r)
{
	Matter.Body.setStatic(lmango.body,false);
};
};

function keyPressed(){
  if(keyCode===32){
    Matter.Body.setPosition(stoneObj.body,{x:230,y:360})
   
    stoneObj=new Stone(230,360,30);
    elastic=new Elastic(stoneObj.body,{x:240,y:420})
  }
}
