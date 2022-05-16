<template>
  <router-link :to="`/movies/${id}`" @click="goToMovieId">
    <div class="item">
      <img :src="imgUrl" :alt="title" />
      <div class="item-info">
        <h3>{{ title }}</h3>
        <span class="green">{{ voteAverage }}</span>
      </div>
      <div class="overview">
        <h3>{{ overview }}</h3>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  props: ['id', 'title', 'overview', 'posterPath', 'voteAverage'],

  data() {
    return {
      imgUrl: 'https://image.tmdb.org/t/p/w1280' + this.posterPath,
    };
  },

  methods: {
    goToMovieId() {
      this.$store.dispatch('goToMovie', this.id);
    },
  },
};
</script>

<style scoped>
a {
  color: #000;
}

.item {
  width: 300px;
  margin: 1rem;
  background-color: var(--secondary-color);
  box-shadow: 0 4px 5px rgba(0, 0, 0, 0.2);
  position: relative;
  overflow: hidden;
  border-radius: 3px;
  cursor: pointer;
}

.item img {
  width: 100%;
}

.item-info h3 {
  margin-top: 0;
}

.item-info {
  color: #eee;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1rem 1rem;
  letter-spacing: 0.5px;
}

.item-info span {
  background-color: var(--primary-color);
  padding: 0.25rem 0.5rem;
  border-radius: 3px;
  font-weight: bold;
}

.item-info span.green {
  color: lightgreen;
}

.item-info span.orange {
  color: orange;
}

.item-info span.red {
  color: red;
}

.overview {
  background-color: #fff;
  padding: 2rem;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  max-height: 100%;
  overflow: visible;
  transform: translateY(101%);
  transition: transform 0.35s ease-in-out;
}

.item:hover .overview {
  transform: translateY(0);
}
</style>
