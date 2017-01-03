define(function (require) {
  //  We are requiring any dependancies that Favorites will have at the top.

  var Api = require('api')
    var PageManager= require('page-manager')
    var FavoriteCard= require('favorite-card')




    // Here, we are create an Immediately Invoked Function Expression (IIFE). 
    // This will allow us to create methods inside the functions but then we 
    // can select which of those functions we want to expose based on what we return. 
    //
    // Since every function has a return value, which is the final output of that 
    // function, that is what will be exposed. Can you figure out which of Favorites' 
    // methods are exposed / callable. (hint: check the return method)

    var Favorites= (function(){

      // linkListener is an event listener. It's searching the document for 
      // any element with an id of favorites and listening for a click event. 
      // If that click event happens, it runs the function that proceeds

      var linkListener = function(){
        document.getElementById("favorites").onclick = function() { 

          //  so if the click happens, it runs the following two lines:
          //  it calls a f(x) on the PageManager module which seems to clean the display
          //  and it makes an internal call to fetchFavorites
          PageManager.clearDisplayContainer();
          PageManager.updateTitle('Your Favorites');
          fetchFavorites()
        };
      };


      var fetchFavorites = function(){
        //  fetchFavorites makes the Api module call a function by the same 
        //  name and then waits for a promise (indicated by the then). upon 
        //  succesful return of the promise it runs the function encapsulated 
        //  by the then. If the promise we're to fail then it would skip over 
        //  then and be deposited in the catch method (not fleshed out below).

        Api.fetchFavorites().then(function(response){
          //  after succesful return of the promise we call cleanMovieValues and 
          //  assign the results to a variable. we then call injectFavoriteCards on that var.
          var favorites = cleanMovieValues(response)
            injectFavoriteCards(favorites)
        }).catch(function(err){
          console.log('error', err);
        })
      }

      //  cleanMoviewValues simply maps the array of movie objects and updates 
      //  their keys so that they are congruent with the keys that omdbapi uses. 
      //  This way, we can deal with the movie objects coming from the api and the 
      //  movie objects coming from out storage in the same way. 
      
      var cleanMovieValues = function(favorites){
        return favorites.map(function(favorite){
          return {
            Title: favorite.name,
            imdbID: favorite.oid
          }
        });
      }

      //  the method below takes a list of favorite movies and instantiates an 
      //  instance of FavoriteCard. It then calls initialize on the instance.
      
      var injectFavoriteCards = function(favorites){
        favorites.forEach(function(favorite){
          var favoriteCard= new FavoriteCard(favorite);
          favoriteCard.initialize();
        })
      }

      //  this is the only function that is available to the outside world.
      
      return {
        linkListener 
      };
    }());

  return Favorites;
});
