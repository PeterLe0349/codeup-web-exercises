"use strict";
//Immediate Invoke Function - security protect changes and access
(function() {


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

    let name = prompt("What is your name?");
    console.log(name);

    let validName = confirm("You entered: " + name + ". Is this correct?");
    console.log(validName);

}())
