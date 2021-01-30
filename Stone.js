class Stone {
    constructor(x, y) {
      var options = {
          'restitution':0.5,
          'friction':0.2,
          'density':1

      }
      this.body = Bodies.rectangle(x, y, 75, 75, options);
      this.width = 75;
      this.height = 75;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
            var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(4)
      stroke("black");
      fill("red");
      rect(0, 0, this.width, this.height);
      pop();
    }
  };
  