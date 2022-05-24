"use strict";
$(document) .ready(function(){
    let operatorChoice = '';
    let firstInput = 0;
    let secondInput = '';

    function calcAnswer(x, y, opChoice){
        let answer = 'ERROR';
        if(opChoice === '/'){
            return x/y;
        }else if(opChoice === '*'){
            return x*y;
        }else if(opChoice === '-'){
            return x-y;
        }else if(opChoice === '+'){
            return x+y;
        }
        return answer;
    }

    function makeValidNumber(num){
        if(!isNaN(parseFloat(num))){
            return parseFloat(num);
        }else
            return 0;
    }

    $('.col, .col-6').hover(
        function() {
            $(this).toggleClass('highlighter')
        },
        function() {
            $(this).toggleClass('highlighter')
        });

    $('.col, .col-6').click(function(){
        console.log($(this).html());
        let inputValue = $(this).html();
        // add number to input
        if(   !isNaN(parseFloat($(this).html()))  ){
            if(document.getElementById('inputNumber').value === '' && $(this).html() === '0'){
            }else{
            document.getElementById('inputNumber').value +=  $(this).html();
            }
        } //if not a number
        else{
            switch(inputValue){
                case 'C':
                    document.getElementById('inputNumber').value = '';
                    break;
                case '+/-':
                    document.getElementById('inputNumber').value = parseFloat(document.getElementById('inputNumber').value)*(-1);
                    console.log("Chose +/-");
                    break;
                case '%':
                    document.getElementById('inputNumber').value = parseFloat(document.getElementById('inputNumber').value)/(100).toFixed(2);
                    break;
                case '/':
                    if(document.getElementById('inputNumber').value === ''){
                        firstInput = 0;
                        document.getElementById('inputNumber').value = '';
                    }else{
                        firstInput = parseFloat(document.getElementById('inputNumber').value);
                        document.getElementById('inputNumber').value = '';
                    }
                    operatorChoice = '/';
                    break;
                case '*':
                    firstInput = makeValidNumber(document.getElementById('inputNumber').value);
                    document.getElementById('inputNumber').value = '';
                    operatorChoice = '*';
                    break;
                case '-':
                    firstInput = makeValidNumber(document.getElementById('inputNumber').value);
                    document.getElementById('inputNumber').value = '';
                    operatorChoice = '-';
                    break;
                case '+':
                    firstInput = makeValidNumber(document.getElementById('inputNumber').value);
                    document.getElementById('inputNumber').value = '';
                    operatorChoice = '+';
                    break;
                case '=':
                    document.getElementById('inputNumber').value = calcAnswer(firstInput, makeValidNumber(document.getElementById('inputNumber').value), operatorChoice);
                    break;
                default:
                    break;
            }

        }


        // console.log(`The current input is: ${inputValue}`);




    });


});