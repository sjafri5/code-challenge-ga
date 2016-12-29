define(function (require) {
  var Api = require('api')
  var MovieCard= require('movie-card')

  var MovieForm = function(){
    var searchButtonListener = function(){
      document.getElementById("submit-search").onclick = function() { 
        var movieTitle = captureSearchInput();
        clearInput();
        submitSearchRequest(movieTitle);
      };
    };

    var clearInput= function(){
      document.getElementById("movie-input").value = "";
    }

    var injectMovieCards= function(movies){
      movies.forEach(function(movie){
        var movieCard= new MovieCard(movie);
        movieCard.initialize();
      })
    };

    var submitSearchRequest = function(movieTitle){
      var url = 'http://www.omdbapi.com/?s=' + movieTitle
      Api.submitSearch(url).then(function(response){
        injectMovieCards(response.Search)
        console.log('yo gotti', response.Search);
      });
    }

    var captureSearchInput = function(){
      return document.getElementById("movie-input").value.replace(' ', '+')
    };

    return {
      searchButtonListener
    }
  }();

  return MovieForm;
});
