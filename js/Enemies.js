class Enemies{
    constructor(){
    if(frameCount%120===0){
        this.enemy =createSprite(random(0,displayWidth),0,50,50);
       // enemy.addAnimation("Img",enemyImg)
        this.enemy.velocityY=7;
        this.Visiblity =255;
        if(this.enemy.y<displayHeight){
            gameState=2;
        }
if (this.enemy.x - player.x < player.width/2 + this.enemy.width/2
    && player.x - this.enemy.x < player.width/2 + this.enemy.width/2
    && this.enemy.y - player.y < player.height/2 + this.enemy.height/2
    && this.enemy.y - player.y < player.height/2 + this.enemy.height/2){
        this.enemy.tint(255,this.Visiblity);

}
    }
}
display(){
    this.enemy=rect(random(0,displayWidth),0,50,50);
}
}
