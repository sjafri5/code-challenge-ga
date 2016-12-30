define(function (require) {
  var Api = require('api')
  var MovieCard= require('movie-card')

  var MovieForm = function(){
    var searchButtonListener = function(){
      document.getElementById("submit-search").onclick = function() { 
        var movieTitle = captureSearchInput();
        clearInput();
        clearDisplayContainer();
        submitSearchRequest(movieTitle);
      };
    };

    var clearInput= function(){
      document.getElementById("movie-input").value = "";
    }
    
    var clearDisplayContainer= function(){
      var searchResultContainer = document.getElementById("cards-display-container");
      while (searchResultContainer.firstChild) {
        searchResultContainer.removeChild(searchResultContainer.firstChild);
      }
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
