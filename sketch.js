const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var participles = [];
var divisions = [];
var plinkos = [];

var ground;

var divisionHeight = 300;

function setup() {
  createCanvas(480,800);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(240,790,480,20);

   for (var i = 20; i <=width; i=i+50) 
    {
    
       plinkos.push(new Plinko(i,75));
    }

    for (var i = 10; i <=width-10; i=i+50) 
    {
    
       plinkos.push(new Plinko(i,175));
    }

     for (var i = 19; i <=width; i=i+50) 
    {
    
       plinkos.push(new Plinko(i,275));
    }

     for (var i = 19; i <=width-10; i=i+50) 
    {
    
       plinkos.push(new Plinko(i,375));
    }


}

function draw() {
  background(0); 

  Engine.update(engine);
 
  if(frameCount%60 === 0){
   
    participles.push(new Participles(random(width/2-10,width/2+10),10,10));
  
    }
    
    for(var j = 0; j < participles.length; j++){
       
      participles[j].display();
      
    }

    for(var k = 0; k < divisions.length; k++){
     
      divisions[k].display();
      
    }
  
    
  for(var k = 0; k <= width; k = k+80){
     
    divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight));
    
  }
  
  for (var i = 0; i < plinkos.length; i++) {
     
    plinkos[i].display();
    
  }

  ground.display();

}

