"use strict";
//Immediately invoked function expression IIFE
 (function(){
     //variables
    let myName = "Peter"
    console.log("Hello " +myName+ "!");
    //constants don't let the variables change

    const pi = 3.415
    console.log("PI is: "+ pi);
    //pre and post addition
     let x = 0;
     console.log("Original x is: " + x+ ".\nX with pre-increment is: " + (++x) + ". X with post-increment: " + (x++) + "."
        + "\nFinal X is: " + x);


     //CONVERTING STRINGS | NUMBERS
     x.toString();
     console.log(x.toString());
     console.log(pi.toFixed(1));
    //CONVERT number to string by using Number('123)
    //use NaN number a number to determine if a string can be converted to a number
     console.log("Can convert to a number:" + isNaN('123'));
    //use parseInt parseFloat to convert string to number
     console.log(parseInt('123abc'));
     console.log(parseInt('abc123'));

     //--------------------------------------------------------------------------------
     //--------------------------------------------------------------------------------
     //STRING CONTROL
     let playString = " abcdefghijklmnopqrstuvwxyz  ";
     console.log("The string is: \n" + playString);
     // .length: property that describes the number of characters in the string.
     console.log("The length of the string is: " + playString.length);

     //         .indexOf(char): returns the index of the specified character in the string.
     let char = 'b'
     console.log("The location of the letter: "+ char+" is: " + playString.indexOf(char));
     //         .replace(find, replace): returns a copy of the string after performing a substitution.
     console.log("Replace function: "+ playString.replace('def', 'ZZZ'));
     //         .substring(fromIndex, toIndex): returns a subset of the original string based on the provided indices.
     console.log("The subset at these indices are: " + playString.substring(12, 25));
     //         .toUpperCase(): returns a copy of the string in all upper case.
     console.log("Upper case of the string is: " + playString.toUpperCase());
     // .toLowerCase(): returns a copy of the string in all lower case.
     console.log("Lower case of the string is: " + playString.toLowerCase());
 // .trim(): returns a copy of the string with whitespace at the beginning and end removed.
     console.log("The trim of whitespace at end and beginning is: \n" + playString.trim());
// NAN is like an !   >>>>>     !-2 = false,  isNaN(-1) = false
     //--------------------------------------------------------------------------------
     //--------------------------------------------------------------------------------
//*************ALERT CONFIRM PROMPT - SPAM POPUPS *************
     //alert message
    // alert("This is an alert message.");
     //confirm
     //confirm("Do you want to do XYZ?");
     //get user input
     //let userInput = prompt("Please enter something: ");
     //--------------------------------------------------------------------------------
     //--------------------------------------------------------------------------------
     //@@@@         FUNCTIONS
     function greet(){
         let name = prompt("What is your name?");
         alert("Hello " + name +"!");
     }

     //RETURN will stop at first return
     function returnStop(){
         let something = 4;
         console.log("Hi1");
         console.log("Hi2");
         //return something;
         console.log("Hi3");
         return something-1;

     }

     //console.log(returnStop());

     //ANONYMOUS FUNCTION , no name for function and store it in a variable > function expression instead of function declaration
     let stranger = function(x) {
         return x +1;
     }
     stranger(2);
     //let two = stranger(2);
     //console.log("Anonymous function output is: " + two);

     //***** Distinguish local and global variables > IE variable defined outside and inside a function
     //Local precedes global variables
     //--------------------------------------------------------------------------------
     //--------------------------------------------------------------------------------
     //@@@@         CONDITIONALS
    // let fruit = prompt("What fruit do you like to eat?");
    //  if(fruit === "apple"){
    //      alert("What a coincidink!  I like apples too!");
    //  } else if(fruit === "peach"){
    //      alert("Not bad!  I like peaches too!");
    //  } else if(fruit === ""){
    //      alert("You like NOTHING!!!!!!!!");
    //  }
    //  else {
    //      alert("You got horrible taste!");
    //  }
     //*** TERNARY OPERATOR shorthand IF ELSE > should not use for code readability
     let tern = false;
     //(tern) ? alert("I'm using ternary") : alert("I'm not using ternary");

     //*** SWITCH instead of many else if > use switch for code readability | break is not required but causes *** falling-through *** statements, NOT RECOMMENDED

     // let pizzaPreference = prompt("What kind of pizza do you like?")
     // switch(pizzaPreference){
     //     case ("pepperoni"):
     //         alert("Hail to the PEPPERONIS!");
     //         break;
     //     case "cheese":
     //         alert("Not bad for being cheesy!");
     //         break;
     //     default:
     //         alert("You have horrible pizza enlightment!");
     //         break;
     // }







 })();


 (function () {
     var iffeVar = "I'm local to the IIFE.";
 })();
