requirejs.config({
  baseUrl: './'
});

requirejs(['movie-form', 'movie-card'],
function   (MovieForm, MovieCard) {
  MovieForm.searchButtonListener();
});



