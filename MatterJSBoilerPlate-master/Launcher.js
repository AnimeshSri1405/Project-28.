    
class Launcher{
	constructor(body,point)
	{
		
		var options={ bodyA:body,			 
			pointB:point, 
			stiffness:0.04, 
			length:1
			
		}
		
		this.bodyA=body
		this.pointB=point
		this.launcher=Constraint.create(options)
		World.add(world,this.launcher)
    }
    display(){
        if(this.launcher.bodyA){
            var posA=this.bodyA.position
            var posB=this.pointB
            strokeWeight(2);
            line(posA.x,posA.y,posB.x,posB.y)
        }
    }

fly(){
    this.launcher.bodyA = null
   console.log("inside fly") 
}

attach(body){
    this.launcher.bodyA = body;
}
}









    