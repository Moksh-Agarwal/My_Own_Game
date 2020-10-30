class Doctor
{
    costructor()
    {
        this.next= createButton("NEXT");
this.title= createElement();
this.thermometer= createButton("THERMOMETER");
this.stethoscope=createButton("STETHOSCOPE");
this.injection= createButton("INJECTION");
this.mask= createButton("MASK");
this.bp =createButton("BLOOD PREESSURE MACHINE");

    }
    display()
    {

        if(gamestate==4)
        {
        background(255, 189,55);
        choice.hide();





         thermometer=createSprite();
         thermometer.addImage(thermometer_img);
         thermometer.scale=0.3;

         stethoscope= createSprite();
         stethoscope.addImage(stethoscope_img);

         injection= createSprite();
         injection.addImage(injection_img);

         mask= createSprite();
         mask.addImage(mask_img);

         bp= createSprite()
         bp.addImage(bp_img);

         if(round==0)
         {
         thermometer.visible= true;
         stethoscope.visible=false;
         injection.visible= false;
         mask.visible= false;
         bp.visible= false;
         this.thermometer.mousePressed(()=>
         {
         round=1;
         })
         }


         if(round==1)
{
    thermometer.visible= false;
    stethoscope.visible=true;
    injection.visible= false;
    mask.visible= false;
    bp.visible= false;
this.stethoscope.mousePressed(()=>
         {
         round=2;
         })

}
if(round==2)
{
    thermometer.visible= false;
    stethoscope.visible=false;
    injection.visible= true;
    mask.visible= false;
    bp.visible= false;
this.injection.mousePressed(()=>
         {
         round=3;
         })

}


if(round==3)
{
    thermometer.visible= false;
    stethoscope.visible=false;
    injection.visible= false;
    mask.visible= true;
    bp.visible= false;
this.mask.mousePressed(()=>
         {
         round=4;
         })

}

if(round==4)
{
    thermometer.visible= false;
    stethoscope.visible=false;
    injection.visible= false;
    mask.visible= false;
    bp.visible= true;
this.bp.mousePressed(()=>
         {
         round=5;
         })

}

if(round==5)
{
this.next.show();
}
this.next.mousePressed(()=>
{
    thermometer.visible= false;
    stethoscope.visible=false;
    injection.visible= false;
    mask.visible= false;
    bp.visible= false;


    this.thermometer.hide();
    this.bp.hide();
    this.stethoscope.hide();
    this.mask.hide();
    this.injection.hide();
    this.next.hide();
    this.title.hide();
    
})
         drawSprites();

        

        }
    }
}