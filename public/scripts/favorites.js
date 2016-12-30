define(function (require) {
  var Api = require('api')
  var PageManager= require('page-manager')
  var FavoriteCard= require('favorite-card')

  var Favorites= function(){
    var linkListener = function(){
      document.getElementById("favorites").onclick = function() { 
        PageManager.clearDisplayContainer();
        fetchFavorites()
      };

      document.getElementById("favorites").onclick = function() { 
        PageManager.clearDisplayContainer();
        fetchFavorites()
      };
    };

    var fetchFavorites = function(){
      Api.fetchFavorites().then(function(response){
        var favorites = cleanMovieValues(response)
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

    return {
      linkListener 
    };
  }();

  return Favorites;
});
