define(function (require) {

  var PageManager= function(){
    var updateTitle= function(pageTitle){
      document.getElementById("page-title").innerHTML= pageTitle;
    };

    var clearDisplayContainer= function(){
      var searchResultContainer = document.getElementById("cards-display-container");
      while (searchResultContainer.firstChild) {
        searchResultContainer.removeChild(searchResultContainer.firstChild);
      }
    };

    return {
      clearDisplayContainer,
      updateTitle
    }
  }();

  return PageManager
});
