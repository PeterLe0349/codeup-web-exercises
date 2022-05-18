"use strict";
$(document).ready(function(){
   // $(this).find('dd').toggleClass('invisible');
   $('#showBtn').click(function(){
      $('dd').toggleClass("invisible");
   });
   $('dt').click(function(){
      $(this).next().toggleClass("invisible");
   });


});