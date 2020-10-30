class Sports
{
    constructor()
    {

this.ounce= createButton("5.75 ounce");
this.ounce2= createButton("5.52 ounce")
this.ounce3= createButton("6 ounce");

this.rugby= createButton("12");
this.rugby2= createButton("11");
this.rugby3= createButton("13");

this.fifa= createButton("Spain");
this.fifa2= createButton("France");
this.fifa3= createButton("USA");

this.tennis= createButton("Mango");
this.tennis2= createButton("Pineapple");
this.tennis3= createButton("Guava");

this.strike= createButton("Turkey");
this.strike2= createButton("Ostrich");
this.strike3= createButton("Flamingo");

this.question1= createElement('h2');
this.question2= createElement('h2');
this.question3= createElement('h2');
this.question4= createElement('h2');
this.question5= createElement('h2');
    }
    display()
    {
        if(gamestate==5)
        {


        background(255, 189,55);
      
this.question1.html("What is the weight of a cricket ball? ");
this.question2.html("How many players are there in a Rugby League Team? ");
this.question3.html("Who won the FIFA women's world cup in 2019? ");
this.question4.html(" In tennis, what piece of fruit is found at the top of the men's Wimbledon trophy?");
this.question5.html("In bowling, what is the term given for three consecutive strikes?")



 choice.hide();
        
        




    






        }
    }
}