class Drop{
    constructor(x1,y1,w,h){
       
        this.body = Bodies.rectangle(x1,y1,w,h);
        this.w = w;
        this.h = h;
        World.add(world,this.body);
    }
   display(){
       var pos = this.body.position;
       push();
       translate(pos.x,pos.y);
       strokeWeight(3);
       stroke("purple");
       fill("purple");
       rect(0,0,this.w,this.h);
       pop();
   }
}
