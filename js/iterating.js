(function(){
    "use strict";
    console.log("Iterating script practice");
    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */
let names = ['Peter', 'Tracy', 'Angel', 'Luca'];
console.log(names);
    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */
console.log("The number of elements in Array- Names is "+ names.length);
    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */
    console.log(names[0]);
    console.log(names[1]);
    console.log(names[2]);
    console.log(names[3]);

    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */
    function printNames(arr){
        for(let i =0; i< arr.length; i++){
            console.log(`The element at index ${i} is ${arr[i]} `);
        }
    }
    printNames(names);
    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */

    function printNamesForEach(arr) {
        names.forEach(function (names) {
            console.log("forEach of names is " + names + '.');
        })
    }
    printNamesForEach(names);

    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */

    function first(arry){
        return arry[0];
    }

    function second(arry){
        return arry[1];
    }

    function last(arry){
        return arry[arry.length-1];
    }

    console.log("First function: " + first(names));
    console.log("Second function: " + second(names));
    console.log("Last function: " + last(names));

})();
