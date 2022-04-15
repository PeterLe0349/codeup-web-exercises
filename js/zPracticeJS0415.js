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







 })();


