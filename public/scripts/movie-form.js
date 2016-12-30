define(function (require) {
  var Api = require('api')
  var PageManager= require('page-manager')
  var MovieCard= require('movie-card')

  var MovieForm = function(){
    var searchButtonListener = function(){
      document.getElementById("submit-search").onclick = function() { 
        var movieTitle = captureSearchInput();
        clearInput();
        PageManager.clearDisplayContainer();
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
      Api.submitSearch(movieTitle).then(function(response){
        injectMovieCards(response.Search)
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
