class Start
{
    constructor()
    {
this.title= createElement('h1');
this.input= createInput(" ");
this.day= createSelect();
this.month=createSelect();
this.year=createSelect();
this.submit= createButton("SUBMIT");

this.month.option(1);
  this.month.option(2);
  this.month.option(3);
  this.month.option(4);
  this.month.option(5);
  this.month.option(6);
  this.month.option(7);
  this.month.option(8);
  this.month.option(9);
  this.month.option(10);
  this.month.option(11);
  this.month.option(12);



  this.day.option(1);
  this.day.option(2);
  this.day.option(3);
  this.day.option(4);
  this.day.option(5);
  this.day.option(6);
  this.day.option(7);
  this.day.option(8);
  this.day.option(9);
  this.day.option(10);
  this.day.option(11);
  this.day.option(12);
  this.day.option(13);
  this.day.option(14);
  this.day.option(15);
  this.day.option(16);
  this.day.option(17);
  this.day.option(18);
  this.day.option(19);
  this.day.option(20);
  this.day.option(21);
  this.day.option(22);
  this.day.option(23);
  this.day.option(24);
  this.day.option(25);
  this.day.option(26);
  this.day.option(27);
  this.day.option(28);
  this.day.option(29);
  this.day.option(30);
  this.day.option(31);

  this.year.option(2012);
  this.year.option(2011);
  this.year.option(2010);
  this.year.option(2009);
  this.year.option(2008);
  this.year.option(2007);
  this.year.option(2006);
  this.year.option(2005);

  this.day.selected(1);
  this.month.selected(1);
  this.year.selected(2008);
    }
    display()
    {
      
          this.title.html("ENTER YOUR DETAILS ");
          this.title.position(displayWidth/4 -130,130);
          if(gamestate==0)
          {
           textSize(35);
           fill("black");
            text("Enter your name: ", displayWidth/12, 200);
            textSize(35);
              text("Select your date of birth: ",displayWidth/12,350);
              text("Select your month of birth: ",displayWidth/12,500);
              text("Select your year of birth: ",displayWidth/12,650);
          } 
//console.log(displayWidth);
        this.input.position(displayWidth/7-30, 325);
        //console.log(mouseX);
      //  console.log(mouseY);
        
    this.submit.position(displayWidth/1.5,displayHeight-20);

        this.day.position(displayWidth/12,500);
        this.month.position(displayWidth/12,650);
        this.year.position(displayWidth/12,800);

 this.submit.mousePressed(()=>
 {
  choice= new Choice();
  choice.display();
  gamestate=1;
 })
  

  
  this.day.changed(()=>
  
  {
  day= this.day.value();
  this.day.selected(day);
  console.log(day);
  });


  
  
this.month.changed(()=>
  
{
month= this.month.value();
this.month.selected(month);
console.log(month);
});

 
  this.year.changed(()=>
  
  {
  year= this.year.value();
  this.year.selected(year);
  console.log(year);
  });

    }
    hide()
    {
      this.input.hide();
      this.day.hide();
      this.month.hide();
      this.year.hide();
      this.title.hide();
      this.submit.hide();
    
    }

  }