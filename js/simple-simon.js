"use strict";
$(document).ready(function(){
    let roundCount = 2;
    let roundSequence = '';
    let keysequence = '';
    $('.col-6').hover(
        function(){
            $(this).addClass('highBox')
        },function(){
            $(this).removeClass('highBox');
        });

    $('#startBtn').click(function(){
        $('#startMessage').html("Game has started.");
        startGame(roundCount);
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
                    console.log(roundSequence);
                    clearInterval(interID);
                    keysequence = '';
                }
            },1000);

            }
        ,1000);
    }

        $(`.col-6`).click(function(){
            keysequence += $(this).text().trim();
            console.log(keysequence);
            console.log(roundSequence);
            if(keysequence.includes(roundSequence)){
                alert("YEAH");
                roundCount++;
            }
        });
    //     if(!keysequence.includes(roundSequence)){
    //         matchSequence();
    //     }else{
    //         $('#startMessage').html("You got it!");
    //         alert("YEAH!");
    //     }
    // }





   // end jquery
});