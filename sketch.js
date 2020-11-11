
var back,backImg;
var player,player_Img;
var gameState = 1;
var enemy, enemy_img;


function preload(){

    backImg=loadImage("images/sf.png")
    player_Img=loadAnimation("images/player1.png","images/player1.png","images/player2.png","images/player2.png");
    enemy_img=loadAnimation("images/enemy1.png","images/enemy1.png","images/enemy2.png","images/enemy2.png") 
}
function setup(){
    var canvas = createCanvas(displayWidth,displayHeight-50);
 

    back=createSprite(displayWidth/2,displayHeight/2);
    back.addImage("back",backImg);


    player=createSprite(200,displayHeight-200,100,100);
    player.addAnimation("Img",player_Img);
    player.debug=true;
    player.scale=0.5;

    //Form=new form();
}
function draw(){
    //background();
    //Form.display();
    back.velocityY=7;
    if(back.y>1000){
    back.y=displayHeight/2;
    }



    player.x=mouseX;
    //console.log(gameState);


    
   drawSprites();
   spawnEnemies();
}
function spawnEnemies(){
    if(frameCount % 300 === 0){

        enemy = createSprite(random(0,displayWidth),0,50,50);
        enemy.addAnimation("img", enemy_img);
        enemy.scale=0.3;
        enemy.lifetime=50;
        enemy.velocityY=7;
        if(enemy.y<displayHeight){
            gameState=2;
        }

        enemy.debug=true;

    }
    if(isTouching(enemy,player)){
        console.log("true");

    }
    else{
        console.log("false");
    ]
}
function isTouching(object1, object2){
    if(object1.x - object2.x < object2.width/2 + object1.width/2
        && object2.x - object1.x < object2.width/2 + object1.width/2
        && object1.y - object2.y < object2.height/2 + object1.height/2
        && object2.y - object1.y < object2.height/2 + object1.height/2)
        {
     return true;

   }
   else{
     return false;
   } 
}
