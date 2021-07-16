class PlayerArrow {

    constructor(x, y, width, height) {
        var options = {
            isStatic: true
        };

        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("assets/arrow.png");

        World.add(world, this.body);
    }

shoot(angle) {

    rotate(angle);
    var velocity = p5.Vector.fromAngle(angle);
    velocity.mult(20);
    Matter.Body.setStatic(this.body, false);
    Matter.Body.setVelocity(this.body, {x: velocity.x, y: velocity.y});
   
}

display () {
    var pos = this.body.position;
    var angle = this.body.angle;

    push();
    translate(pos.x, pos.y);
    Matter.Body.setAngle(this.body, -PI/2);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();

}
}