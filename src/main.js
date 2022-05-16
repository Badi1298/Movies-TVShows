import { createApp } from 'vue';
import App from './App.vue';

import router from './router.js';
import store from './store/index.js';

import BaseTitle from '../src/components/UI/BaseTitle.vue';
import BaseMovie from './components/UI/BaseMovie.vue';
import BaseShow from './components/UI/BaseShow.vue';

const app = createApp(App);

app.use(router);
app.use(store);

app.component('base-title', BaseTitle);
app.component('base-movie', BaseMovie);
app.component('base-show', BaseShow);

app.mount('#app');
