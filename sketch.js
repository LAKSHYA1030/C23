const Engine = Matter.Engine; 
const World = Matter.World; 
const Bodies = Matter.Bodies; 
var engine,world,box1,ground1; 

function setup(){ 
  createCanvas(400,400); 
  engine = Engine.create(); 
  world = engine.world; 
  box1 = new box(200, 200, 20, 20);
  box2 = new box(197, 100, 20, 20);
  ground1 = new ground(200, 400, 400, 5);

  } 
  
  function draw(){ 
    background("orange"); 
    Engine.update(engine);
    box1.display() 
    box2.display()
    ground1.display()

  }