"use strict";

console.log("Hello from external Javascript.");
alert("Welcome to my Website!");
let favColor = prompt("What is your favorite color?");
alert("Amazing! "+ favColor + " is also my favorite color!!!");
// You have rented some movies for your kids: The little mermaid (for 3 days), Brother Bear (for 5 days, they love it), and Hercules (1 day, you don't know yet if they're going to like it). If price for a movie per day is $3, how much will you have to pay?


let dayMermaid = 3, dayBear = 5, dayHercules = 1, dayPrice = 3;
dayMermaid = prompt("How many days do you want Little Mermaid?");
dayBear = prompt("How many days do you want Brother Bear?");
dayHercules = prompt("How many days do you want Hercules?");
dayPrice = prompt("How much does it cost to rent a movie for a day?");

let totalPrice = parseInt((dayPrice))* ( parseInt(dayMermaid)+parseInt(dayBear)+parseInt(dayHercules) );
alert("You rented Little Mermaid for " + dayMermaid + " days. " + "You rented Brother Bear for " + dayBear + " days. " + "You rented Hercules for " + dayHercules + " days. " + "The rental fee for one day is: " + dayPrice+ ". "+" The total price for rentals is: $" + totalPrice  );

//     Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, they pay you a different rate per hour. Google pays $400, Amazon $380, and Facebook $350. How much will you receive in payment for this week? You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.
let googlePay = 0, googleHour = 0, amazonPay = 0, amazonHour = 0, facebookPay =0, facebookHour = 0;
googlePay = parseInt(prompt("What is your hourly wage for Google?"));
googleHour = parseInt(prompt("How many hours did you work for Google?"));
amazonPay = parseInt(prompt("What is your hourly wage for Amazon?"));
amazonHour = parseInt(prompt("How many hours did you work for Amazon?"));
facebookPay = parseInt(prompt("What is your hourly wage for Facebook?"));
facebookHour = parseInt(prompt("How many hours did you work for Facebook?"));
let totalWage = (googleHour*googlePay) + (amazonHour*amazonPay) + (facebookPay*facebookHour);
alert("Your hourly wage for Google is: $" + googlePay +" and you worked " + googleHour + " hours. " + "Your hourly wage for Amazon is: $" + amazonPay +" and you worked " + amazonHour + " hours. " + "Your hourly wage for Facebook is: $" + facebookPay +" and you worked " + facebookHour + " hours. " + " Your weekly salary is: " + totalWage);

// A student can be enrolled in a class only if the class is not full and the class schedule does not conflict with her current schedule.
let enroll = false;
let full = confirm("Click okay if the class full.")
let conflict = confirm("Click okay if there are schedule conflicts.")
enroll = (!full && !conflict);
alert("Enroll is possible: "+ enroll);


//     A product offer can be applied only if a person buys more than 2 items, and the offer has not expired. Premium members do not need to buy a specific amount of products.
let offer = false, moreThanTwo = false, expired = false, premium = false;
moreThanTwo = confirm("Press okay if you bought more than two items.");
expired = confirm("Press okay if the offer expired.");
premium = confirm("Press okay if you are a premium member");

offer = (moreThanTwo && !expired) || premium;

alert("You bought more than two items: " + moreThanTwo + ". The offer is expired: "+ expired +". You are a premium member: " +premium +".  You are eligible for the offer: " + offer);