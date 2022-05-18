"use strict";
(function(){
    console.log("hello");
    $('h1').dblclick(
        function(){
            alert("Hello 18");
        }
    )
    //
    // $('#textfield').keydown(function() {
    //     alert('A key was pushed down!');
    // });

    $('#textfield').keyup(function() {
        alert('a key was released!');
    });


})();