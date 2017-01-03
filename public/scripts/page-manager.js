define(function (require) {

  var PageManager= function(){
    var updateTitle= function(pageTitle){
      document.getElementById("page-title").innerHTML= pageTitle;
    };

    var triggerAlert = function(pageTitle){
      var alertBanner = document.getElementById("alert-banner")
      alertBanner.innerHTML= 'Saved!';
      alertBanner.setAttribute('class', 'alert alert-success') // assigning bootstrap class names to that div
      window.setTimeout(removeAlert, 2000);
    };

    var removeAlert = function(){
      document.getElementById("alert-banner").remove();
    }

    var clearDisplayContainer= function(){
      var searchResultContainer = document.getElementById("cards-display-container");
      while (searchResultContainer.firstChild) {
        searchResultContainer.removeChild(searchResultContainer.firstChild);
      }
    };

    return {
      clearDisplayContainer,
      updateTitle,
      triggerAlert
    }
  }();

  return PageManager
});
