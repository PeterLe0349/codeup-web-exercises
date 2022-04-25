"use strict";
let price = 4;
console.log("Yay! I completed the warm-up!");

function fizzBuzz(input){
    //give it a value if it's empty
    if(input === undefined){
        input = 100;
    }

    for(let i= 1; i<=input; i++){
        if(i%3 == 0  && i%5 == 0){
            console.log("FizzBuzz");
        }
        else if(i%3 == 0){
            console.log("Fizz");
        } else if(i%5 == 0){
            console.log("Buzz");
        }else {
            console.log(i);
        }
    }

}
//fizzBuzz();



5%3 =