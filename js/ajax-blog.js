"use strict";
$(document).ready(function(){

    $.ajax({
        url: "../data/blog.json",
        type: "GET",
        data: "{}",
        // async: false,
        dataType: "json"
    }).done(function(data) {

        console.log(data[1].date);


    });

    // console.log(dataBank[0]);
    // function makeProductRow(productObject){
    //     let rowData = '';
    //     rowData += `<tr> <td> ${productObject.title} </td>`;
    //     rowData += `<td> ${productObject.content} </td>`;
    //     rowData += `<td> ${productObject.categories} </td>`;
    //     rowData += `<td> ${productObject.date} </td>`;
    //     return rowData;
    // }


    // end jquery
});
