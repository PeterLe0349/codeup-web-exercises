"use strict";
// let peter;
$(document).ready(function(){
    $('#refreshBtn').click(function(){
        $.ajax({
            url: "../data/inventory.json",
            type: "GET",
            data: "{}",
            // async: false,
            dataType: "json"
        }).done(function(data) {
            console.log(data);
            let html = '';
            for(let i = 0; i< data.length; i++){
                html += makeProductRow(data[i]);
            }
            $('#insertProducts').html(html);


        });
    });

    function makeProductRow(productObject){
        let rowData = '';
        rowData += `<tr> <td> ${productObject.title} </td>`;
        rowData += `<td> ${productObject.quantity} </td>`;
        rowData += `<td> $${productObject.price.toFixed(2)} </td>`;
        rowData += `<td> ${productObject.categories} </td>`;
        return rowData;
    }

    $('#pokeSubBtn').click(function(){
        let pokename = (document.getElementById('pokemonID').value);
        getPoke(pokename);

    });

    $('#digiSubBtn').click(function(){
        let diginame = (document.getElementById('digiID').value);
        getDigi(diginame)

    });


function getPoke(pokename){
    $.ajax({
        url: `https://pokeapi.co/api/v2/pokemon/${pokename}`,
        type: "GET",
        data: "{}",
        // async: false,
        dataType: "json"
    }).done(function(data) {
        console.log(data);
        let moveList = ''
        for(let i= 0; i< data.moves.length; i++){
            moveList += data.moves[i].move.name + ', ';
        }
        console.log(data);
        console.log(data.moves[1].move.name);
            let rowData = '';
            rowData += `<tr class="table-success"> <td class="table-success"> ${data.name} </td>`;
            rowData += `<td class="table-success"> ${ data.height} </td>`;
            rowData += `<td class="table-success"> ${data.weight} </td>`;
            rowData += `<td class="table-success"> ${moveList} </td>`;
            rowData += `<td class="table-success"> <img src="${data.sprites.front_default}" alt="..." class="img-thumbnail"> </td>`;
        // console.log(rowData);
        $('#pokeMonsters').prepend(rowData);
    });
}

    function getDigi(diginame){
        $.ajax({
            url: `https://digimon-api.vercel.app/api/digimon/name/${diginame}`,
            type: "GET",
            data: "{}",
            // async: false,
            dataType: "json"
        }).done(function(data) {
           console.log(data[0].name);
            let digiData = '';
            digiData += `<tr class="table-success"> <td class="table-success"> ${data[0].name} </td>`;
            digiData += `<td class="table-success"> ${ data[0].level} </td>`;
            digiData += `<td class="table-success"> <img src="${data[0].img}" alt="..." class="digiImage"> </td>`;
            // console.log(rowData);
            $('#digiMonsters').prepend(digiData);
        });
    }

    getDigi();




function addImage(location){
    let image = `<img src="${location}" alt="..." class="img-thumbnail">`;
    // $('#displaySW').append(image);
}















    // end jquery
});
