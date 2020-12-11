
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;
	
	paper1=new Paper(200,650,70);
	//dust2 =base,dust3=right,dust1=left
	
	Dust2=new Dustbin(1070,660,155,20)
	Dust3=new Dustbin(1150,570,20,200)
	Dust1=new Dustbin(1000,570,20,200)
ground=new Ground(200,680,2300,20);
Engine.run(engine);
	
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper1.display();
  
  Dust2.display();
  Dust3.display();
  Dust1.display();
 ground.display();
 
 drawSprites();
 
}
function KeyPressed(){
if (keyCode === UP_ARROW ){
Matter.Body.applyForce(paper1.body,paper1.body.position,{x:85,y:-85 })

}

}



