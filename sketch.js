var backGround,backGroundImage;

var ground,groundImage;

var spiderMan,spiderManJumpingAnimation,spiderManAnimation;

var cloud,cloudImage,cloudGroup;

var score = 0;

var life = 3;

function preload() {
  groundImage = loadImage("ground-1.png");
  backGroundImage = loadImage("the background.png");
  coinImage = loadImage("coin sprite.png");
 // gameOverImage = loadImage("game over.png");
 // resetImage = loadImage("restart.png");
  spiderManJumpingAnimation = loadAnimation("spider man jumping_6.png", "spider man jumping_7.png")
  //controlButtonImage =  loadImage("controls button.png");
  //playButtonImage = loadImage("play button.png");
  cloudImage = loadImage("cloud.png");
  rockImage = loadImage("rock.png");

  spiderManAnimation = loadAnimation("spider man running_1.png", "spider man running_2.png", "spider man running_3.png", "spider man running_4.png", "spider man running_5.png", "spider man running_6.png", "spider man running_7.png", "spider man running_8.png", "spider man running_9.png", "spider man running_10.png", "spider man running_11.png");               
  
  
 /* carnageAnimation = loadAnimation("carnage walk_1.png", "carnage walk_2.png", "carnage walk_3.png", "carnage walk_4.png", "carnage walk_5.png", "carnage spin_1.png", "carnage spin_2.png", "carnage spin_3.png", "carnage spin_4.png","carnage spin_1.png", "carnage spin_2.png", "carnage spin_3.png", "carnage spin_4.png", "carnage spin_1.png", "carnage spin_2.png", "carnage spin_3.png", "carnage spin_4.png",  "carnage walk_1.png", "carnage walk_2.png", "carnage walk_3.png", "carnage walk_4.png", "carnage walk_5.png", "carnage walk_1.png", "carnage walk_2.png", "carnage walk_3.png", "carnage walk_4.png", "carnage walk_5.png", "carnage walk_1.png", "carnage walk_2.png", "carnage walk_3.png", "carnage walk_4.png", "carnage walk_5.png", "carnage slash_1.png", "carnage slash_2.png", "carnage slash_3.png", "carnage slash_1.png", "carnage slash_2.png", "carnage slash_3.png", "carnage slash_1.png", "carnage slash_2.png", "carnage slash_3.png");
  
  venomAnimation = loadAnimation("venom running 1.png", "venom running 2.png", "venom running 3.png", "venom running 4.png", "venom running 5.png", "venom running 6.png", "venom running 7.png", "venom running 8.png", "venom running 9.png", "venom running 10.png", "venom running 1.png", "venom running 2.png", "venom running 3.png", "venom running 4.png", "venom running 5.png", "venom running 6.png", "venom running 7.png", "venom running 8.png", "venom running 9.png", "venom running 10.png", "venom claw 1.png", "venom claw 2.png", "venom claw 3.png", "venom claw 4.png", "venom claw 5.png", "venom claw 6.png", "venom claw 7.png", "venom claw 8.png", "venom claw 9.png", "venom claw 10.png", "venom claw 1.png", "venom claw 2.png", "venom claw 3.png", "venom claw 4.png", "venom claw 5.png", "venom claw 6.png", "venom claw 7.png", "venom claw 8.png", "venom claw 9.png", "venom claw 10.png");
  
  lizardAnimation = loadAnimation("lizard running 1.png", "lizard running 2.png", "lizard running 3.png", "lizard running 4.png", "lizard running 5.png", "lizard running 6.png", "lizard running 7.png", "lizard running 8.png", "lizard running 1.png", "lizard running 2.png", "lizard running 3.png", "lizard running 4.png", "lizard running 5.png", "lizard running 6.png", "lizard running 7.png", "lizard running 8.png", "lizard running 1.png", "lizard running 2.png", "lizard running 3.png", "lizard running 4.png", "lizard running 5.png", "lizard running 6.png", "lizard running 7.png", "lizard running 8.png", "lizard kick 1.png", "lizard kick 2.png", "lizard kick 3.png", "lizard kick 4.png", "lizard kick 4.png", "lizard kick 4.png");
  
  electroAnimation = loadAnimation("electro walking_1.png", "electro walking_2.png", "electro walking_3.png", "electro walking_4.png", "electro walking_5.png", "electro walking_6.png", "electro walking_7.png", "electro walking_8.png", "electro walking_9.png", "electro walking_10.png");*/
}
function setup() {
  createCanvas(1000, 600);
  
  backGround = createSprite(0, 0, 1, 1);
  backGround.addImage(backGroundImage);
  backGround.scale = 1.2;
  
  ground = createSprite(700, 575, 1500, 70);
  ground.addImage(groundImage);
  ground.scale = 0.4;
  ground.visible = true;
  
  spiderMan = createSprite(60, 540, 10, 10);
  spiderMan.addAnimation("hero", spiderManAnimation);
  spiderMan.scale = 2;
  spiderMan.setCollider("rectangle", 0, 0, 50,50);
  //spiderMan.debug = true;
  
    
  cloudGroup = new Group();
  rockGroup = new Group();
  coinGroup = new Group();
  
  createLife();
  
}

function draw() {
  background ("red");


  ground.velocityX = -2;
  if (ground.x < 0){
    ground.x = 700;
  }

  if(keyDown("W") && spiderMan.y>=450){

    spiderMan.velocityY = -20;


  }

  if(life === 2){

   life1.visible = false;

  }
  else if(life === 1){

   life2.visible = false;

  }
  else if(life === 0){

  life3.visible = false;
  //gameEnd();
  }

 

    for(var i=0;i< rockGroup.length;i++){
      if(rockGroup.get(i).isTouching(spiderMan)){ 
     rockGroup.get(i).destroy();
     life = life-1;
   }
   }
  



   

  



  

console.log(spiderMan.y);

  spiderMan.velocityY = spiderMan.velocityY + 0.8;
  
  spiderMan.collide(ground);

  spawnClouds();
  spawnObstacles();
  spawnCoins();


  for(var i=0;i< coinGroup.length;i++){
     if(coinGroup.get(i).isTouching(spiderMan)){ 
    coinGroup.get(i).destroy();
    score = score+1;
  }
  }

  
  
  drawSprites();

  fill("red");
  textSize(20);
  text("Score :"+ score, 50,580);

}
function spawnObstacles() {
  if (frameCount % 130 === 0) {
    rock = createSprite(1100, ground.y - 55, 20, 20);
    rock.velocityX = -7;
    rock.addImage(rockImage);
    rock.lifetime = 300;
    rockGroup.add(rock);
  }
}
  function spawnClouds(){

  if (frameCount % 160 === 0) {
    cloud = createSprite(1100, Math.round(random(20, 250)), 20, 20);
    cloud.velocityX = -6;
    cloud.addImage(cloudImage);
    cloud.lifetime = 300;
    spiderMan.depth = cloud.depth;
    spiderMan.depth = cloud.depth + 1;
    cloudGroup.add(cloud);
  }

}
function spawnCoins(){
  if (frameCount % 100 === 0) {
    coin = createSprite(1100, Math.round(random(300, spiderMan.y)), 20, 20);
    coin.addImage(coinImage);
    coin.velocityX = -6;
    coin.scale = 0.15;
    coinGroup.add(coin);
  }  
}

function createLife(){

life1 = createSprite(900,50, 50, 50);
life1.scale = 0.3;
life2 = createSprite(940,50, 50, 50);
life2.scale = 0.3;
life3 = createSprite(980,50, 50, 50);
life3.scale = 0.3;

}

/*function spawnObstacles(){
  if (frameCount % 400 === 0) {
    rand = Math.round(random(1, 5));
    if (rand === 1) {
      carnage = createSprite(1100, 0, 20, 20);
        carnage.addAnimation("boss1", carnageAnimation);
        carnage.lifetime = 300;
        carnage.velocityX  = -14;
        carnage.velocityY = Math.round(random(5, 8));
        carnage.setCollider("rectangle", 0, 0, carnage.width - 10, carnage.height - 10);
        carnageGroup.add(carnage);
    }
    
    if (rand === 2) {
      electro = createSprite(1100, 0, 20, 20);
        electro.addAnimation("boss2", electroAnimation);
        electro.lifetime = 200;
        electro.velocityX = -14;
        electro.velocityY = Math.round(random(5, 8));
        electro.scale = 1.5;

        electroGroup.add(electro);
    }   

    
    if (rand === 3) {
      lizard = createSprite(1100, 0, 20, 20);
      lizard.addAnimation("boss3", lizardAnimation);
      lizard.velocityX = -14;
      lizard.velocityY = Math.round(random(5, 9));
 
      lizardGroup.add(lizard);
    }
    if (rand === 5) {
      venom = createSprite(1100, 0, 20, 20);
      venom.addAnimation("boss4", venomAnimation);
      venom.lifetime = 300;
      venom.velocityX = -14;
      venom.velocityY = Math.round(random(5, 8)); 
      venom.scale = 1.7;
      venom.setCollider("rectangle", 0, 0, venom.width - 50, venom.height - 50)
      venomGroup.add(venom);
    }
  }
}}
}*/