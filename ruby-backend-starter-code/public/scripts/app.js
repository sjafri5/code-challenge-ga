requirejs.config({
  baseUrl: './scripts/'
});

requirejs(['movie-form', 'favorites'],
function   (MovieForm, Favorites) {
  Favorites.linkListener();
  MovieForm.searchButtonListener();
});



