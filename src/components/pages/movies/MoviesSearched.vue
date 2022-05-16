<template>
  <section>
    <base-title>Searched Movies</base-title>
    <main>
      <base-movie
        v-for="movie in searchedMovies"
        :key="movie.id"
        :id="movie.id"
        :title="movie.title"
        :overview="movie.overview"
        :poster-path="movie.poster_path"
        :vote-average="movie.vote_average"
      ></base-movie>
    </main>
  </section>
</template>

<script>
export default {
  props: ['searchTerm'],

  computed: {
    searchedMovies() {
      return this.$store.getters['searchedMovies'];
    },
  },

  created() {
    this.$store.dispatch('getSearchedMovies', this.searchTerm);
  },
};
</script>

<style scoped>
main {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}
</style>
