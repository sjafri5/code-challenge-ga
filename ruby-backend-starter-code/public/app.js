
var movieForm = function(){
  var searchListener = function(){
    document.getElementById("searchButton").onclick = function() { 
      console.log("testfString");
    };
  };

  return {
    searchListener
  }
}();

movieForm.searchListener();
