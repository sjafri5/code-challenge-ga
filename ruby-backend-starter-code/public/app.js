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

  submitSearchRequest = function(movieTitle){
    var url = 'http://www.omdbapi.com/?s=' + movieTitle
    Api.submitSearch(url).then(function(response){
      console.log('yo gotti', response);
    });
  }

  captureSearchInput = function(){
    return document.getElementById("movie-input").value.replace(' ', '+')
  };

  return {
    searchListener
  }
}();

MovieForm.searchListener();
