var person;
var person_Image;
var ground, invisibleGround, groundImage;
var cloudsgroup, cloudimage;
var textgroup, text1, text2, text3, text4, text5;
var score = 0;
var text1group;
var back, back_image;

function preload()
{
  person_Image = loadImage("Images/person2.PNG");
  
  groundImage = loadImage("Images/ground2.png");

  back_image = loadImage("Images/bb1.PNG");

  cloudimage = loadImage("Images/cloud.png");
  
  text1 = loadImage("Images/pos1.PNG"); 
  text2 = loadImage("Images/pos2.PNG"); 
  text3 = loadImage("Images/pos3.PNG");
  text4 = loadImage("Images/neg1.PNG");
  text5 = loadImage("Images/neg2.PNG");
}

function setup()
 {
  createCanvas(600, 200);
  
  person = createSprite(50, 180, 40, 100);
  console.log(person);
  person.addImage("person", person_Image);
  //person.debug = true;
  person.scale = 0.1;
  //person.velocityX = 2;
  
  ground = createSprite(200, 180, 400, 20);
  ground.addImage("ground", groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -3;
  
  back = createSprite(300, 100, 600, 200);
  back.addImage("back", back_image);
  back.x= back.width/2;
  back.velocityX = -3;

  invisibleGround = createSprite(200, 190, 400, 10);
  invisibleGround.visible = false;
  
  textgroup = new Group();
  text1group = new Group();
  cloudsgroup = new Group();
}

function draw() 
{
  background(back_image);
  
  if(keyDown("space")) 
  {
    person.velocityY = -10;
  }
  //score = score + Math.round(getFrameRate() / 60);
  fill("red")
  textSize(18)
  text("score:" + score, 500, 30);
  person.velocityY = person.velocityY + 0.8
  
  if (ground.x < 0)
  {
    ground.x = ground.width/2;
  }
  person.collide(invisibleGround);

if(person.isTouching(textgroup))
{
  score = score + 10;
}

if(person.isTouching(text1group))
{
  score = score - 10;
}

  spawnClouds();
  spawnPosText();
  spawnnegText();
  drawSprites();
}
  
function spawnClouds() 
{
    //write code here to spawn the clouds
    if (frameCount % 60 === 0) 
    {
    var cloud = createSprite(600, 120, 40, 10);
    cloud.y = Math.round(random(80, 120));
    cloud.addImage(cloudimage);
    cloud.scale = 0.5;
    cloud.velocityX = -3;
    cloud.lifetime = 200;
    cloud.depth = person.depth;
    person.depth = person.depth + 1;
    cloudsgroup.add(cloud); 
    
  }
} 
    
function spawnPosText() 
{
     if(frameCount % 60 === 0) 
     {
       var text = createSprite(600, 165, 10, 40);
         text.velocityX = -6;
       var rand = Math.round(random(1, 3));
       switch(rand)
       {
       case 1:text.addImage(text1);
              break;
       case 2:text.addImage(text2);
              break;
       case 3:text.addImage(text3);
              break;
       default:break;    
      } 

      text.scale = 0.5;
      text.lifetime = 100;
      textgroup.add(text);
    }
}

function spawnnegText() 
{
     if(frameCount % 100 === 0) 
     {
       var text = createSprite(600, 165, 10, 40);
         text.velocityX = -6;
       var rand = Math.round(random(1, 2));
       switch(rand)
       {
       case 1:text.addImage(text4);
              break;
       case 2:text.addImage(text5);
              break;
     
       default:break;    
      } 

      text.scale = 0.5;
      text.lifetime = 100;
      text1group.add(text);
    }
}

