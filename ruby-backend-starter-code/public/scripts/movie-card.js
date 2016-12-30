define(function (require) {
  var Api = require('api')

  function MovieCard(movie) {
    this.movie= movie;

    this.initialize= function(){
      var movieCard = this.createMovieDiv();
      var heartIcon = this.createHeartIcon();
      var textnode = this.createText();
      movieCard.appendChild(heartIcon);  
      movieCard.appendChild(textnode);  
      document.getElementById('cards-display-container').appendChild(movieCard);
    };

    this.createText= function(){
      return document.createTextNode(this.movie.Title);
    };

    this.createMovieDiv = function(){
      var _this = this
      var movieCard = document.createElement("div");
      movieCard.setAttribute('class', 'item movie-card')
      movieCard.setAttribute('id', this.movie.imdbID)
      movieCard.addEventListener('click', function(e){
        if (!_this.movieDetailsExist(movieCard)) {
          _this.fetchMoreInfo();
        }
      })
      return movieCard;
    };

    this.fetchMoreInfo= function(){
      var _this = this
      var url = 'http://www.omdbapi.com/?i=' + this.movie.imdbID
      Api.fetchMoreInfo(url).then(function(response){
        _this.injectMovieDetails(response);
        console.log('imdp', response);
      });
    }

    this.injectMovieDetails= function(movieDetails){
      var div = document.createElement("div");
      div.setAttribute('class', 'item movie-details')
      var text = document.createTextNode(movieDetails.Genre);
      div.appendChild(text);  
      document.getElementById(this.movie.imdbID).appendChild(div)
    };

    this.movieDetailsExist = function(movieCard){
      var children = movieCard.childNodes;
      var lastMovieCardElement = children[(children.length - 1)];
      return this.hasClass(lastMovieCardElement, 'movie-details');
    }

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


  return MovieCard;
});
