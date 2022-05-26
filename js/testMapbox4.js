"use strict";
$(document).ready(function(){
    let markerArray = [];
    let markerCount = 0;
    //make mapbox
    mapboxgl.accessToken = MAPBOX_KEY;
    const map = new mapboxgl.Map({
        container: 'map', // container ID
        style: 'mapbox://styles/mapbox/streets-v11', // style URL
        center: [-96.7970, 32.7767], // starting position [lng, lat] DALLAS
        zoom: 9 // starting zoom
    });

//get coordinates when clicked
    $('#pinpointBTN').click(function(){
        let locationString = document.getElementById('pinpointInput').value;
        getCoordinates(locationString);


    });

    //change zoom
    $('a.dropdown-item').click(function(){
        console.log($(this).html());
        map.setZoom(parseFloat($(this).html()));
    })

    // get restaurant map data
    $.ajax("../data/mapbox.json").done(function(data, status){
        data.forEach(function(datbit){
            // console.log(datbit.name);

            makeMarker(datbit.address, datbit.popupHTML);
        });
        // console.log("Completed dat from mapbox.json: " + status);
    });


    makeHeader('Welcome to Mapbox');

    function makeHeader(str){
        $('#headID').html(`<h1 class="text-center">${str}</h1> `);
    }

    //Make marker
    function makeMarker(address, placeDescription){
            geocode(address, MAPBOX_KEY).then(function(result){
                const popper = new mapboxgl.Popup().setHTML(placeDescription);
                const marker = new mapboxgl.Marker({
                    color: 'red'
                }).setLngLat(result);
                $('#geocodeResult').html('Long: ' + result[0] + '|  Lat: ' + result[1]);
                markerArray.push(marker);
                markerArray[markerCount].setPopup(popper);
                markerArray[markerCount].addTo(map);
                markerCount++;
                map.flyTo({center: [result[0],result[1]] ,zoom: 10 });
            });
        }


    // makeMarker('Santa Fe', 'something something');

   // getCoordinates("New York City, NY");

//get array coordinates by String Address
    function getCoordinates(address){
        makeMarker(address, 'new maker added');
    }

    $('#hideID').click(function(){
        markerArray.forEach((element) => element.getElement().style.visibility = "hidden");

    })

    $('#showID').click(function(){
        markerArray.forEach((element) => element.getElement().style.visibility = "visible");
    })

    $('#woohooID').click(function(){
        markerArray.forEach((element) =>
            element.getElement().innerHTML = `<img src="../img/deathNote.png" alt="DN" width="30" height="40">`);
    });












// end jquery
});