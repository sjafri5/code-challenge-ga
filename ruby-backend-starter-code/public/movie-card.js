define(function (require) {
  var Api = require('api')

  function MovieCard(movie) {
    this.movie= movie;
    this.createMovieCardElement = function(){
        var movieCard = document.createElement("div");
        movieCard.setAttribute('class', 'item movie-card')
        movieCard.setAttribute('id', this.movie.imdbID)
        movieCard.addEventListener('click', function(e){
          console.log('works>', e);
        })

        var heartIcon = this.createHeartIcon()
        var textnode = document.createTextNode(this.movie.Title);
        movieCard.appendChild(heartIcon);  
        movieCard.appendChild(textnode);  
        document.getElementById("movies-display-container").appendChild(movieCard);
    };
  this.createHeartIcon = function(){
    var heartIcon = document.createElement('i');
    heartIcon.setAttribute('class', 'large heart middle aligned icon small-margins');
    heartIcon.addEventListener('click', function(e){
      e.stopPropagation();
      console.log('hear shtuff>', e);
    })
    return heartIcon;
  }
  }
  return MovieCard;
});

  //var MovieCard = function(){
    //var moreInfoListener = function(){
      //document.getElementsByClassName("movie-card").onclick = function() { 
        //console.log('i clicked homie');
      //};
    //};

    //return {
      //moreInfoListener 
    //}
  //}();

  //return MovieCard;
//});
