"use strict";
$(document).ready(function(){
$.ajax("../data/blog.json").done(function(data, status){
    (data.forEach(function(datbit){
        console.log(datbit);
    }));
});







// end jquery
});