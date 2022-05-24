"use strict";
$(document).ready(function(){
    let scoreID = document.getElementById('score');
    //add point if it has cody
    $('.col-4').click(function(){
        if($(this).hasClass('cody')){
                 scoreID.innerHTML = ''+ (parseFloat(scoreID.innerHTML) + 1);
                 setTimeout(function(){
                     $('#boxContainer').addClass('mainBackground');
                     setTimeout(function(){
                         $('#boxContainer').removeClass('mainBackground');
                     },100);
                 },100);
        }
    });
    //randomize cody
    // let num = makeRandomNumber(8,0);
    // console.log(num);
    // $(`.col-4:nth-of-type(${num})`).addClass('cody');

    setInterval(function(){
        let num = makeRandomNumber(9,1)
        $(`.col-4:nth-of-type(${num})`).addClass('cody');
        setTimeout(function(){
            $(`.col-4:nth-of-type(${num})`).removeClass('cody');
        },1000);

    }, 1000);
    // $('.col-4:nth-of-type(9)').addClass('cody');



   // end jquery
});
    