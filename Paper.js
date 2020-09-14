class Paper{
    consructor(x,y,radius){
        var options = {
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.radius = radius;
        this.x = x;
        this.y = y;
        this.body = Bodies.circle(x,y,radius,options)
        World.add(world,this.body)
    }
    display() {
        console.log(this.body);
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        rectMode(CENTER);
        strokeWeight(3);
        fill(255,0,255);
        ellipse(0,0,this.radius,this.radius);
        pop();
    }
      
}


