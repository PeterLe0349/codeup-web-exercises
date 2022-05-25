"use strict";
$(document).ready(function(){

        let markerArray = [];
        let poperArray = [];
        let markerCount = 0;
        var accessToken = MAPBOX_KEY;
    let coordLat;
    let coordLong;

        mapboxgl.accessToken = accessToken;

        var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v9',
        zoom: 15,
        center: [-96.77525127552164, 32.792163814661116] //DALLAS

    });
        let favPlaces = [
    {
        name: "Petra and the Beast", address: "601 N Haskell Ave., Dallas, TX 75246",
        popupHTML: "<img src='img/rest1.jpeg' height='30px' width='30px'><p>Petra and the Beast!</p> <i>Popular destination showcasing farm-to-fork, New American cuisine in snug, unassuming surrounds.  </i>"
    },
    {
        name: "Chubby\'s Restaurant",
        address: "11331 E NW Hwy #105, Dallas, TX 75238",
        popupHTML: "<img src='img/rest2.jpeg' height='30px' width='30px'><p>Chubby\'s Restaurant</p><i>Local mini-chain diner serving classic comfort food & Tex-Mex fare in a modest, family setting.</i>"
    },
    {
        name: "Pioneer Restaurant",
        address: "306 109th St, Arlington, TX 76011",
        popupHTML: "<img src='img/rest3.jpeg' height='30px' width='30px'><p>Pioneeer Restaurant!</p><i>Classic breakfast & lunch chow at a longtime, family-run diner with a kids' menu & daily specials.</i>"
    },
        ];


        function placeMarkerAndPopup(info, token, map) {
        markerArray.push(new mapboxgl.Marker({
            draggable: true
        }));
        poperArray.push(new mapboxgl.Popup());
        geocode(info.address, token).then(function(coordinates) {
        // console.log(coordinates);
        // console.log(info);
        poperArray[markerCount].setHTML(info.popupHTML);
        markerArray[markerCount].setLngLat(coordinates)
        .addTo(map)
        .setPopup(poperArray[markerCount]);
        // console.log(markerArray[markerCount]);
        markerCount++;
    });
    }



        favPlaces.forEach((element) =>
        placeMarkerAndPopup(element, accessToken, map));

        $('#selectZoom').change(function (e) {
        let choice = e.target.value;
        if (choice === '1') {
        map.setZoom(5);
    } else if (choice === '2') {
        map.setZoom(15);
    } else if (choice === '3') {
        map.setZoom(20);
    }
        console.log(choice);
    });
        let locate = '';
        let addString;

        $('#submitLocation').click(function (e) {
        locate = document.getElementById('inputLocation').value;
        // console.log(locate);
        geocode(locate, MAPBOX_KEY).then(function (result) {
        // console.log(result);
        coordLat = result[0];
        coordLong = result[1];
        console.log("The Geo results are: " + coordLong + " & " + coordLat);
        map.setCenter(result);
        map.setZoom(13);
        reverseGeocode({lng: coordLat, lat: coordLong}, MAPBOX_KEY).then(function (results) {
        // logs the address for The Alamo
        addString = results;
        console.log("Reverse Geo Address: " + results);
        changeWeather({address: locate, popupHTML: results}, accessToken, map)
    });

    });
    });
        $('#leftBtn').click(function(){
        markerArray.forEach((element) => element.getElement().style.visibility = "hidden");

    })

        $('#rightBtn').click(function(){
        markerArray.forEach((element) => element.getElement().style.visibility = "visible");
    })

        $('#wowBtn').click(function(){

// CHANGE ICON
        markerArray.forEach((element) =>
        element.getElement().innerHTML = `<img src="../img/deathNote.png" alt="DN" width="30" height="40">`);
    })

    $.get("http://api.openweathermap.org/data/2.5/forecast", {
        APPID: OPEN_WEATHER_APPID,
        lat:    29.423017,
        lon:   -98.48527,
        units: "imperial"
    }).done(function(data) {
        console.log('5 day forecast', data);
        // console.log('5 day forecast', data.list[5]);
        //change 5 day icons
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
        // console.log(changeIcons(data.list[0]));
        // changeIcons(data.list[0])
    });

        function changeWeather(info, token, map){
            markerArray.push(new mapboxgl.Marker({
                draggable: true
            }));
            markerArray[markerCount].on('dragend', onDragEnd);
            poperArray.push(new mapboxgl.Popup());
            geocode(info.address, token).then(function(coordinates) {
                // console.log(coordinates);
                // console.log(info);
                poperArray[markerCount].setHTML(info.popupHTML);
                markerArray[markerCount].setLngLat(coordinates)
                    .addTo(map)
                    .setPopup(poperArray[markerCount]);
                // console.log(markerArray[markerCount]);
                markerCount++;
            });
            $.get("http://api.openweathermap.org/data/2.5/forecast", {
                APPID: OPEN_WEATHER_APPID,
                lat:    coordLat,
                lon:   coordLong,
                units: "imperial"
            }).done(function(data) {
                console.log('5 day forecast', data);
                // console.log('5 day forecast', data.list[5]);
                //change 5 day icons
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
                // console.log(changeIcons(data.list[0]));
                // changeIcons(data.list[0])
            });
        }


        function changeIcons(dataElement){
            let iconString = `http://openweathermap.org/img/w/` + dataElement.weather[0].icon  + '.png';
            return iconString;

        }

         function dayInfo(elementData){
        let info  = `Low: ${elementData.main.temp_min}  / High: ${elementData.main.temp_max} <br>` +
            `Description: ${elementData.weather[0].description} <br>` +
            `Humidity:  ${elementData.main.humidity} <br>`+
            `Wind:  ${elementData.wind.speed} <br>`+
            `Pressure:  ${elementData.main.pressure} <br>`;
        return info;
    }
    // document.getElementById('weather').src = 'http://openweathermap.org/img/w/10n.png';

    function onDragEnd() {
        const lngLat = $(this).getLngLat();
        console.log(`drag coords ${lnglat}`)
        coordinates.innerHTML = `Longitude: ${lngLat.lng}<br />Latitude: ${lngLat.lat}`;
    }

    markerArray[markerCount].on('dragend', onDragEnd);

map.flyto({center: [obj.lng, obj.lat]})

let LNGLAT;
const longlat = markerArray[0].getLngLat();
    marker.on('dragend', function(){
        LNGLAT = marker.getLngLat();
        reverseGeocode(LNGLAT, MAPBOX_KEY).then(function(data){
            document.getElementById('placeData').innerHTML = data;
        })

    })






});