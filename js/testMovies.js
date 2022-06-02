"use strict";
//SORT LOGIC OBJECT
// employees.sort((a, b) => {
//     return a.age - b.age;
// });

$(document).ready(function(){
    refreshMovies();

    function refreshMovies(){
        document.getElementById('movieDisplay').innerHTML = `<div class="text-center"><h1>Loading movies...</h1></div>`;
        fetch('https://sequoia-fuchsia-woolen.glitch.me/movies').then( response => {
            $('#movieDisplay').html('');
            response.json().then( movies => {
                console.log(movies);
                document.getElementById('movieDisplay').innerHTML = '';
                movies.forEach( movieObj  => {
                    $('#movieDisplay').append(`<div class="overflow-auto" id="${movieObj.id}"> ${JSON.stringify(movieObj)}</div>`     );
                });
            });
        });
    }

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
        html += ` <div class="card bg-dark text-white mb-2 cardMinHeight text-wrap">`;
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

    $('#addMovieBtn').click(function(e){
        e.preventDefault();
        let movieObj = {};
        movieObj.title = $('#inputTitle').val();
        movieObj.director = $('#inputDirector').val();
        movieObj.actors = $('#inputActors').val();
        movieObj.genre = $('#inputGenre').val();
        movieObj.rated = $('#inputRating').val();
        movieObj.plot = $('#inputPlot').val();
        movieObj.poster = $('#inputPosterLink').val();
        console.log(movieObj);
        let movieCheck = `http://www.omdbapi.com/?t=${movieObj.Title}&apikey=7f5f0581`;
        console.log('1');
        fetch(movieCheck)
            .then( response => response.json().then( movie => {
                if(movie.Response === 'True') {
                    console.log('3');
                    movieObj.poster = movie.Poster;
                }
                console.log(movieObj);
                console.log(movieObj.poster);
                $('#movieDisplay').prepend(createImage(movieObj)) ;
                const url = 'https://sequoia-fuchsia-woolen.glitch.me/movies';
                const options = {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(movieObj),
                };
                fetch(url, options)
                    .then( response => response.json().then( movies => {
                        console.log(movies);
                        refreshMovies();
                    }))  /* review was created successfully */
                    .catch( error => console.error(error) ); /* handle errors */


                // refreshMovies();
            }))  /* review was created successfully */
            .catch( error => console.error(error) ); /* handle errors */

    });

    $('#editChooseBtn').click(function(){
        let editID = document.getElementById('editIDInput').value;
        console.log('ID to be edited:' + editID);
        fetch(`https://sequoia-fuchsia-woolen.glitch.me/movies/${editID}`, {
            method: 'GET',
        }).then(result =>  result.json().then(final => {
            console.log("showing final object");
            console.log(final);
            // let movieObj = {};
            document.getElementById('inputEditTitle').value = final.title;
            document.getElementById('inputEditDirector').value = final.director;
            document.getElementById('inputEditActors').value = final.actors;
            document.getElementById('inputEditGenre').value = final.genre;
            document.getElementById('inputEditRating').value = final.rated;
            document.getElementById('inputEditPlot').value = final.plot;
            document.getElementById('inputEditPosterLink').value = final.poster;
            console.log(movieObj);
            console.log(JSON.stringify(movieObj));
            // movieObj.title = final.title;
            // movieObj.director = final.title;
            // movieObj.actors = final.title;
            // movieObj.genre = final.title;
            // movieObj.rated = final.title;
            // movieObj.plot = final.title;
            // movieObj.poster = final.title;
        })                         ); //end then

// end of function
    });

    $('#editMovieSubBtn').click(function(e){
        e.preventDefault();
        let editID = document.getElementById('editIDInput').value;
        let movieObj = {};
        movieObj.title =  document.getElementById('inputEditTitle').value
        movieObj.director =  document.getElementById('inputEditDirector').value;
        movieObj.actors = document.getElementById('inputEditActors').value;
        movieObj.genre =  document.getElementById('inputEditGenre').value;
        movieObj.rated = document.getElementById('inputEditRating').value;
        movieObj.plot = document.getElementById('inputEditPlot').value;
        movieObj.poster =  document.getElementById('inputEditPosterLink').value;
        console.log(movieObj);
        let movieCheck = `http://www.omdbapi.com/?t=${movieObj.title}&apikey=7f5f0581`;
        console.log('1');
        fetch(movieCheck)
            .then( response => response.json().then( movie => {
                if(movie.Response === 'True') {
                    console.log('3');
                    movieObj.poster = movie.Poster;
                }
                console.log(movieObj);
                console.log(movieObj.poster);
                $('#movieDisplay').prepend(createImage(movieObj)) ;
                const url = `https://sequoia-fuchsia-woolen.glitch.me/movies/${editID}`;
                const options = {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(movieObj),
                };
                fetch(url, options)
                    .then( response => response.json().then( movies => {
                        console.log(movies);
                        refreshMovies();
                    }))  /* review was created successfully */
                    .catch( error => console.error(error) ); /* handle errors */


                // refreshMovies();
            }))  /* review was created successfully */
            .catch( error => console.error(error) ); /* handle errors */

    });

    //work in tandem with add movie

    $('#deleteSubBtn').click(function(){
        console.log(document.getElementById('deleteIDinput').value);
       let deleteID = (document.getElementById('deleteIDinput').value);
        document.getElementById('deleteIDinput').value = '';
        fetch(`https://sequoia-fuchsia-woolen.glitch.me/movies/${deleteID}`, {
            method: 'DELETE',
        }).then(result => {
            console.log(`deleted ${deleteID}`);
            console.log(result);
            refreshMovies();
        });
    });

    $('#addOptionBtn').click(function(){
        $('#addPictureOption').addClass('hideOption');
        $('#addMovieForm').toggleClass('hideOption');
        $('#deleteMovieOption').addClass('hideOption');
        $('#editMovieOption').addClass('hideOption');
    });

    $('#editOptionBtn').click(function(){

        $('#addMovieForm').addClass('hideOption');
        $('#addPictureOption').addClass('hideOption');
        $('#editMovieOption').toggleClass('hideOption');
        $('#deleteMovieOption').addClass('hideOption');
    });

    $('#posterOptionBtn').click(function(){

        $('#addMovieForm').addClass('hideOption');
        $('#addPictureOption').toggleClass('hideOption');
        $('#deleteMovieOption').addClass('hideOption');
        $('#editMovieOption').addClass('hideOption');
    });

    $('#deleteOptionBtn').click(function(){
        $('#addPictureOption').addClass('hideOption');
        $('#deleteMovieOption').removeClass('hideOption');
        $('#addMovieForm').addClass('hideOption');
        $('#editMovieOption').addClass('hideOption');
    });

    $('#refreshOptionBtn').click(function(){
        $('#addPictureOption').addClass('hideOption');
        $('#addMovieForm').addClass('hideOption');
        $('#deleteMovieOption').addClass('hideOption');
        $('#editMovieOption').addClass('hideOption');
        refreshMovies();
    });







// end jquery
});
    