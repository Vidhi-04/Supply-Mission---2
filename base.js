var w1, h1;
class baseClass
{
    constructor(x, y, width, height)
    {
        var options = {
            isStatic: true
        }
        w1 = width;
        h1 = height;
        this.body = Bodies.rectangle(x, y, w1, h1, options)
        World.add(world, this.body)
    }
    display()
    {
        var pos = this.body.position
        rectMode(CENTER)
        fill(255, 0, 0)
        rect(pos.x, pos.y, w1, h1)
    }
};