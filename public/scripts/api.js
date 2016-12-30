define(function (require) {
  var Api= function(){
    var submitSearch= function(movieTitle){
      var url = 'https://www.omdbapi.com/?s=' + movieTitle
      return fetch(url)
        .then(function(response){
          return response.json()
        })
    };

    var fetchMoreInfo= function(id){
      var url = 'https://www.omdbapi.com/?i=' + id
      return fetch(url)
        .then(function(response){
          return response.json()
        })
    };

    var fetchFavorites= function(){
      console.log('protocal', window.location.protocol);
      console.log('location', location.hostname);
      var url = 'http://localhost:4567/favorites'
      //var url = 'https://ga-codechallenge.herokuapp.com/favorites'
      return fetch(url)
        .then(function(response){
          return response.json()
        })
    };

    var saveToFavorites= function(movie){
      console.log('location', location.hostname);
      var url = 'http://localhost:4567/favorites'
      //var url = 'https://ga-codechallenge.herokuapp.com/favorites'
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
