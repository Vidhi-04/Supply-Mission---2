var w, h;
class side
{
    constructor(x, y, width, height)
    {
        var options = {
            isStatic: true
        }
        w = width;
        h = height;
        this.body = Bodies.rectangle(x, y, w, h, options)
        World.add(world, this.body)
    }
    display()
    {
        var pos = this.body.position
        rectMode(CENTER)
        fill(255, 0, 0)
        rect(pos.x, pos.y, w, h)
    }
};