define(function (require) {

  var PageManager= function(){
    var clearDisplayContainer= function(){
      var searchResultContainer = document.getElementById("cards-display-container");
      while (searchResultContainer.firstChild) {
        searchResultContainer.removeChild(searchResultContainer.firstChild);
      }
    };

    return {
      clearDisplayContainer 
    }
  }();

  return PageManager
});
