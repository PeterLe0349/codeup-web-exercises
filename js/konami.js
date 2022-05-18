"use strict";
$(document).ready(function(){
    // $('h1').dblclick(function(){
    //     alert($('title').html());
    // })

    let keyList = "";
    let keyListChar = '';
    let winMusic = document.getElementById("audioHoorray")
    // let userInput = $("#curInput");
    $(document).keyup(function(event){
        let keyc = event.keyCode;
        keyList += keyc;
        keyListChar += String.fromCharCode(keyc);
        if(keyList.length > 20){
            if(!keyList.includes('38')){
                keyList = "";
            }
        }
        if(keyList.includes('3838404037393739666513')){
            keyList = "";
            keyListChar = '';
            alert("You got 40 lives!");
            document.body.style.backgroundImage = "url('img/pizza.png')";
            document.getElementById("completeMessage").setAttribute("class", "visible display-4");
            document.getElementById("stopBtn").setAttribute("class", "visible");
            document.getElementById("completeMessage").innerHTML = "GRATS! YOU GOT 40 lives!!!!!";


                winMusic.play();
        }
        console.log(keyListChar);
        document.getElementById("curInput").innerHTML = keyList;
        $('#stopBtn').click(function(e){
            winMusic.pause();
        })



    });




   // END OF DOCUMENT
});