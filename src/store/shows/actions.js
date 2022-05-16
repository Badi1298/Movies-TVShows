export default {
  async getShows(context, page) {
    const API_URL = `https://api.themoviedb.org/3/discover/tv?api_key=145190479af9fc20f8b0724cc9697db4&language=en-US&sort_by=popularity.desc&page=${page}&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0`;

    const res = await fetch(API_URL);
    const data = await res.json();

    context.commit('getShows', data);
  },

  async goToShow(context, id) {
    const API_URL = `https://api.themoviedb.org/3/tv/${id}?api_key=145190479af9fc20f8b0724cc9697db4&language=en-US`;

    const res = await fetch(API_URL);
    const data = await res.json();

    context.commit('goToShow', data);
  },

  async getSearchedShows(context, searchTerm) {
    const SEARCH_URL =
      'https://api.themoviedb.org/3/search/tv?api_key=145190479af9fc20f8b0724cc9697db4&language=en-US&page=1&include_adult=false&query=';

    const res = await fetch(SEARCH_URL + searchTerm);
    const data = await res.json();

    context.commit('getSearchedShows', data.results);
  },
};
