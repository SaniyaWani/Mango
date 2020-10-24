class Stone {
    constructor(x,y){
       var options={
           isStatic:true
       }
   
   
       this.image = loadImage("Images/stone.png");
       this.body=Bodies.rectangle(x,y,40,40,options);
       
       World.add(world,this.body);
   
   
    }
   display(){
        var position=this.body.position;
        imageMode(CENTER);
       image(this.image,position.x,position.y,40,40);
   
   
   
   }
   
   
   
   }