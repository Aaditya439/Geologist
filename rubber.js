class Rubber {
    constructor(x,y,width,height) {
      var options = {
        'restitution':2,
        'friction':5,
        'density':1
          
      }
      this.body = Bodies.rectangle(x,y,50,50,options);
      this.width = 50;
      this.height = 50
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      strokeWeight(4)
      fill("white")
      rect(pos.x, pos.y, this.width, this.height);
    }
  };