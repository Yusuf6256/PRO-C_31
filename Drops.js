class CreateDrops
{
    constructor(x,y,r)
    {
        var options=
        {
            friction:0.1,
            density:1.0
        }
        this.drops = Bodies.circle(x,y,r,options)
        this.r = r
        World.add(world,this.drops);
    }

    display()
    {
       
        
        translate(this.body.position.x, this.body.position.y);
        ellipseMode(RADIUS);
        eliipse(0, 0, this.r);
        pop()
    }

}