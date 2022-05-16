import { createStore } from 'vuex';

import MoviesModule from './movies/index.js';
import ShowModule from './shows/index.js';

const store = createStore({
  modules: {
    MoviesModule,
    ShowModule,
  },
});

export default store;
