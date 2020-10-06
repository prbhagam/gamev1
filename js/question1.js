class Question1 {
    constructor() {
        this.button = createButton('');
        this.button2 = createButton('');
        this.button3 = createButton('')
        this.button4 = createButton("");
        this.button5 = createButton('');
        this.button6 = createButton('');
        this.button7 = createButton('');
        this.button8 = createButton('');
        this.button9 = createButton('');
        this.question1 = createElement('h3');
        this.question2 = createElement('h3');
        this.question3 = createElement('h3');
        this.title = createElement('h2');
        this.conf = createElement('h3');
        this.inc = createElement('h3');
    }

    display() {
        this.question2.hide();
        this.button4.hide();
        this.button5.hide();
        this.button6.hide();
        this.title.html("RGB Color Picker Game");
        this.title.position(displayWidth/2 -90, 0);

        this.question1.html("What color do you think is rgb(34,139,34)?");
        this.question1.position(displayWidth/2-130,200);
        
        this.button.position(displayWidth/2 -30, displayHeight/2);
        this.button2.position(displayWidth/2+130, displayHeight/2);
        this.button3.position(displayWidth/2-190, displayHeight/2);
        this.button.style("background-color: rgb(34,139,34);")
        this.button2.style("background-color: red;")
        this.button3.style("background-color: blue;")

        this.button.mousePressed(()=>{
            
           this.conf.html("That is the correct answer!");
           this.conf.position(displayWidth/2-100, displayHeight/2+200);
           if (score === 0 ) {
               score++;
           } 
         
           this.inc.hide();
        })

            this.button4.show();
            this.button5.show();
            this.button6.show();
            this.question2.show();

        this.button2.mousePressed(()=>{
            this.inc.html("That is incorrect. Try again!")
            this.inc.position(displayWidth/2-100, displayHeight/2+200);
        })

        this.button3.mousePressed(()=>{
           
            this.inc.html("That is incorrect. Try again!")
            this.inc.position(displayWidth/2-100, displayHeight/2+200);
        })
    }


        display1() {
            this.question1.hide();
            this.button.hide();
            this.button2.hide();
            this.button3.hide();
            this.question2.html("What color do you think is rgb(84,61,63)?");
            this.question2.position(displayWidth/2-130,200);


            this.button4.position(displayWidth/2 -30, displayHeight/2);
            this.button5.position(displayWidth/2+130, displayHeight/2);
            this.button6.position(displayWidth/2-190, displayHeight/2);
            this.button4.style("background-color: orange;")
            this.button5.style("background-color: rgb(84,61,63);")
            this.button6.style("background-color: yellow;")

            this.button5.mousePressed(()=>{
            
            this.conf.html("That is the correct answer!");
            this.conf.position(displayWidth/2-100, displayHeight/2+200);
            if (score === 1) {
                score++;
            }
          
            this.inc.hide();
        })

            this.button4.mousePressed(()=>{
            this.inc.html("That is incorrect. Try again!")
            this.inc.position(displayWidth/2-100, displayHeight/2+200);
        })

            this.button6.mousePressed(()=>{
           
            this.inc.html("That is incorrect. Try again!")
            this.inc.position(displayWidth/2-100, displayHeight/2+200);
        })
        }

        display2() {
            this.question2.hide();
            this.question1.hide();
            this.button4.hide();
            this.button5.hide();
            this.button6.hide();
            this.question3.html("What color do you think is rgb(85,154,154)?");
            this.question3.position(displayWidth/2-130,200);


            this.button7.position(displayWidth/2 -30, displayHeight/2);
            this.button8.position(displayWidth/2+130, displayHeight/2);
            this.button9.position(displayWidth/2-190, displayHeight/2);
            this.button7.style("background-color: rgb(85,154,154);")
            this.button8.style("background-color: purple;")
            this.button9.style("background-color: aqua;")

            this.button7.mousePressed(()=>{
            
            this.conf.html("That is the correct answer!");
            this.conf.position(displayWidth/2-100, displayHeight/2+200);
            if (score === 2) {
                score++;
            }
          
            this.inc.hide();
        })

            this.button8.mousePressed(()=>{
            this.inc.html("That is incorrect. Try again!")
            this.inc.position(displayWidth/2-100, displayHeight/2+200);
        })

            this.button9.mousePressed(()=>{
           
            this.inc.html("That is incorrect. Try again!")
            this.inc.position(displayWidth/2-100, displayHeight/2+200);
        })
        }

    hide() {
        this.title.hide();
        this.conf.hide();
        this.inc.hide();
        this.question1.hide();
        this.button.hide();
        this.button2.hide();
        this.button3.hide();
        this.button4.hide();
        this.button5.hide();
        this.button6.hide();
        this.question2.hide();
    }

    show() {
        this.button4.show();
        this.button5.show();
        this.button6.show();
        this.question2.show();
    }
}