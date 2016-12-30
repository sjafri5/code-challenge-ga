requirejs.config({
  baseUrl: './'
});

requirejs(['movie-form', 'favorites'],
function   (MovieForm, Favorites) {
  Favorites.linkListener();
  MovieForm.searchButtonListener();
});



