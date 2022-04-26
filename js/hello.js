"use strict";
(function(){
    console.log("Hello World from console");

    document.getElementById('personalHelloBtn').addEventListener('click', sayHello);

    function sayHello(){
        let myName = prompt("What's your name?")
        document.getElementById('personalHelloData').innerHTML = `Hello ${myName}!`;
    }


})();