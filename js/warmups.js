"use strict";
$(document).ready(function(){
    console.log("hi");
    fetch(`https://quotes.rest/qod`).then(result => result.json()).then( finale => console.log(finale));

});









// SEE IF TWO Kangaroos will meet based on starting point and velocity
// function kangaroo(x1, v1, x2, v2) {
//     // Write your code here
//     let aPoint = x1+v1;
//     let bPoint = x2+v2;
//     if( (aPoint == bPoint) || (x1==x2)){
//         return "YES";
//     }
//     if ( (aPoint - bPoint) > 0 ){
//         if(v2 > v1){
//             if((aPoint-bPoint)%(v2-v1) == 0){
//                 return "YES";
//             }else{
//                 return "NO";
//             }
//         }else {
//             return "NO";
//         }
//     } else {
//         if(v1 > v2){
//             if((aPoint-bPoint)%(v1-v2) == 0){
//                 return "YES";
//             }else{
//                 return "NO";
//             }
//         }else {
//             return "NO";
//         }
//     }
//
// }


// function kangaroo(x1, v1, x2, v2) {
//     // Write your code here
//     let aPoint = x1+v1;
//     let bPoint = x2+v2;
//     let met = "NO";
//     let prevDistance = Math.abs(aPoint-bPoint);
//     let curDistance = Math.abs(aPoint-bPoint);
//     let increasingDistance = false;
//     let jumpCount = 0;
//
//     if(aPoint == bPoint){
//         met = "YES";
//         increasingDistance = true;
//     }
//
//     while(increasingDistance == false){
//         jumpCount++;
//         aPoint = x1+ (v1*jumpCount);
//         bPoint = x2 + (v2*jumpCount);
//         curDistance = Math.abs(aPoint-bPoint);
//         if(curDistance > prevDistance){
//             break;
//         }
//         if(curDistance == 0){
//             met = "YES";
//             break;
//         }
//     }
//
//
//     return met;
//
// }







//are two kangaroos going to meet based on velocity and starting distance
// function kangaroo(x1, v1, x2, v2) {
//     // Write your code here
//     let aPoint = x1+v1;
//     let bPoint = x2+v2;
//     let met = "NO";
//     let prevDistance = Math.abs(aPoint-bPoint);
//     let curDistance = Math.abs(aPoint-bPoint);
//     let increasingDistance = false;
//     let jumpCount = 0;
//
//     if(aPoint == bPoint){
//         met = "YES";
//         increasingDistance = true;
//     }
//
//     while(increasingDistance == false){
//         jumpCount++;
//         aPoint = x1+ (v1*jumpCount);
//         bPoint = x2 + (v2*jumpCount);
//         curDistance = Math.abs(aPoint-bPoint);
//         if(curDistance > prevDistance){
//             break;
//         }
//         if(curDistance == 0){
//             met = "YES";
//             break;
//         }
//     }
//
//
//     return met;
//
// }





// let countP = 0;
// countP++;
// console.log(countP);


// * Complete the 'countApplesAndOranges' function below.
// *
// * The function accepts following parameters:
//     *  1. INTEGER s
// *  2. INTEGER t
// *  3. INTEGER a
// *  4. INTEGER b
// *  5. INTEGER_ARRAY apples
// *  6. INTEGER_ARRAY oranges
// */

// function countApplesAndOranges(s, t, a, b, apples, oranges) {
//     // Write your code here
//     let appCount = 0;
//     let orCount = 0;
//     for(let i=0; i < apples.length; i++){
//         let dropPoint = apples[i] + a;
//         if ( (dropPoint >= s) && (dropPoint <= t)){
//             appCount++;
//         }
//     }
//     console.log(orCount);
//     for(let i=0; i < oranges.length; i++){
//         let dropPoint = oranges[i] + b;
//         if ( (dropPoint >= s) && (dropPoint <= t)){
//             orCount++;
//         }
//     }
//     console.log(orCount);
//
//
// }




// ROUNDING UP at 5 for grades
// function gradingStudents(grades) {
//     // Write your code here
//     for(let i= 0; i < grades.length; i++){
//         if(grades[i] < 38){
//             continue;
//         } else if( grades[i] == 100){
//             continue;
//         } else {
//             let roundedUp = Math.ceil(grades[i]/5) * 5;
//             if( (roundedUp - grades[i]) < 3   ){
//                 grades[i] = roundedUp;
//             }else {
//                 continue;
//             }
//         }
// return grades;
//     }
//
// }






// function timeConversion(s) {
//     // Write your code here
//     if (s.includes("AM")) {
//         if (s.substring(0, 2) == "12") {
//             return "00" + s.substring(2, s.length - 2);
//         } else {
//             return s.substring(0, s.length - 2);
//         }
//     } else {
//         if (s.substring(0, 2) == "12") {
//             return "12" + s.substring(2, s.length - 2);
//         } else {
//             let zuluNumber = parseInt(s.substring(0, 2)) + 12;
//             return (zuluNumber + s.substring(2, s.length - 2));
//         }
//
//     }
// }

    // hh:mm:ssAM
// console.log(timeConversion("11:32:45AM"));
// console.log(timeConversion("11:32:45PM"));


// const arry1 = [1234134,12, 52,1123];
// console.log(arry1);
// arry1.sort(function(a,b){return a-b});
// console.log(arry1);


// console.log("hello 05 12");

// function staircase(n) {
//     for (let i = 0; i < n; i++) {
//         let a = "1".repeat(n-1-i);
//         let b= "#".repeat(i+1)
//         console.log(a.concat(b));
//     }
// }
//
//
//
// console.log(staircase(3));




// const arry1 = [];
// arry1.push(([1,4,5]));
// console.log(arry1);
// arry1.push(([2,4,5]));
// console.log(arry1);
// arry1.push(([4,5,7]));
// console.log(arry1);
//




// let strCheck = "rstlne";
//
// function makeObjectFromString(str, stringCheck){
//     const objStr = {};
//
//     objStr.string = str;
//     objStr.size = str.length;
//     objStr.containsLettersFromRSTLNE = containLetters(str, stringCheck);
//     objStr.isOneWord = !str.includes(" ");
//
//     return objStr;
//
// }
//
// function containLetters(str, stringCheckList){
//     for(let i = 0; i< str.length; i++){
//         for(let j = 0; j < stringCheckList.length; j++){
//             if( str[i] === stringCheckList[j]){
//                 console.log(str[i] + " and " + str[j]);
//                 return true;
//             }
//       //USE string.contains("string")
//         }
//     }
//     return false;
// }
//
// console.log(makeObjectFromString("tacocat", strCheck));
// console.log(makeObjectFromString("JJ J", strCheck));
// console.log(makeObjectFromString("love", strCheck));




// (function(){
//     console.log("hello");
//     const hamsters = [
//         {
//             name: "Hamtaro",
//             heightInMM: 86,
//             fur: ['orange', 'white'],
//             gender: "male",
//             dateOfBirth: "August 6"
//         } , {
//             name: "Bijou",
//             heightInMM: 75,
//             fur: ['white'],
//             gender: "female",
//             dateOfBirth: "July 10"
//         } , {
//             name: "Oxnard",
//             heightInMM: 100,
//             fur: ['grey', 'white'],
//             gender: "male",
//             dateOfBirth: "May 3"
//         } , {
//             name: "Boss",
//             heightInMM: 120,
//             fur: ['brown', 'white'],
//             gender: "male",
//             dateOfBirth: "Spetember 21"
//         } , {
//             name: "Snoozer",
//             heightInMM: 85,
//             fur: ['brown', 'white', "pink"],
//             gender: "male",
//             dateOfBirth: "January 14"
//         }
//     ];
//
//     function returnMostColorful(arrayObject){
//         let mostColorful = {};
//         mostColorful.fur =[];
//         for(let hamster of arrayObject){
//             if(hamster.fur.length > mostColorful.fur.length){
//                 mostColorful = hamster;
//             }
//         }
//         return mostColorful;
//
//     }
//
//     console.log(returnMostColorful(hamsters));

    // function returnHighestObject(arrayObject){
    //     let highest = 0;
    //     let highestIndex = 0;
    //
    //     for(let i =0; i < arrayObject.length; i++){
    //         if(arrayObject[i].heightInMM > highest){
    //             highest = arrayObject[i].heightInMM;
    //             highestIndex = i;
    //         }
    //     }
    //
    //     return arrayObject[highestIndex];
    // }
    //
    // console.log(returnHighestObject(hamsters));


    // let product1 = {
    //     name: 'Hammar',
    //     priceInCents: 400,
    //     description: 'It is a a hammar.',
    //     inventory: 25034
    // }
    //
    // let product2 = {
    //     name: 'Computer',
    //     priceInCents: 40000,
    //     description: 'It is a computer.',
    //     inventory: 33000
    // }
    //
    // let product3 = {
    //     name: 'Ruler',
    //     priceInCents: 1000,
    //     description: 'It is a ruler.',
    //     inventory: 2200
    // }



    // function returnProductEssentialDetails(product){
    //     return {name:product.name, priceInCents:product.priceInCents}
    // } // returns...
// console.log(returnProductEssentialDetails(product1));
// console.log(returnProductEssentialDetails(product2));

// function returnAllProductsEssentialDetails(arry){
//     const arry2 = [];
//     for(let ob of arry){
//         arry2.push(returnProductEssentialDetails(ob));
//     }
//     return arry2;


// console.log(returnAllProductsEssentialDetails([product1,product2,product3]));
    /*

        {
            name: 'Hammar',
            priceInCents: 400
        }

    */




    /*

        {
            name: 'Computer',
            priceInCents: 40000
        }

    */




    /*

        {
            name: 'Ruler',
            priceInCents: 1000
        }

    */








    // function sumOfArrays(arry){
    //     let sum = 0;
    //
    //     for(let x of arry){
    //         sum += x;
    //     }
    //
    //     return sum;
    // }
    //
    // console.log(sumOfArrays([1,4,3]));

    //
    // function alphaString(input){
    //     let strArr = input.split('');
    //     strArr.sort();
    //     let newStr = strArr.join('');
    //     return newStr;
    // }
    //
    // console.log(alphaString('zpadsjkfdfioaabbc'));






// console.log("Yay! I completed the warm-up!");
//
// function fizzBuzz(input){
//     //give it a value if it's empty
//     if(input === undefined){
//         input = 100;
//     }
//
//     for(let i= 1; i<=input; i++){
//         if(i%3 == 0  && i%5 == 0){
//             console.log("FizzBuzz");
//         }
//         else if(i%3 == 0){
//             console.log("Fizz");
//         } else if(i%5 == 0){
//             console.log("Buzz");
//         }else {
//             console.log(i);
//         }
//     }
//
// }
// //fizzBuzz();



    // END OF SCRIPT!!!!!!
// })();