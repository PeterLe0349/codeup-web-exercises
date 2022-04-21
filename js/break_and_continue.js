"use strict";
(function(){
    console.log("----Break and Continue Script----");
console.log("Break and Continue test");
function askOdd(num){
    while(true){
        num = prompt("Enter an odd number between 1 and 50.");
        if (isNaN(parseFloat(num))){
            continue;
        }
        num = parseInt(num);
        if( (num > 0) && (num <= 50) && (num%2==1) ) {
            console.log("Got it");
            break;
        }
    }
    return num;
}
//askOdd();

function countOddToFifty(input) {
    input = parseFloat(askOdd());
    for (let i = 0; i < 50; i++) {
        if (input == i) {
            console.log("Yikes! Skipping number " + input);
            continue;
        } else if (i % 2 == 0) {
            continue;
        } else {
            console.log("Here is an odd number: " + i);
        }
    }
}
//countOddToFifty();



}())