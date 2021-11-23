class rope{
	constructor(body1,body2, offsetX)
	{
		var options={
			bodyA:body1,
			bodyB:body2,
			stiffness:0.04,
			length : 200
		}

		this.rope=Constraint.create(options)
		World.add(world,this.rope)

		
	}

	display()
	{
		var pointA=this.rope.bodyA.position;
		var pointB=this.rope.bodyB.position;

		strokeWeight(2);
        line (pointA.x,pointA.y,pointB.x,pointB.y)
		//WRITE THE CORRECT CODE TO RENDER A LINE BETWEEN THE TWO BODIES

		
	}

}