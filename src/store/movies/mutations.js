export default {
  getMovies(state, data) {
    state.movies = [];
    data.results.forEach(movie => {
      state.movies.push(movie);
    });
    state.numberOfPagesMovies = data.total_pages;
  },

  getSearchedMovies(state, payload) {
    payload.forEach(movie => {
      state.searchedMovies.push(movie);
    });
  },

  goToMovie(state, payload) {
    state.currentMovie = payload;
  },
};
