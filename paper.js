class Bird {
    constructor(x, y, r) {
      var options = {
          'isStatic': false,
          'restitution':0.8,
          'friction':0.1,
          'density':1.2,
      }
      this.body = Bodies.circle(x, y,r,options);
      this.x = x;
      this.y = y;
      this.r = r;
    
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;

      push();
      translate(pos.x, pos.y);
      rectMode(CENTER);
      fill("teal");
      ellipse(0, 0, this.r, this.r);
      pop();
    }
  };

  