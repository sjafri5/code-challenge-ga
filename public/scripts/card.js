define(function (require) {

  function Card(cardType){
    this.cardType = cardType;
    this.createCardContainer = function(){
      var _this = this
      var card = document.createElement("div");
      card.setAttribute('class', 'card card-block movie-card')
      card.setAttribute('id', this.movie.imdbID)
      card.addEventListener('click', function(e){
        if (_this.cardType == 'Search' && !_this.movieDetailsExist(card)) {
          _this.fetchMoreInfo();
        }
      })
      return card;
    }

    this.createText= function(){
      var h4= document.createElement("h4");
      h4.setAttribute('class', 'card-title')
      var textNode = document.createTextNode(this.movie.Title);
      h4.appendChild(textNode);  
      return h4
    };

    this.movieDetailsExist = function(card){
      var children = card.childNodes;
      var lastMovieCardElement = children[(children.length - 1)];
      return this.hasClass(lastMovieCardElement, 'movie-details');
    }

    this.hasClass= function(el, cls) {
      return el.className && new RegExp("(\\s|^)" + cls + "(\\s|$)").test(el.className);
    }
  };

  return Card;
});
