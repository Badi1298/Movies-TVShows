export default {
  getShows(state, data) {
    state.shows = [];
    data.results.forEach(show => {
      state.shows.push(show);
    });
    state.numberOfPagesShows = data.total_pages;
  },

  getSearchedShows(state, payload) {
    payload.forEach(show => {
      state.searchedShows.push(show);
    });
  },

  goToShow(state, payload) {
    state.currentShow = payload;
  },
};
