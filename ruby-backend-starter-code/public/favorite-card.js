define(function (require) {
  var Api = require('api')

  function FavoriteCard(favorite) {
    this.favorite= favorite;

    this.initialize= function(){
      var card = this.createFavoriteDiv();
      var textnode = this.createText();
      card.appendChild(textnode);  
      document.getElementById("cards-display-container").appendChild(card);
    };

    this.createText= function(){
      return document.createTextNode(this.favorite.name);
    };

    this.createFavoriteDiv = function(){
      var _this = this
      var card = document.createElement("div");
      card.setAttribute('class', 'item movie-card')
      card.setAttribute('id', this.favorite.oid)
      card.addEventListener('click', function(e){
        if (!_this.movieDetailsExist(movieCard)) {
          _this.fetchMoreInfo();
        }
      })
      return card;
    };

    this.fetchMoreInfo= function(){
      var _this = this
      var url = 'http://www.omdbapi.com/?i=' + this.movie.imdbID
      Api.fetchMoreInfo(url).then(function(response){
        _this.injectMovieDetails(response);
        console.log('imdp', response);
      });
    }

    this.injectMovieDetails= function(movieDetails){
      var div = document.createElement("div");
      div.setAttribute('class', 'item movie-details')
      var text = document.createTextNode(movieDetails.Genre);
      div.appendChild(text);  
      document.getElementById(this.movie.imdbID).appendChild(div)
    };

    this.movieDetailsExist = function(movieCard){
      var children = movieCard.childNodes;
      var lastMovieCardElement = children[(children.length - 1)];
      return this.hasClass(lastMovieCardElement, 'movie-details');
    }

    this.hasClass= function(el, cls) {
      return el.className && new RegExp("(\\s|^)" + cls + "(\\s|$)").test(el.className);
    }
      
    this.createHeartIcon = function(){
      var heartIcon = document.createElement('i');
      heartIcon.setAttribute('class', 'large heart middle aligned icon small-margins');
      heartIcon.addEventListener('click', function(e){
        e.stopPropagation();
        console.log('hear shtuff>', e);
      })
      return heartIcon;
    };
  };


  return FavoriteCard;
});
