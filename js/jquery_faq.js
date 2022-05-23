"use strict";
$(document).ready(function(){
   // $(this).find('dd').toggleClass('invisible');
   $('#showBtn').click(function(){
      $('dd').toggleClass("invisible");
   });
   $('dt').click(function(){
      $(this).toggleClass("highlight");
   });

   $('#yellowBtn').click(function(e){
      e.preventDefault();
      $('ul').each(function(){
         $(this).children('li').last().css('background-color', 'yellow');
      });
   });

   //make all h3 children li yellow
   $('h3').click(function(e){
      $(this).next('ul').children('li').each(function(e){
         $(this).css('font-weight', 'bold');
      })
   })
//make first li of ul children blue when any li clicked
   $('li').click(function(e){
      $(this).parent('ul').children('li').first().css('color', 'blue');
   })
//swap images
   $('#imageBtnLeft').click(swapLeft);
   $('#imageBtnRight').click(swapRight);
   $('#imageBtnMid').click(swapMid);

function swapMid(){
      if (getRandom(2,1) === 1){
         swapLeft();
      }else {
         swapRight();
      }
}

function swapLeft(){
   let copySrc = document.getElementById('imageMid').getAttribute('src');
   let oriSrc = document.getElementById('imageLeft').getAttribute('src');
   document.getElementById('imageLeft').setAttribute('src', copySrc);
   document.getElementById('imageMid').setAttribute('src', oriSrc);
}

function swapRight(){
   let copySrc = document.getElementById('imageMid').getAttribute('src');
   let oriSrc = document.getElementById('imageRight').getAttribute('src');
   document.getElementById('imageRight').setAttribute('src', copySrc);
   document.getElementById('imageMid').setAttribute('src', oriSrc);
}



function getRandom(max, min){
  return Math.floor(Math.random() * (max - min + 1) + min);
}
// block cut copy paste on site
$('body').bind('cut copy paste', function(event){
   event.preventDefault();
});



// let something = document.getElementById('state-parks-marvel').innerText
//    console.log($('#state-parks-texas').css('background-color'));
//    if($('#state-parks-texas').css('background-color') === 'rgba(0, 0, 0, 0)' ){
//       console.log("HI");
//    } ;

   // rgba(0, 0, 0, 0)

});