import { createRouter, createWebHistory } from 'vue-router';

import HomePage from './components/pages/home/HomePage.vue';
import MoviesHome from './components/pages/movies/MoviesHome.vue';
import MovieDetails from './components/pages/movies/MovieDetails.vue';
import MoviesSearched from './components/pages/movies/MoviesSearched.vue';
import ShowsHome from './components/pages/shows/ShowsHome.vue';
import ShowDetails from './components/pages/shows/ShowDetails.vue';
import ShowsSearched from './components/pages/shows/ShowsSearched.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', component: HomePage },
    { path: '/movies/page/:page', component: MoviesHome, props: true },
    { path: '/movies/:id', component: MovieDetails, props: true },
    {
      path: '/search/movies/:searchTerm',
      component: MoviesSearched,
      props: true,
    },
    { path: '/tv/page/:page', component: ShowsHome, props: true },
    { path: '/tv/:id', component: ShowDetails, props: true },
    { path: '/search/tv/:searchTerm', component: ShowsSearched, props: true },
  ],

  // scrollBehavior(_, _2, savedPosition) {
  //   if (savedPosition) {
  //     return savedPosition;
  //   } else {
  //     return { top: 0 };
  //   }
  // },
});

export default router;
