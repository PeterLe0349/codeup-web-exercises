"use strict";
$(document).ready(function(){
    let markerArray = [];
    let markerCount = 0;
    let LNGLAT;

    //make mapbox
    mapboxgl.accessToken = MAPBOX_KEY;
    const map = new mapboxgl.Map({
        container: 'map', // container ID
        style: 'mapbox://styles/mapbox/streets-v11', // style URL
        center: [-96.7970, 32.7767], // starting position [lng, lat] DALLAS
        zoom: 9 // starting zoom
    });

    let mainMarker = new mapboxgl.Marker({
        color: 'purple',
        draggable: true
    });
    mainMarker.setLngLat([-96.7970, 32.7767]);
    mainMarker.addTo(map);
    changeWeather('dallas, tx');

//get coordinates when clicked
    $('#pinpointBTN').click(function(){
        let locationString = document.getElementById('pinpointInput').value;
        console.log("Pinpoint Location request: " + locationString);
        changeWeather(locationString, 'something something');


    });

    //change zoom
    $('a.dropdown-item').click(function(){
        console.log($(this).html());
        map.setZoom(parseFloat($(this).html()));
    })

    // get restaurant map data
    // $.ajax("../data/mapbox.json").done(function(data, status){
    //     data.forEach(function(datbit){
    //         // console.log(datbit.name);
    //
    //         makeMarker(datbit.address, datbit.popupHTML);
    //     });
    //     // console.log("Completed dat from mapbox.json: " + status);
    // });


    // makeHeader('Welcome to WeatherBox');

    function makeHeader(str){
        $('#headID').html(`<h1 class="text-center">${str}</h1> `);
    }

    //Make marker
    function makeMarker(address, placeDescription){
        geocode(address, MAPBOX_KEY).then(function(result){
            const popper = new mapboxgl.Popup().setHTML(placeDescription);
            const marker = new mapboxgl.Marker({
                color: 'red',
                draggable: false
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

    function changeWeather(address){
        geocode(address, MAPBOX_KEY).then(function(result){
            mainMarker.setLngLat(result);
            console.log(result);
            map.flyTo({center: [result[0],result[1]] ,zoom: 10 });
            $.get("http://api.openweathermap.org/data/2.5/forecast", {
                APPID: OPEN_WEATHER_APPID,
                lat:    result[1],
                lon:   result[0],
                units: "imperial"
            }).done(function(data) {
                console.log('5 day forecast', data);
                document.getElementById('dayIcon1').src = changeIcons(data.list[0]);
                document.getElementById('dayNumber1').innerHTML = data.list[0].dt_txt.split(' ')[0];
                document.getElementById('dayInfo1').innerHTML = dayInfo(data.list[0]);

                document.getElementById('dayIcon2').src = changeIcons(data.list[8]);
                document.getElementById('dayNumber2').innerHTML = data.list[8].dt_txt.split(' ')[0];
                document.getElementById('dayInfo2').innerHTML = dayInfo(data.list[8]);

                document.getElementById('dayIcon3').src = changeIcons(data.list[16]);
                document.getElementById('dayNumber3').innerHTML = data.list[16].dt_txt.split(' ')[0];
                document.getElementById('dayInfo3').innerHTML = dayInfo(data.list[16]);

                document.getElementById('dayIcon4').src = changeIcons(data.list[24]);
                document.getElementById('dayNumber4').innerHTML = data.list[24].dt_txt.split(' ')[0];
                document.getElementById('dayInfo4').innerHTML = dayInfo(data.list[24]);

                document.getElementById('dayIcon5').src = changeIcons(data.list[32]);
                document.getElementById('dayNumber5').innerHTML = data.list[32].dt_txt.split(' ')[0];
                document.getElementById('dayInfo5').innerHTML = dayInfo(data.list[32]);
            });
        });
    }

    function changeIcons(dataElement){
        return `http://openweathermap.org/img/w/` + dataElement.weather[0].icon  + '.png';

    }

    function dayInfo(elementData){
        return `Low: ${elementData.main.temp_min}  / High: ${elementData.main.temp_max} <br>` +
            `Description: ${elementData.weather[0].description} <br>` +
            `Humidity:  ${elementData.main.humidity} <br>`+
            `Wind:  ${elementData.wind.speed} <br>`+
            `Pressure:  ${elementData.main.pressure} <br>`;

    }

    mainMarker.on('dragend', function(){
        LNGLAT = mainMarker.getLngLat();
        reverseGeocode(LNGLAT, MAPBOX_KEY).then(function(data){
            // document.getElementById('placeData').innerHTML = data;
            console.log(data);
            changeWeather(data);
        })

    })













// end jquery
});