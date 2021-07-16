class PlayerArcher {

    constructor(x, y, width, height) {
        var options = {
            isStatic: true
        };

        this.body = Bodies.rectangle(x, y, width, height, options, angle);
        this.width = width;
        this.height = height;
        this.image = loadImage("assets/playerArcher.png");
        this.angle = angle;

        World.add(world, this.body);
    }



display () {
    var pos = this.body.position;

    if (keyIsDown(RIGHT_ARROW) && this.angle < 0.35) {
        this.angle += 0.02;
    }
  
    if (keyIsDown(LEFT_ARROW) && this.angle > -1.45) {
        this.angle -= 0.02;
    }

    push();
    translate(pos.x, pos.y);
    rotate(this.angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();

    console.log(this.angle);

}
}

/*
}
    constructor(x, y, width, height) {
        var options = {
            isStatic: true
        };

        this.body = Bodies.rectangle(x, y, width, height, angle);
        this.width = width;
        this.height = height;
        this.image = loadImage("assets/playerArcher.png");
        var angle = this.body.angle;

        World.add(world, this.body);
    }



display () {

    if (keyIsDown(RIGHT_ARROW) && this.angle < 0.35) {
        this.angle += 0.02;
    }
  
    if (keyIsDown(LEFT_ARROW) && this.angle > -1.45) {
        this.angle -= 0.02;
    }
  
      push();
      translate(this.x, this.y);
      rotate(this.angle);
      imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
      pop();

}
} */