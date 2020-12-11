class Paper{
constructor(x,y,diameter){
var options={
isStatic:false,
  restitution:0.3,
  friction:0.5,
  Density:1.2

}

this.x=x;
this.y=y
this.body=Matter.Bodies.circle(x,y,diameter,options);
    World.add(world,this.body)
    this.image = loadImage("paper.png")
this.diameter=diameter
}
display(){
var paperpos =this.body.position;
push()
translate(paperpos.x,paperpos.y);
rectMode(CENTER);
strokeWeight(3);
fill(255,0,0)
ellipse(0,0,this.diameter,this.diameter)
pop()


}





















}







