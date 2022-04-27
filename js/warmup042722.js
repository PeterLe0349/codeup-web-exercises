"use strict";
(function(){
    // Warm-up
    // Write a function that takes in an array of strings and returns a string of the first letter of each element concatenated together:
    //
    //     Ex. allFirstLetters([“dog”,”cat”,”frog”,”bat”]) -> “dcfb”;


    console.log("hello from warmup console");
    function allFirstLetters(strArray){
        let txt = '';
        for(let i = 0; i < strArray.length; i++){
            txt+= strArray[i].charAt(0);
        }
        return txt;
    }

    // for(let el of arr) {
    //     bucket += el[0];
    // }

    console.log(allFirstLetters(['doasdfg','power','cat','frog','bat']));




})();