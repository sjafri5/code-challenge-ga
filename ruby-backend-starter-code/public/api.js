define(function (require) {
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

  return Api;
});
