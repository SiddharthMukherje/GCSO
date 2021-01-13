var mercedes;
var constructionwall;

var speedorvelocity,weight;

function setup() {
  createCanvas(1600,400);

  mercedes = createSprite(50, 200, 50, 50);
  
  constructionwall = createSprite(1500,200,60, height/2)

  speedorvelocity=random(55,90);
  weight=random(400,1500);

  mercedes.shapeColor = color="white"

  mercedes.velocityX = speedorvelocity;

mercedes.debug=true;
 constructionwall.debug=true;
}

function draw() {
  background(0);  
  if (constructionwall.x-mercedes.x < (mercedes.width/2+constructionwall.width)/2)
 {
   mercedes.velocityX=0;
   var deformation=0.5 * weight * speedorvelocity* speedorvelocity/22509;
   
   if(deformation>180){
       mercedes.shapeColor=color="green";
    } 

    if (deformation<180 && deformation>100){
      mercedes.shapeColor=color="yellow";
    }

    if(deformation<100){
        mercedes.shapeColor=color="red";
    }
 }
  drawSprites();

}

  