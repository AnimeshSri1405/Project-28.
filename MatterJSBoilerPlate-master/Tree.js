class Tree{
    constructor(x,y){
        var options = {
            isStatic : true
        } 
        this.x = x;
        this.y = y;
      this.body = Bodies.rectangle(this.x,this.y,1,1,options);
       this.image=loadImage("Images/tree.png") 
       
        World.add(world,this.body)
    }

display(){
    var pos = this.body.position;
   // rectMode(CENTER)
    imageMode(CENTER)
    image(this.image,this.x,this.y,400,600);
}
};
