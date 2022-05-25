"use strict";

$(document).ready(function(){
    $('#refreshBtn').click(function(){
       location.reload();
    });

    $('#pokeSubBtn').click(function(){
        let pokename = (document.getElementById('pokemonID').value);
        getPoke(pokename);

    })


function getPoke(pokename){
    $.ajax({
        url: `https://pokeapi.co/api/v2/pokemon/${pokename}`,
        type: "GET",
        data: "{}",
        // async: false,
        dataType: "json"
    }).done(function(data) {
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

function addImage(location){
    let image = `<img src="${location}" alt="..." class="img-thumbnail">`;
    // $('#displaySW').append(image);
}















    // end jquery
});
