<template>
  <section>
    <base-title>Searched Movies</base-title>
    <main>
      <base-show
        v-for="movie in searchedShows"
        :key="movie.id"
        :id="movie.id"
        :title="movie.name"
        :overview="movie.overview"
        :poster-path="movie.poster_path"
        :vote-average="movie.vote_average"
      ></base-show>
    </main>
  </section>
</template>

<script>
export default {
  props: ['searchTerm'],

  computed: {
    searchedShows() {
      return this.$store.getters['searchedShows'];
    },
  },

  created() {
    this.$store.dispatch('getSearchedShows', this.searchTerm);
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
