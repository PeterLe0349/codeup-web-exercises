"use strict";

console.log("hello 05 11");

let strCheck = "rstlne";

function makeObjectFromString(str, stringCheck){
    const objStr = {};

    objStr.string = str;
    objStr.size = str.length;
    objStr.containsLettersFromRSTLNE = containLetters(str, stringCheck);
    objStr.isOneWord = !str.includes(" ");

    return objStr;

}

function containLetters(str, stringCheckList){
    for(let i = 0; i< str.length; i++){
        for(let j = 0; j < stringCheckList.length; j++){
            if( str[i] === stringCheckList[j]){
                console.log(str[i] + " and " + str[j]);
                return true;
            }
      //USE string.contains("string")
        }
    }
    return false;
}

console.log(makeObjectFromString("tacocat", strCheck));
console.log(makeObjectFromString("JJ J", strCheck));
console.log(makeObjectFromString("love", strCheck));




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