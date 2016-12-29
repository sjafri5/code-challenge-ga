var Api= function(){
  var submitSearch= function(url){
    return fetch(url)
      .then(function(response){
        return response.json()
      })
  };
  return {
    submitSearch
  }
}();


var MovieForm = function(){
  var searchListener = function(){
    document.getElementById("submit-search").onclick = function() { 
      var movieTitle = captureSearchInput();
      submitSearchRequest(movieTitle);
    };
  };

  var injectMovieCards= function(movies){
    movies.forEach(function(movie){
      var movieCard = document.createElement("li");
      var textnode = document.createTextNode(movie.Title);
      movieCard.appendChild(textnode);  
      document.getElementById("movies-display-container").appendChild(movieCard);
    })

    //document.getElementById("movies-display-container").appendChild(document.createElement('p'))
      //var movieTitle = captureSearchInput();
      //submitSearchRequest(movieTitle);
    //};
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
    searchListener
  }
}();

MovieForm.searchListener();
