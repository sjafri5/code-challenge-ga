define(function (require) {
  var Api= function(){
    // makes a get request to omdbabp with the appropriate url. once the promise is returned succesfully, it calls json() to retrieve the json data.
    var submitSearch= function(movieTitle){
      var url = 'https://www.omdbapi.com/?s=' + movieTitle
      return fetch(url)
        .then(function(response){
          return response.json()
        })
    };

    // same idea as sumbitSearch but we're calling a different endpoint
    var fetchMoreInfo= function(id){
      var url = 'https://www.omdbapi.com/?i=' + id
      return fetch(url)
        .then(function(response){
          return response.json()
        })
    };

    // here we're calling our own server. We use window.location.href that will return the current url. (makes it easier for development so we don't have to keep changing the code between dev and prod)
    var fetchFavorites= function(){
      var url = window.location.href + '/favorites' 
      return fetch(url)
        .then(function(response){
          return response.json()
        })
    };

    // saveToFavorites is a Post request we send a request object along with the url when we call fetch.  
    var saveToFavorites= function(movie){
      var url = window.location.href + '/favorites' 
      var data = new FormData();
      data.append('json', JSON.stringify(movie));
      var requestObject = {
        method: 'POST',
        body: data,
      };
      console.log('res', requestObject);

      return fetch(url, requestObject)
        .then(function(response){
          console.log('response', response);
          return response.json()
        })
    };

    return {
      submitSearch,
      fetchMoreInfo,
      fetchFavorites,
      saveToFavorites
    }
  }();

  return Api;
});
