"use strict";
$(document).ready(function(){
    let toolObjectArray =   [
        {
            "title": "Hammer",
            "quantity": 25,
            "categories": [
                "tool"
            ],
            "price": 20
        }, {
            "title": "Drill",
            "quantity": 5,
            "categories": [
                "tool",
                "powered"
            ],
            "price": 100
        }, {
            "title": "Mower",
            "quantity": 5,
            "categories": [
                "tool",
                "gas",
                "outdoor"
            ],
            "price": 200
        }, {
            "title": "Screwdrivers",
            "quantity": 25,
            "categories": [
                "tool"
            ],
            "price": 10
        }
    ];



 let toolDisplay = document.getElementById("displayTool");
 const doesExist =  localStorage.getItem("toolObjectArray");
 localStorage.setItem("toolObjectArray", JSON.stringify(toolObjectArray));
 let retrievedObject;
 if(doesExist){
     console.log("It exist");
     retrievedObject = JSON.parse((localStorage.getItem("toolObjectArray")));
 }else{
     console.log("It doesn't exist");
 }
retrievedObject.push({yeah:32, idi:34});
 localStorage.setItem("newObject", JSON.stringify(retrievedObject));
 let result = JSON.parse(localStorage.getItem("newObject"));
    console.log(result);

    toolDisplay.innerHTML = `The total amount of objects in array: ${result.length}`;
    toolDisplay.innerHTML += `<br>First item is: ${JSON.stringify(result[0])}`;

    // console.log("Retrieved data: ", JSON.parse(retrievedObject));
jQuery('#displayTool').html('HIHI');




}); // end JQUERY