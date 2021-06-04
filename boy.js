class Boy{
    constructor(x,y,width,height){

        var options = {
            'isStatic':true
        }
        this.x=x
        this.y=y
        this.height=height
        this.width=width

        this.body = Bodies.rectangle(x, y, width, height,options);

        this.image=loadImage("Plucking mangoes/boy.png");
      
        World.add(world, this.body);
        
    }

    display(){
      push();
      var pos= this.body.position
      translate(pos.x, pos.y);
      //rotate(angle);
      imageMode(CENTER);
      image(this.image,0, 0, this.width, this.height);
      pop();
    }
}