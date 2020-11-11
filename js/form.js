class form{
    constructor(){

            this.input = createInput("Name");
            push();
            fill("red")
            this.button = createButton('Start');
            pop();
            this.greeting = createElement('h2');
            this.title = createElement('h2');
            this.reset = createButton('Reset');
          
    }
    display(){
        this.title.html("shooter game");
        this.title.position(displayWidth/2 - 50, 0);
    
        this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
        this.button.position(displayWidth/2 + 30, displayHeight/2);
        this.reset.position(displayWidth-100,20);

    
      }
}