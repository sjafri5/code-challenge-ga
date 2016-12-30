define(function (require) {
  var Api = require('api')
  var Card = require('card')

  function FavoriteCard(favorite) {
    this.movie= favorite;

    this.initialize= function(){
      var card = this.createCardContainer();
      var textnode = this.createText();
      card.appendChild(textnode);  
      document.getElementById("cards-display-container").appendChild(card);
    };
  };

  FavoriteCard.prototype = new Card('Favorite');

  return FavoriteCard;
});
