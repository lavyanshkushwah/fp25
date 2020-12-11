class Ground{
    constructor(x,y,width,height){
    var options={
    isStatic:true,
      
    
    }
    
    
    this.body=Bodies.rectangle(x,y,width,height,options)
       this.width=width;
       this.height=height;
World.add(world,this.body);
    
    }
 display(){
      var gpos =this.body.position;
      var angle = this.body.angle;
      push();
      translate( gpos.x,  gpos.y)
      var angle=this.body.angle;
      rotate(angle);
      rectMode(CENTER);
      rect(0, 0, this.width, this.height);
      pop();
    }
  };





