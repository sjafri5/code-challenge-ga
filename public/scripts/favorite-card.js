define(function (require) {
  // imports Card using require
  var Card = require('card')

  function FavoriteCard(favorite) {
    // setting favorite object to this.movie
    this.movie= favorite;

    // initialize calls several functions that are nowhere to be seen. They are using prototypal inheritence to engage with methods that are the Card objects. Notice on line 18 we declare Card as FavoriteCard's prototype. This means that all the methods that belong to Card are passed to FavoriteCard as well. 
    //  overall we seem to be appending text to a card element which is then appended to the document.
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
