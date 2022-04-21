"use strict";
    console.log("----while script----");
    console.log("While loop");
    let two = 0;
    const stoppingNumber = 65537;

   // powerOfTwo(2);


function powerOfTwo(num){
        while(num<stoppingNumber){
            console.log(num);
            num *=2;
        }
}
//create random between to numbers
function createRandomBetween(x,y){
    x = parseInt(x);
    y= parseInt(y);
    let random = Math.floor(Math.random() * (y-x+1)) + x;
    return random;
}

//sell cones until you can't sell anymore
//do while loop
function sellCones(){
    let conesRemaining = createRandomBetween(50,100);
    console.log("Starting the day with this amount of cones: "+ conesRemaining);
    let coneOrder = 0;
    do {
        coneOrder = createRandomBetween(1,5);
        if(coneOrder > conesRemaining){
            console.log("I don't have enough cones. You ordered " + coneOrder + ". We only have " + conesRemaining + ". Yeah sold enough for today!");
            break;
        } else {
            console.log(" You were sold " + coneOrder + ". We have " + (conesRemaining-coneOrder));
            conesRemaining -= coneOrder;
        }

    }while(conesRemaining > coneOrder)
    console.log("DONE FOR THE DAY! ")
}
sellCones();


