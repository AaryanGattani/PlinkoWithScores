var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = []; 

var score = 0;
var Particle;
var turn = 0;
var gameState = 1;

var divisionHeight=300;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
 


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }



    
}


 

function draw() {
  background("black");
  textSize(20)
  text("Score : "+score,20,30);
  Engine.update(engine);
   
   if(Particle!=null)
   {
      Particle.display();
      if(Particle.body.position.y>760)
      {
         if(Particle.body.position.x<300)
         {
            
            Particle = null
            if (turn>= 5) gameState = 2
         }
         
      }
   }
   if(Particle!=null)
   {
      Particle.display();
      if(Particle.body.position.y<600)
      {
         if(Particle.body.position.x>301)
         {
            
            
            if (turn>= 5) gameState = 2
         }
         
      }
   } if(Particle!=null)
   {
      Particle.display();
      if(Particle.body.position.y<900)
      {
         if(Particle.body.position.x>600)
         {
            
            if (turn>= 5) gameState = 2
         }
         
      }
   }
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
 

    text("500",20,600)
    text("500",100,600)
    text("500",185,600)
    text("500",265,600)
    text("500",340,600)
    text("500",420,600)
    text("500",500,600)
    text("500",580,600)
    text("500",660,600)
    text("500",740,600)
 
   
   for (var j = 0; j < particles.length; j++) {
   
      particles[j].display();
    }
   
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
   

   if (turn === 5)
   {      
      textSize(100)
      stroke("WHITE");
      fill("WHITE");
      text("Game Over",150,250);
      gameState === 2
   }

}
   



function mousePressed()
{    
   Particle=new particle(mouseX , 10,10)
   turn = turn+1;
   score= score+500;
   console.log(turn);
}