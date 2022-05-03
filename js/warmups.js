"use strict";
(function(){

    let product1 = {
        name: 'Hammar',
        priceInCents: 400,
        description: 'It is a a hammar.',
        inventory: 25034
    }

    let product2 = {
        name: 'Computer',
        priceInCents: 40000,
        description: 'It is a computer.',
        inventory: 33000
    }

    let product3 = {
        name: 'Ruler',
        priceInCents: 1000,
        description: 'It is a ruler.',
        inventory: 2200
    }



    function returnProductEssentialDetails(product){
        return {name:product.name, priceInCents:product.priceInCents}
    } // returns...
// console.log(returnProductEssentialDetails(product1));
// console.log(returnProductEssentialDetails(product2));

function returnAllProductsEssentialDetails(arry){
    const arry2 = [];
    for(let ob of arry){
        arry2.push(returnProductEssentialDetails(ob));
    }
    return arry2;

}
console.log(returnAllProductsEssentialDetails([product1,product2,product3]));
    /*

        {
            name: 'Hammar',
            priceInCents: 400
        }

    */


    returnProductEssentialDetails(product2); // returns...

    /*

        {
            name: 'Computer',
            priceInCents: 40000
        }

    */


    returnProductEssentialDetails(product3); // returns...

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
})();





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

