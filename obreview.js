"use strict";
let strArr = ['wer', 'ee', 'ewr'];
// ['werwer', 'eeee', 'ewrewr']
let str = '';
let numArr = [2,4,5,6, 9];
// number, list, string, array, do, for, for  RESERVED WORDS
// function doubleTheLettersinEachString(strArray) {
//     // str = '';
//     let finalArray = [];
//     for(let i = 0; i < strArray.length; i++){
//
//           str =  strArray[i] + "";
//
//       str.repeat(strArray[i])  ;
//                                 // 2.repeat(2)
//                                 // 4.repeat(4)
//
//
//         console.log(  str.repeat(strArray[i])      );
//
//
//            // save to bucket
//             finalArray.push(str.repeat(strArray[i]));
//     }
//     return finalArray;
//
// }
//
// console.log(doubleTheLettersinEachString(numArr));


//
// `checkForNumber
//
// checkForString
// function checkForString(array1) {
//     for (let i = 0; i < array1.length; i++) {
//         if (typeof array1[i] === 'string') {
//
//         } else {
//             return false;
//         }
//         // return true;
//
//     }
//
//
//     // return true;
// }
//
//
// if(checkForString(strArr) === true){
//     console.log("hi");
// }


let numArr2 = [5,15,10, 324, 0];




// multiplesofFIve;
// function multipleOfFive(numberArray){
//     for(let cinco of numberArray){
//         if(cinco%5===0){
//
//         }else{
//             return false;
//         }
//     }
//     //went through whole loop > all are true
//     return true;
// }
//
// console.log(multipleOfFive(numArr2));

// LOWEST Price >      array of objects
// arrayname[index].

let superNumberArray = [       {numero:44, favorite:"yes"} , {numero:22, favorite:"no"   },          {numero:10, favorite:"no" }];

function findLowestPrice(arrayOfObjects){
     // let lowestPrice = arrayOfObjects[0].numero;
     let lowestObject = arrayOfObjects[0];
     for(let superNumber of arrayOfObjects){
         if(superNumber.numero < lowestObject.numero){
             // lowestPrice = superNumber.numero;
             lowestObject = superNumber;
         }
     }

     // return lowestPrice;
    return lowestObject;
}

// console.log(findLowestPrice(superNumberArray));


// `evenOrOdd` th
//
//     `doubleTheElements`
//
//     `sumOfElements
//
//     `totalPrice`
//
//
//     `findHighestPrice`
//
// discountCheck`.
//
//     `totalPrice`
//
//     d `newProduct` w
//
//     `countWords` t
//
//     `describeNumber`

