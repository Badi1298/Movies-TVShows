export default {
  async getMovies(context, page) {
    const API_URL = `https://api.themoviedb.org/3/discover/movie?api_key=145190479af9fc20f8b0724cc9697db4&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_watch_monetization_types=flatrate`;

    const res = await fetch(API_URL);
    const data = await res.json();

    context.commit('getMovies', data);
  },

  async goToMovie(context, id) {
    const API_URL = `https://api.themoviedb.org/3/movie/${id}?api_key=145190479af9fc20f8b0724cc9697db4&language=en-US`;

    const res = await fetch(API_URL);
    const data = await res.json();

    context.commit('goToMovie', data);
  },

  async getSearchedMovies(context, searchTerm) {
    const SEARCH_URL =
      'https://api.themoviedb.org/3/search/movie?api_key=145190479af9fc20f8b0724cc9697db4&language=en-US&page=1&include_adult=false&query=';

    const res = await fetch(SEARCH_URL + searchTerm);
    const data = await res.json();

    context.commit('getSearchedMovies', data.results);
  },
};
