class Interior
{
    constructor()
    {
        this.next= createButton("NEXT");
        this.title= createElement('h2');
       
    }
    display()
    {
        if(gamestate==2)
        {
            background(255, 189,55);
        choice.hide();
        this.title.html("CLICK TO PLACE THE OBJECTS IN THE CORRECT POSITION")
        this.next.position(displayWidth/1.5,displayHeight-20);
this.title.position(displayWidth/9,130);


flower= createSprite();
flower.addImage(flower_img);
flower.scale=0.5;
flower.visible=false;

bed=createSprite(displayWidth/1.5, displayHeight/3);
bed.addImage(bed_img);
bed.scale=0.3;
bed.visible= false;


sofa= createSprite(displayWidth/2, displayHeight/2);
sofa.addImage(sofa_img);
sofa.scale=0.3;
sofa.visible= false;


dining= createSprite(displayWidth/1.5, displayHeight/2);
dining.addImage(dining_img);
dining.scale=0.2;
dining.visible= false;


table= createSprite(displayWidth/1.5, displayHeight/2);
table.addImage(table_img);
table.scale=0.3;
table.visible=false;
if(mousePressedOver(flower))
{
    flower.visible= true;
}
if(mousePressedOver(bed))
{
    bed.visible= true;
}
if(mousePressedOver(sofa))
{
    sofa.visible=true;

}
if(mousePressedOver(dining))
{
    dining.visible= true;

}
if(mousePressedOver(table))
{
    table.visible= true;
}
       
this.next.mousePressed(()=>
        {
            
         flower.visible=false;
         table.visible= false;
         dining.visible=false;
         bed.visible=false;
         sofa.visible=false;
         gamestate=1;
         console.log(table);



         
         
         this.next.hide();
         this.title.hide();

        // choice= new Choice();
         choice.display();
         
        })
drawSprites();

        }
    }
}