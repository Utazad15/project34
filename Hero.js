class Hero {
  constructor(x,y,r)
	{
		var options = { 
            //restitution: 0.04,
			density: 1.2, 
			friction: 1
		};
		this.x=x;
		this.y=y;
		this.r=r;
		this.image=loadImage("superhero1.png");
		this.body=Bodies.circle(this.x, this.y, (this.r)/2, options);
		World.add(world, this.body);

	}
	
	display()
	{
			
			var heroPos=this.body.position;		
			push()
			translate(heroPos.x, heroPos.y-50);
			rectMode(CENTER)
			fill(255,0,255)
			imageMode(CENTER);
			//scale(0.5);
			image(this.image, 0,0,this.r+150, this.r)
			pop()
			
	}
}
