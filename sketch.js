const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var drops = [];
var ground;
function setup() {
  var canvas = createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;  
}

function draw() {
  background(255,255,255); 
  Engine.update(engine);
  for(var i=0; i< drops.length; i=i+1) {
    drops[i].display();
  }

  drops.push(new Drop(random(0,800),random(0,10),random(2,5),random(15,30)));

  drawSprites();
}