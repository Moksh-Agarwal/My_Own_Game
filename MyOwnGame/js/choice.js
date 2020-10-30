class Choice
{
    constructor()
    {
        this.heading= createElement('h1');
        this.inbu= createButton("Interior Designer");
        this. debu= createButton("Dentist");
        this.dobu= createButton("Doctor");
        this.spbu=createButton("Sportsman");
        this.scbu=createButton("Scientist");
                  
    }
    display()
    {
        if(gamestate==1)
        {
      background(255, 189,55);
        start.hide();
        this.inbu.position(displayWidth/11, displayHeight/1.68);
        this.debu.position(displayWidth/2.45, displayHeight/1.68);
        this.dobu.position(displayWidth/1.47, displayHeight/1.68);
        this.spbu.position(displayWidth/4, displayHeight/1.1);
        this.scbu.position(displayWidth/1.975, displayHeight/1.1);
        
        this.heading.html(" CHOOSE YOUR AVATAR: ");
        this.heading.position(displayWidth/4 -30,130);
     interior= createSprite(displayWidth/8, displayHeight/3) 
  interior.addImage(interior_img);
  interior.scale=0.3;
     
      dentist= createSprite(displayWidth/2.5, displayHeight/3) ; 
      dentist.addImage(dentist_img);
      dentist.scale=0.3;

      doctor= createSprite(displayWidth/1.5, displayHeight/3) ; 
      doctor.addImage(doctor_img);
      doctor.scale=0.3;

      sportsman= createSprite(displayWidth/4, displayHeight/1.5) ; 
      sportsman.addImage(sportsman_img);
      sportsman.scale=0.4;

      scientist= createSprite(displayWidth/2, displayHeight/1.5) ; 
      scientist.addImage(scientist_img);
      scientist.scale=0.3;




      this.inbu.mousePressed(()=>
      {
        gamestate=2;
       intpage= new Interior();
     
       
      })

       this.debu.mousePressed(()=>
      {
     denpage= new Dentist();
     gamestate=3;
      })


this.dobu.mousePressed(()=>
{
  docpage= new Doctor();
  gamestate=4;
})

this.spbu.mousePressed(()=>
{
 sportpage= new Sports();
  gamestate=5;
})
 
this.scbu.mousePressed(()=>
{
 scienpage= new Science();
 gamestate=6;
})

     
     drawSprites();
        }
       
}
 
hide()
{
  this.heading.hide();
  this.inbu.hide();
  this. debu.hide();
  this.dobu.hide();
  this.spbu.hide();
  this.scbu.hide();
  interior.visible=false;
  dentist.visible=false;
  doctor.visible=false;
  sportsman.visible=false;
  scientist.visible=false;
}

}
   