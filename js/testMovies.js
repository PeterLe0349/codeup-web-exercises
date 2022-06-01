"use strict";
$(document).ready(function(){
    refreshMovies();

    function refreshMovies(){
        document.getElementById('movieDisplay').innerHTML = 'Loading Movies';
        fetch('https://sequoia-fuchsia-woolen.glitch.me/movies').then( response => {
            response.json().then( movies => {
                console.log(movies);
                document.getElementById('movieDisplay').innerHTML = '';
                movies.forEach( movieObj  => {
                    let count = 0;
                    // do something with the movie object
                    // (movieObj.title = 'hello');
                    // console.log(movieObj);
                    $('#movieDisplay').append(makeMovieData(movieObj));
                });
            });
        });
    }



    const reviewObj = {
        restaurant_id: 1,
        name: 'Peter',
        title: 'Peter',
        rating: 9,
        comments: "This is The Coder"
    };

    $('#addBtn').click(function(){
        const url = 'https://sequoia-fuchsia-woolen.glitch.me/movies';
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(reviewObj),
        };
        fetch(url, options)
            .then( response => response.json().then( movies => {
                console.log(movies);
                refreshMovies();
            }))  /* review was created successfully */
            .catch( error => console.error(error) ); /* handle errors */
    });

    function makeMovieData(movieObject){
        let html = '';
        html += `<br>Movie ID:${movieObject.id}<br>`;
        if(movieObject.title !== undefined){
            html += `Title: ${movieObject.title}<br>`;
        }
        return html;
    }

   $('#modifyBtn').click(function(){
       fetch('https://sequoia-fuchsia-woolen.glitch.me/movies/8', {
           method: 'PATCH',
           body: JSON.stringify({
               title: 'foobar8',
           }),
           headers: {
               'Content-type': 'application/json; charset=UTF-8',
           },
       })
           .then((response) => response.json())
           .then((json) => console.log(json));

   });

    // fetch('http://www.omdbapi.com/?t=gladiAtor&apikey=7f5f0581')
    //     .then( response => response.json().then( movies => {
    //         console.log(movies.Poster);
    //         // refreshMovies();
    //     }))  /* review was created successfully */
    //     .catch( error => console.error(error) ); /* handle errors */

    // http://www.omdbapi.com/?t=gladiator

    function makeMoviePosterLink(movieName){
        let movieCheck = `http://www.omdbapi.com/?t=${movieName}&apikey=7f5f0581`;
        let posterLink = '';
        console.log('1');
        fetch(movieCheck)
            .then( response => response.json().then( movies => {
                console.log('2');
                console.log(movies);
                if(movies.Response === 'True'){
                    // console.log('3');
                    posterLink = movies.Poster;
                    console.log('3 The image link is ' + posterLink);
                    $('#movieDisplay').prepend(createImage(movies, movieName)) ;
                }
                // refreshMovies();
            }))  /* review was created successfully */
            .catch( error => console.error(error) ); /* handle errors */

    }
    $('#picBtn').click(function(){
        let name = $('#addMovieInput').val();
        makeMoviePosterLink(name);
    });



    function createImage(movies, movieName){
        let html = `<div class="col-6">`;
        html += `<h3>Title: ${movies.Title}</h3>`;
        html += `<h4>Actors: ${movies.Actors}</h4>`;
        html += `<h4>Genre: ${movies.Genre}</h4>`;
        html += `<h4>Rated: ${movies.Rated}</h4>`;
        html += `<img src="${movies.Poster}" class="img-fluid" alt="BrokenImage">`;
        html += `</div>`;
        return html;
    }

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }





// end jquery
});
    