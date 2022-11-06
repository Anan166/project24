class Stone{
    constructor(x,y,w,h){
        var options={
            restitution:0.8,
            density:12,
            friction:0.9
        }
            this.x=x;
            this.y=y;
            this.w=w;
            this.h=h;
            this.body=Bodies.rectangle(x,y,w,h,options)

            World.add(world, this.body);
           
    }
    display(){
        var pos=this.body.position;		
			push()
			translate(pos.x, pos.y);
            rotate(this.body.angle)
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill(0);
            rect(0,0,this.w,this.h)
			//draw the ellipse here to display the rubber ball

			pop()
    }
}