"use strict";
$(document).ready(function(){
    let roundCount = 2;
    let roundSequence = 'abc';
    let keysequence = '';
    let colorCount = 0;
    let canClick = true;
    let startClicking = false;
    // $('.col-6').hover(
    //     function(){
    //         $(this).addClass('highBox')
    //     },function(){
    //         $(this).removeClass('highBox');
    //     });

    $('#startBtn').click(function(){
        if(canClick){
            $('#startMessage').html("Game has started.");
            startGame(roundCount);
            keysequence = '';
            canClick = false;
        }

    });



    let num = makeRandomNumber(4,1)
    // $(`.col-6:nth-of-type(${num})`).addClass('highBox');
    function startGame(rounds){
        roundSequence = '';
        let currentRound = 0;
        let interID = setInterval(function(){

            let ran = makeRandomNumber(4,1);
                $(`.col-6:nth-of-type(${ran})`).addClass('highBox');
                roundSequence += document.getElementsByClassName('boxy')[ran-1].innerHTML;

            setTimeout(function(){
                $(`.col-6:nth-of-type(${ran})`).removeClass('highBox');
                currentRound++;
                if(currentRound === rounds){
                    console.log("Final sequence is: " + roundSequence);
                    clearInterval(interID);
                    keysequence = '';
                    startClicking = true;

                }
            },500);

            }
        ,1000);
    }


    $(`.col-6`).click(function(){
        if(startClicking === true){
            keysequence += $(this).text().trim();
        }
        if(keysequence.includes(roundSequence)){
            alert("You're the best!!");
            roundCount++;
            canClick = true;
            keysequence = '';
            startClicking = false;
            $(`.col-6`).click(false);
            $('#startMessage').html(`Round: ${roundCount-1}`);
        }
    });





    // test choosing children
    // $('.col-6:nth-of-type(1)').hover(function(){
    //     $(this).children().first().css("background", 'blue');
    // },function(){
    //
    // });
    $('.boxy')[1].click(function(){
        $(this).css('background-color', 'gray');
    })

    //     if(!keysequence.includes(roundSequence)){
    //         matchSequence();
    //     }else{
    //         $('#startMessage').html("You got it!");
    //         alert("YEAH!");
    //     }
    // }





   // end jquery
});