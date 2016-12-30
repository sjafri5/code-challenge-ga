define(function (require) {
  var Api = require('api')
  var Card = require('card')

  function MovieCard(movie) {
    this.movie= movie;

    this.initialize= function(){
      var movieCard = this.createCardContainer();
      var heartIcon = this.createHeartIcon();
      var textnode = this.createText();
      movieCard.appendChild(heartIcon);  
      movieCard.appendChild(textnode);  
      document.getElementById('cards-display-container').appendChild(movieCard);
    };

    this.fetchMoreInfo= function(){
      var _this = this
      Api.fetchMoreInfo(this.movie.imdbID).then(function(response){
        _this.injectMovieDetails(response);
        console.log('imdp', response);
      });
    }

    this.injectMovieDetails= function(movieDetails){
      console.log('movieDetails', movieDetails);
      var div = document.createElement("div");
      div.setAttribute('class', 'item movie-details')
      var ul = document.createElement("ul");

      var detailKeys = ['Year', 'Runtime', 'Genre', 'Language', 'Plot', 'Director', 'Actors']
      detailKeys.map(function(key){
        var li = document.createElement("li");
        var text = document.createTextNode(key + ': ' + movieDetails[key]);
        li.appendChild(text);
        ul.appendChild(li);
      })

      div.appendChild(ul);  
      document.getElementById(this.movie.imdbID).appendChild(div)
    };

    this.createHeartIcon = function(){
      var _this = this;
      var heartIcon = document.createElement('i');
      heartIcon.setAttribute('class', 'large heart middle aligned icon small-margins');
      heartIcon.addEventListener('click', function(e){
        e.stopPropagation();
        _this.saveToFavorites();
      })
      return heartIcon;
    };

    this.saveToFavorites= function(){
      var movieObject = { name: this.movie.Title, oid: this.movie.imdbID }
      Api.saveToFavorites(movieObject).then(function(){
        console.log('saved');
      })
    }
  };

  MovieCard.prototype = new Card('Search');

  return MovieCard;
});
