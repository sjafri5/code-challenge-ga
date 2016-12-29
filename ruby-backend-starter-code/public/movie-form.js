define(function (require) {
  var Api = require('api')

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
        var movieCard = document.createElement("div");
        var heartIcon = document.createElement('i')
        heartIcon.setAttribute('class', 'large heart middle aligned icon small-margins')
        movieCard.setAttribute('class', 'item')
        movieCard.setAttribute('id', movie.imdbID)
        var textnode = document.createTextNode(movie.Title);
        movieCard.appendChild(heartIcon);  
        movieCard.appendChild(textnode);  
        document.getElementById("movies-display-container").appendChild(movieCard);
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
