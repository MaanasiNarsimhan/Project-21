var bullet1,  wall;
var speed, weight, thickness 

function setup() {
  createCanvas(800,400)
  thickness = Math.round(random(22,83))
  bullet1 = new Bullet(50, 100, 20, 25);
  wall1 = new Wall(400, 100, thickness, height/2)
  wall1.shapeColor = (80,80,80)
  bullet1.shapeColor("white")


  speed =   Math.round(random(223,321))
  weight = Math.round(random(30,52))

wall1.debug = true ;
}

function draw() {
  background(255,255,255); 
  
  car.velocityX = speed

if (car.x >380) {
  car.velocityX = 0
   
  
    
    var damage = 0.5 * weight * speed *speed / thickness * thickness *thickness
   

    if (damage>10) {
      bullet1.shapeColor = "red"
    }
    
    
    if (damage < 10) {
      bullet1.shapeColor= "green"
    }
  }




  drawSprites();
}
