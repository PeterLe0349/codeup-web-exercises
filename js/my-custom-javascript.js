"use strict";

$(document).ready(function() {

    // console.log("hello jquery");
    // alert( 'The DOM has finished loading! Bahumbug!' );

    // let contents = $("#left-column").html();
    // alert(contents);
    // let contents2 = $('#right-column').html();
    // alert(contents2);
    // $('.codeup').css('border', '1px solid red');

    // $('li').css('font-size', '20px');
    // $('h1, p, li').css('background-color','yellow');
    // let contents3 = $('h1').html();
    // alert(contents3);
    //
    // $('#marvel').css('color', 'purple');

    // $("#codeup").click(function(){
    //     alert("h1 with ID codeup was clicked!");
    // });
    //
    // $('#codeup').dblclick(function(e){
    //     alert("h1 with ID codeup was DOUBLE clicked!");
    // });
    //
    // $('#left-column').hover(
    //     function(){
    //         $(this).css('background-color', 'green');
    // },
    //     function(){
    //         $(this).css('background-color', 'red');
    //     }
    //     );

    $('h1').click(function(){
        $(this).css('background-color', 'red');
    });

    $('p').dblclick(function(){
        $('p').css('font-size', '18px');
    });

    $('li').hover(
        function(){
            $('li').css('color', 'red');
        },
        function(){
            $('li').css('color', 'black');
        }
    );


});