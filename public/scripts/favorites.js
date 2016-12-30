define(function (require) {
  var Api = require('api')
  var FavoriteCard= require('favorite-card')

  var Favorites= function(){
    var linkListener = function(){
      document.getElementById("favorites").onclick = function() { 
        clearSearchResults();
        fetchFavorites()
      };
    };

    var fetchFavorites = function(){
      var url = 'https://ga-codechallenge.herokuapp.com/favorites'
      Api.fetchFavorites(url).then(function(response){
        injectFavoriteCards(response)
      });
    }

    var injectFavoriteCards = function(favorites){
      favorites.forEach(function(favorite){
        var favoriteCard= new FavoriteCard(favorite);
        favoriteCard.initialize();
      })
    }


    var clearSearchResults = function(){
      var searchResultContainer = document.getElementById("cards-display-container");
      while (searchResultContainer.firstChild) {
        searchResultContainer.removeChild(searchResultContainer.firstChild);
      }
    }

    return {
      linkListener 
    };
  }();

  return Favorites;
});
