
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;
var ground;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600, 600);
 
  monkey = createSprite(80,315,20,20); monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.1
  
 ground = createSprite(400,350,900,10);
 ground.velocityX = -4;
ground.x = ground.width /2;
  console.log(ground.x);
  
   FoodGroup = new Group();
  obstacleGroup = new Group();
  
}


function draw() {
  background("white");
  var score = 0;
  
  stroke("white");
  fill("red")
  textSize(23);
  text("Score:"+ score, 400,50)
  
  
   if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -12;
   }
     
 monkey.velocityY = monkey.velocityY + 0.8
 
    if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
//   if(obstacle.isTouching(monkey)){
//         ground.velocityX = 0;
//         monkey.velocityY = 0;
//         obstacle.setVelocityXEach(0);
//         FoodGroup.setVelocityXEach(0);
//         obstacle.setLifetimeEach(-1);
//         FoodGroup.setLifetimeEach(-1);
    
    
//     }
   
  monkey.collide(ground);
  spawnFood();
    spawnObstacles();
drawSprites();
  
}

function spawnObstacles() {
  if(frameCount % 60 === 0) {
    obstacle = createSprite(800,320,10,40);
    obstacle.velocityX = -6;
    
    //add image to the obstacle 
    obstacle.addImage(obstacleImage);
    obstacle.scale=0.15;
    
    //lifetime to the obstacle     
    obstacle.lifetime = 300;
    
  }
}


function spawnFood() {
  //write code here to spawn the Food
  if (frameCount % 80 === 0) {
    banana = createSprite(600,250,40,10);
    banana.y = random(120,200);    
    banana.velocityX = -5;
    
     //assign lifetime to the variable
    banana.lifetime = 300;
    monkey.depth = banana.depth + 1;
    
    //add image of banana
     banana.addImage(bananaImage);
     banana.scale=0.05;
    
    //add each banana to the group
    FoodGroup.add(banana);
  }
}
