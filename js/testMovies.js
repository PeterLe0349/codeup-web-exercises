"use strict";
$(document).ready(function(){
    refreshMovies();

    function refreshMovies(){
        document.getElementById('movieDisplay').innerHTML = 'Loading Movies';
        fetch('https://sequoia-fuchsia-woolen.glitch.me/movies').then( response => {
            $('#movieDisplay').html('');
            response.json().then( movies => {
                console.log(movies);
                document.getElementById('movieDisplay').innerHTML = '';
                movies.forEach( movieObj  => {
                    let count = 0;
                    // do something with the movie object
                    // (movieObj.title = 'hello');
                    // console.log(movieObj);
                    $('#movieDisplay').append(JSON.stringify(movieObj) + '<br>');
                    // $('#movieDisplay').append(makeMovieData(movieObj));
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
                    $('#movieDisplay').prepend(createImage(movies)) ;
                }
                // refreshMovies();
            }))  /* review was created successfully */
            .catch( error => console.error(error) ); /* handle errors */
    }

    $('#picBtn').click(function(){
        let name = $('#addMovieInput').val();
        makeMoviePosterLink(name);
    });

    function getImageLink(movieName){
        let movieCheck = `http://www.omdbapi.com/?t=${movieName}&apikey=7f5f0581`;
        let posterLink = '';
        console.log('1');
        fetch(movieCheck)
            .then( response => response.json().then( movie => {
                if(movie.Response === 'True'){
                    // console.log('3');
                    posterLink = movie.Poster;
                }
                return posterLink;
                // refreshMovies();
            }))  /* review was created successfully */
            .catch( error => console.error(error) ); /* handle errors */

    }


    function createImage(movies){
        let html = `<div class="col-6">`;
        html += ` <div class="card bg-dark text-white mb-2 cardMinHeight">`;
        html += `<img src="${movies.Poster}" class="card-img imgOpacity cardHeight" alt="Broken Image">`;
        html += `<div class="card-img-overlay">`;
        html += `<h3 class="card-title">${movies.Title}</h3>`;
        html += `<p class="card-text"><strong>Actors</strong>: ${movies.Actors}</p>`;
        html += `<p class="card-text"><strong>Director</strong>: ${movies.Director}</p>`;
        html += `<p class="card-text"><strong>Genre</strong>: ${movies.Genre}</p>`;
        html += `<p class="card-text"><strong>Rated</strong>: ${movies.Rated}</p>`;
        html += `<p class="card-text"><strong>Plot</strong>: ${movies.Plot}</p>`;
        html += `</div>`; // end card overlay
        html += `</div>`; // end card
        html += `</div>`;
        return html;
    }

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    $('#addMovieBtn').click(function(){
        let movieObj = {};
        movieObj.Title = $('#inputTitle').val();
        movieObj.Director = $('#inputDirector').val();
        movieObj.Actors = $('#inputActors').val();
        movieObj.Genre = $('#inputGenre').val();
        movieObj.Rated = $('#inputRating').val();
        movieObj.Plot = $('#inputPlot').val();
        movieObj.Poster = $('#inputPosterLink').val();
        console.log(movieObj);
        $('#movieDisplay').prepend(createImage(movieObj)) ;
    });

    $('#addOptionBtn').click(function(){
        $('#addMovieForm').addClass('hideOption');
        $('#addPictureOption').toggleClass('hideOption');
    });

    $('#editOptionBtn').click(function(){
        $('#addPictureOption').addClass('hideOption');
        $('#addMovieForm').toggleClass('hideOption');
    });

    $('#refreshOptionBtn').click(function(){
        $('#addPictureOption').addClass('hideOption');
        $('#addMovieForm').addClass('hideOption');
        refreshMovies();
    });







// end jquery
});
    