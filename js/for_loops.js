"use strict";
// Math.floor(Math.random() * 50) + 50;
(function(){
  console.log("----FOR LOOPS script----");

  console.log("Multiplication Function");

  //return a random number
  function randomNum(num){
    return Math.floor(Math.random() * num) + 1;
  }

  function showMultiplicationTable(num){
    for(let i= 1; i<11; i++){
      console.log(`${num} x ${i} = ${num*i}`);
    }
  }
  //showMultiplicationTable(7);
  console.log("Generate ten randoms and tell if it is odd / even");
  function isOddEvenForTenRandoms(){
    for(let i = 0; i < 10; i++){
      //random between 20 and 200
      let ran = Math.floor(Math.random()*201) + 20;
      if(ran % 2 == 0) {
        console.log(ran + " is " + "even");
      } else {
        console.log(ran + " is " + "odd");
      }
    }
  }
 // isOddEvenForTenRandoms();

  //create right triangle using numbers
  function numberTriangle(num){
    for(let i = 0; i < num; i++){
      let txt = '';
      for(let j= 0; j < i; j++) {
        txt += i;
      }
      console.log(txt);
    }
  }
  //numberTriangle(10);
console.log("Countdown by -5");
  function countDown(num){
    for(let i = num; i > 0; i -=5 )
      console.log(i);
  }



  //countDown(100);









}())