class P
{
	constructor(x,y,r)
	
	{
		var options={
			isStatic:true,
		
    }

			
			
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, this.r/2, options)
		
		World.add(world, this.body);

	}
	display()
	{
			
			var paperpos=this.body.position;		

			push()
			translate(paperpos.x, paperpos.y);
			fill("white")
			circle(this.x,this.y,this.r)
			
		
			
			pop()
			
	}

}
