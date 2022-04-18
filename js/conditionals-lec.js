"use strict";
(function(){
    console.log("conditionals lecture console test");
let five = 35;

if( five === 5){
    console.log("That was five!");
} else {
    console.log("That wasn't the number 5!");
}

let ownsCow = false;
if(ownsCow === true){
    console.log("It's true");
} else{
    console.log("It\'s not a cow");
}
console.log(typeof true == "number");
let choice = false;
//ternary
(choice === true) ? console.log("Ternary is true") : console.log("Ternary is false");

function isItNumber(num){
     return (typeof num === "number") ? ownsCow= true :  ownsCow = false;
}
console.log(isItNumber(5));
console.log(isItNumber('rwer'));
console.log(isItNumber(true));
console.log(isItNumber(NaN));
console.log(isItNumber('343'));
let pizza = '';
//pizza = prompt("What kind of pizza do you like?").trim();
    switch (pizza){
        case "pepperoni":
            console.log("I like peppies too!");
            break;
        case "cheese":
            console.log("I love cheese!");
            break;
        default:
            console.log("Nasty pizza!");

    }




})()
