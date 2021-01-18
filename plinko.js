class Plinko {
    constructor(x, y, r) {
      var options = {
         isStatic: true,
         
      }
      this.body = Bodies.circle(x, y, this.r, options);
      this.r=r;
      World.add(world, this.body);
      
    }
    display(){
      var pos =this.body.position;
      translate(pos.x, pos.y);
      ellipseMode(RADIUS);
      fill("red");
      ellipse(0,0, this.r, this.r);
      push();
      pop();
      }
 };