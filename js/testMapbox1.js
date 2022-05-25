"use strict";
$(document).ready(function(){
    let markerArray = [];
    let markerCount = 0;
    let dataDisplay = document.getElementById('mapData')
    mapboxgl.accessToken = 'pk.eyJ1IjoiZmllcmVtIiwiYSI6ImNsM2RneDdkeTA1cWEza3Frd204MDA2ajYifQ.kuXTiyC1aNTX8dEyMKUMjQ';
    const map = new mapboxgl.Map({
        container: 'map', // container ID
        style: 'mapbox://styles/mapbox/streets-v11', // style URL
        center: [-74.5, 40], // starting position [lng, lat]
        zoom: 9 // starting zoom
    });
    // Set marker options.
    createMarker(makeRandomNumber(85,1), makeRandomNumber(85,1));
    createMarker(makeRandomNumber(85,1), makeRandomNumber(85,1));
    createMarker(makeRandomNumber(85,1), makeRandomNumber(85,1));

    function createMarker(coordLng, coordLat){
        const marker = new mapboxgl.Marker({
            color: "red",
            draggable: true
        }).setLngLat([coordLng, coordLat])
            // .addTo(map);
        markerArray.push(marker);
        markerArray[markerCount].addTo(map);
        console.log(markerArray[markerCount]);
        markerCount++;
    }
//add popper to existing marker
    $('#testBtn').click(function(){
        ((markerArray.forEach(function(element){
            element.setPopup(new mapboxgl.Popup().setHTML("<h4>Hello World!</h4>"));
        })));
    });

    geocode("Dallas, TX", MAPBOX_KEY).then(function(result) {
        console.log(result[0]);
        dataDisplay.innerHTML = result;
        map.setCenter(result);
        map.setZoom(20);
    });

    reverseGeocode({lng: -96.796856, lat: 32.776272}, MAPBOX_KEY).then(function(results) {
        // logs the address for The Alamo
        console.log(results);
    });




// end of jquery
});