define(function (require) {
  var Api = require('api')
  var PageManager= require('page-manager')
  var MovieCard= require('movie-card')

  var MovieForm = (function(){
    // this performs a similar function to Favorite.linkListener. 
    // In fact, it's so similar we could probably extract it into PageManager
    
    var searchButtonListener = function(){
      document.getElementById("submit-search").onclick = function() { 
        var movieTitle = captureSearchInput();
        clearInput();
        PageManager.clearDisplayContainer();
        submitSearchRequest(movieTitle);
      };
    };

    // clearInput finds an element by it's id and sets its value to an empty string.
    
    var clearInput= function(){
      document.getElementById("movie-input").value = "";
    }

    //  injectMovieCards takes a list of favorite movies and instantiates an 
    //  instance of FavoriteCard. It then calls initialize on the instance.

    var injectMovieCards= function(movies){
      movies.forEach(function(movie){
        var movieCard= new MovieCard(movie);
        movieCard.initialize();
      })
    };

    //  submitSearchRequest makes the Api module call a function by the same 
    //  name and then waits for a promise (indicated by the then). upon 
    //  succesful return of the promise it runs the function encapsulated 
    //  by the then.
    
    var submitSearchRequest = function(movieTitle){
      Api.submitSearch(movieTitle).then(function(response){
        injectMovieCards(response.Search)
      });
    }

    //  captureSearchInput grabs the value of the input and substitutes every instance of a space with a plus in order to comply with what the url should look like.

    var captureSearchInput = function(){
      return document.getElementById("movie-input").value.replace(' ', '+')
    };

    return {
      searchButtonListener
    }
  }());

  return MovieForm;
});
