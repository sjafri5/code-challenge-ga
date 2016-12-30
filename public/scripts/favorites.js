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
      Api.fetchFavorites().then(function(response){
        var favorites = cleanMovieValues(response)
        console.log('in herefavorite', favorites);
        injectFavoriteCards(favorites)
      });
    }

    var cleanMovieValues = function(favorites){
      return favorites.map(function(favorite){
        return {
          Title: favorite.name,
          imdbID: favorite.oid
        }
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
