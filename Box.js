class Box {
  constructor(x, y, width, height) {
    var options = {
        'restitution':0.8,
        'friction':0.01,
        'density':1.0
    }
    this.image = loadImage("GradBox.png");
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    
    World.add(world, this.body);
  }
  display(){
    imageMode(CENTER);
    image(this.image, this.body.position.x, this.body.position.y, this.width * 1.15, this.height * 1.15);
  }
};
