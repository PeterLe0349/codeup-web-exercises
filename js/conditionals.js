"use strict";
(function(){



/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
// function analyzeColor(str){
//     if(str === 'blue' ){
//         return "blue like blueberries";
//     } else if (str ==='red'){
//         return 'bloody red!';
//     } else if (str === 'cyan'){
//         return 'what\'s cyan';
//     }  else if(str === 'violet'){
//         return 'violet is like purple'
//     }
//     else{
//             return "some other color";
//     }
// }


// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */
console.log("Random test: "  + randomColor + ", " + analyzeColor(randomColor));


/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */
function analyzeColor(str){
    switch (str){
        case "red":
            return 'bloody red';
        case 'blue':
            return 'blueberry blues';
        case 'cyan':
            return 'what the heck is cyan!';
        case 'orange':
            return 'citrus orange';
        case 'yellow':
            return 'daily yellow';
        case 'green':
            return 'murky green';
        case 'indigo':
            return 'color indigo of raindbow';
        case ' violet':
            return 'it\'s a violet flower';
        default:
            return 'unknown color!';
    }
}
/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */
//let userColor = prompt("What color do you like?(coded:red,blue,cyan)");
//alert(analyzeColor(userColor));
/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
function calculateTotal(luckyNum, total){
    switch(luckyNum){
        case 0:
            return total;
        case 1:
            return (total - (total*.1));
        case 2:
            return (total - (total*.25));
        case 3:
            return (total - (total*.35));
        case 4:
            return (total - (total*.5));
        case 5:
            return 0;
    }
}

    console.log(calculateTotal(0, 100)); // returns 100
    console.log(calculateTotal(1, 100)); // returns 50
    console.log(calculateTotal(2, 100)); // returns 50
    console.log(calculateTotal(3, 100)); // returns 50
    console.log(calculateTotal(4, 100)); // returns 0
    console.log(calculateTotal(5, 100)); // returns 0
    /**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);
//let userTotal = prompt("What's your total bill?");
//alert("Your lucky number is "+ luckyNumber +". Your original total bill is: " + userTotal + ". Your new total bill with the discount is: "+ calculateTotal(luckyNumber, userTotal));

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */
let enterNumber = false;

let choice = confirm("Press okay if you want to enter a number");
if(choice === true){
    let num = prompt("Enter a number:");
    if(!isNaN(num)) {
        num = parseFloat(num);
        if (num % 2 === 0) {
            alert("Entered number is even: " + num);
        } else if (num % 2 === 1 || num %2 === -1) {
            alert("Entered number is odd: " + num);
        }
        alert("The number plus 100 is: " + (100+num))
        if (num >= 0){
            alert("Number is positive!");
        }else {
            alert("Number is negative!");
        }
    }
    else{
        alert("Entered input is not a number: "+ num);
    }

}


})()