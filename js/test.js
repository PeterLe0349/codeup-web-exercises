"use strict";
//Immediate Invoke Function - security protect changes and access
(function() {
    'use strict';

// this code will produce a console log every second
// when count >= max, the interval is cancelled, and the logging will stop

    var count = 0;
    var max = 10;
    var interval = 1000; // interval time in milliseconds

    var intervalId = setInterval(function () {
        if (count >= max) {
            clearInterval(intervalId);
            console.log('All done');
        } else {
            count++;
            console.log('Repeating this line ' + count);
        }
    }, interval);






// DONT GO UNDER IIFE
}());







//help with debugging
/*
console.log("This is from an External file");

let testVar = "Can  you see?";
console.log(testVar);
console.log( 5+5, "should be 10", 'hi');

//Alert - alert (argument)
//Confirm - return a boolean value > confirm(question)
//Prompt - prompt(stringQuestion) - returns a string
*/
//alert ("Hello Umbriel");

// let name = prompt("What is your name?");
// console.log(name);
//
// let validName = confirm("You entered: " + name + ". Is this correct?");
// console.log(validName);