define(function (require) {
  var Api= function(){
    var submitSearch= function(url){
      return fetch(url)
        .then(function(response){
          return response.json()
        })
    };

    var fetchMoreInfo= function(url){
      return fetch(url)
        .then(function(response){
          return response.json()
        })
    };

    var fetchFavorites= function(url){
      return fetch(url)
        .then(function(response){
          return response.json()
        })
    };

    var saveToFavorites= function(url, movie){
      var data = new FormData();
      var foo = JSON.stringify(movie)
      data.append('json', JSON.stringify( movie ) );
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
