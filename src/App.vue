<template>
  <the-nav></the-nav>
  <router-view v-slot="slotProps">
    <transition name="route" mode="out-in">
      <component :is="slotProps.Component"></component>
    </transition>
  </router-view>
</template>

<script>
import TheNav from './components/layout/TheNav.vue';

export default {
  components: { TheNav },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Lato&display=swap');
:root {
  --primary-color: #22254b;
  --secondary-color: #373b69;
}

* {
  box-sizing: border-box;
}

body {
  background-color: var(--primary-color);
  font-family: 'Lato', sans-serif;
  margin: 0;
}

.route-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}

.route-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.route-enter-active {
  transition: all 0.3s ease-out;
}

.route-leave-active {
  transition: all 0.3s ease-in;
}

.route-enter-to,
.route-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
