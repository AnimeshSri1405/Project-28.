class Stone{
    constructor(x,y,r){
        var options = {
    
            restitution:0,
			friction:1,
			density:1.2
        } 
        this.x = x;
        this.y = y;
        this.r=r;
        
      this.body = Bodies.circle(this.x,this.y,this.r/2,options);
       this.image=loadImage("Images/stone.png") 
       
        World.add(world,this.body)
    }

display(){
    var pos = this.body.position;
    push()
    translate(pos.x, pos.y);
    // rectMode(CENTER)
    // rotate(this.body.angle)
    fill(255,0,255)
    imageMode(CENTER);
    ellipseMode(RADIUS)
    image(this.image, 0,0,this.r*2, this.r*2)
    pop()
}
};
