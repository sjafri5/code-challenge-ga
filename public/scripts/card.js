define(function (require) {

  function Card(cardType){
    //  cardtype is saved as this.cardType
    this.cardType = cardType;

    this.createCardContainer = function(){
      var _this = this // saving what 'this' refers to in the outer function so that we can use it inside an inner function where the assignment of this will have changed.
      var card = document.createElement("div"); // creating a div
      card.setAttribute('class', 'row movie-card') // assigning class names to that div
      card.setAttribute('id', this.movie.imdbID) // assigning an ID
      

      //  adding an eventlistener to that div. if it is clicked, we call fetchMoreInfo
      card.addEventListener('click', function(e){
        if (_this.cardType == 'Search' && !_this.movieDetailsExist(card)) {
          _this.fetchMoreInfo();
        }
      })
      return card;
    }

    this.createText= function(){
      // this creates the appropriate title for each movie card
      var div = document.createElement("div");
      div.setAttribute('class', 'col-xs-11')
      var h4= document.createElement("h4");
      h4.setAttribute('class', 'card-title')
      var textNode = document.createTextNode(this.movie.Title);
      h4.appendChild(textNode);  
      div.appendChild(h4);
      return div
    };

    this.movieDetailsExist = function(card){
      // this checks if movieDetails have already been imported by seeing if the last element in the card has the class movie-details
      var children = card.childNodes;
      var lastMovieCardElement = children[(children.length - 1)];
      return this.hasClass(lastMovieCardElement, 'movie-details');
    }

    this.hasClass= function(el, cls) {
      // this uses Regex to search the classnames of the passed in element to see a match.
      return el.className && new RegExp("(\\s|^)" + cls + "(\\s|$)").test(el.className);
    }
  };

  return Card;
});
