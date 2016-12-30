define(function (require) {
  var Api = require('api')
  var Card = require('card')


  //var FavoriteCard = Object.create(Card)

  function FavoriteCard(favorite) {
    this.movie= favorite;

    this.initialize= function(){
      var card = this.createCardContainer();
      var textnode = this.createText();
      card.appendChild(textnode);  
      document.getElementById("cards-display-container").appendChild(card);
    };

    this.createText= function(){
      return document.createTextNode(this.movie.Title);
    };

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

  FavoriteCard.prototype = new Card('Favorite');

  return FavoriteCard;
});
