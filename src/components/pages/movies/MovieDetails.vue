<template>
  <section>
    <base-title>Movie Details</base-title>
    <h2>Audience: {{ audience }}</h2>
    <h2>Rating: {{ currentMovie.vote_average }}</h2>
    <h2>
      Overview:<br />
      {{ currentMovie.overview }}
    </h2>
    <div class="image">
      <img
        :src="imgUrl + currentMovie.backdrop_path"
        :alt="currentMovie.title"
      />
    </div>
  </section>
</template>

<script>
export default {
  props: ['id'],

  data() {
    return {
      imgUrl: 'https://image.tmdb.org/t/p/w1280',
    };
  },

  computed: {
    currentMovie() {
      return this.$store.getters['currentMovie'];
    },

    audience() {
      return this.currentMovie.adult ? 'Adult' : 'Everyone';
    },
  },

  methods: {
    goToMovieId() {
      this.$store.dispatch('goToMovie', this.id);
    },
  },

  created() {
    this.goToMovieId();
  },
};
</script>

<style scoped>
h2 {
  color: #fff;
}

.image {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
