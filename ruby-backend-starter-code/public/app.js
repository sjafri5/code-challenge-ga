requirejs.config({
  baseUrl: './'
});

requirejs(['movie-form'],
function   (MovieForm) {
  //MovieCard.moreInfoListener();
  MovieForm.searchButtonListener();
});



