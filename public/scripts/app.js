requirejs.config({
  baseUrl: './scripts/'
});


// in order for us to import dependant modules we need to wrap all of our js in the requirejs function. the first argument is an array of the names of the dependant files, the second is a function where we will write our code.

// Here, I import two modules: MovieForm and Favorites. Then I call a function on each of them. Both of them seem to be listeners judging by their names.

requirejs(['movie-form', 'favorites'],
function   (MovieForm, Favorites) {
  Favorites.linkListener();
  MovieForm.searchButtonListener();
});



