<template>
  <section>
    <base-title>Show Details</base-title>
    <h2>Show with id: {{ currentShow.id }}</h2>
    <h2>Rating: {{ currentShow.vote_average }}</h2>
  </section>
</template>

<script>
export default {
  props: ['id'],

  computed: {
    currentShow() {
      return this.$store.getters['currentShow'];
    },
  },

  methods: {
    goToShowId() {
      this.$store.dispatch('goToShow', this.id);
    },
  },

  created() {
    this.goToShowId();
  },
};
</script>

<style scoped>
h2 {
  color: #fff;
}
</style>
