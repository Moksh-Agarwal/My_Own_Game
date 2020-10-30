class Dentist
{
    constructor()
    {
        this.title=createElement('h1');
        this.button=createButton("NEXT");
        fill('black');
    this.cavity= createSprite(displayWidth/3,displayHeight/4,10,10);
    this.cavity2=createSprite(displayWidth/7,displayHeight/5, 10,10);  
    this.cavity3=createSprite(displayWidth/5,displayHeight/5, 10,10);
    this.cavity4=createSprite(displayWidth/6,displayHeight/5, 10,10);
    this.cavity5=createSprite(displayWidth/3,displayHeight/5, 10,10);
    this.cavity6=createSprite(displayWidth/5,displayHeight/4, 10,10);
    this.cavity7=createSprite(displayWidth/7,displayHeight/3, 10,10);
    this.cavity8=createSprite(displayWidth/7,displayHeight/6, 10,10);
    this.cavity9=createSprite(displayWidth/2,displayHeight/2, 10,10);
    this.cavity10=createSprite(displayWidth/6,displayHeight/6, 10,10);
    }
    display()
    {
    if(gamestate==3)
        {

background("white");
choice.hide();
this.title.html("CLICK THE BLACK SPOTS TO WIN ");
this.title.position(displayWidth/4 -130,130);
this.button.position(displayWidth/1.5,displayHeight-20)

if(mousePressedOver(this.cavity))
{
this.cavity.visible=false;
}
if(mousePressedOver(this.cavity2))
{
this.cavity2.visible=false;
}
if(mousePressedOver(this.cavity3))
{
this.cavity3.visible=false;
}
if(mousePressedOver(this.cavity4))
{
this.cavity4.visible=false;
}
if(mousePressedOver(this.cavity5))
{
this.cavity5.visible=false;
}
if(mousePressedOver(this.cavity6))
{
this.cavity6.visible=false;
}
if(mousePressedOver(this.cavity7))
{
this.cavity7.visible=false;
}
if(mousePressedOver(this.cavity8))
{
this.cavity8.visible=false;
}if(mousePressedOver(this.cavity9))
{
this.cavity9.visible=false;
}

if(mousePressedOver(this.cavity10))
{
this.cavity10.visible=false;
}
this.button.mousePressed(()=>
{
    
 gamestate=1;
 console.log(gamestate);
 this.button.hide();
 this.title.hide();
 this.cavity.visible=false;
 this.cavity2.visible=false;
 this.cavity3.visible=false;
 this.cavity4.visible=false;
 this.cavity5.visible=false;
 this.cavity6.visible=false;
 this.cavity7.visible=false;
 this.cavity8.visible=false;
 this.cavity9.visible=false;
 this.cavity10.visible=false;
 choice= new Choice();
 choice.display();
})
    drawSprites(); 
}

    }
}
