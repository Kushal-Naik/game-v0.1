class Drone extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
    this.image = loadImage("img/droneT.png");
  }

  display(){
    super.display();
    Dx = this.body.position.x;
    Dy = this.body.position.y;

    if(keyDown(UP_ARROW)){
      this.body.position.y = this.body.position.y - 1;
    }
    if(keyDown(DOWN_ARROW)){
      this.body.position.y = this.body.position.y + 1;
    }
    if(keyDown(LEFT_ARROW)){
      this.body.position.x = this.body.position.x - 1;
    }
    if(keyDown(RIGHT_ARROW)){
      this.body.position.x = this.body.position.x + 1;
    }

    

  }

};
