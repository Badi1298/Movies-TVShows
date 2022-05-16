<template>
  <section>
    <base-title
      >Top TV Shows<br />Page {{ currentPage }} out of
      {{ numberOfPages }}</base-title
    >
    <div class="next-prev">
      <button class="prev" v-if="currentPage > 1" @click="prevPage">
        {{ Number(currentPage) - 1 }} - Previous
      </button>
      <form @submit.prevent="goToPageNumber">
        <input
          type="number"
          id="page"
          placeholder="Page Number"
          v-model="goToPage"
        />
      </form>
      <button class="next" v-if="currentPage < numberOfPages" @click="nextPage">
        Next - {{ Number(currentPage) + 1 }}
      </button>
    </div>
    <main>
      <base-show
        v-for="show in shows"
        :key="show.id"
        :id="show.id"
        :title="show.name"
        :overview="show.overview"
        :poster-path="show.poster_path"
        :vote-average="show.vote_average"
      ></base-show>
    </main>
    <div class="next-prev">
      <button class="prev" v-if="currentPage > 1" @click="prevPage">
        {{ Number(currentPage) - 1 }} - Previous
      </button>
      <form @submit.prevent="goToPageNumber">
        <input
          type="number"
          id="page"
          placeholder="Page Number"
          v-model="goToPage"
        />
      </form>
      <button class="next" v-if="currentPage < numberOfPages" @click="nextPage">
        Next - {{ Number(currentPage) + 1 }}
      </button>
    </div>
  </section>
</template>

<script>
export default {
  props: ['page'],

  data() {
    return {
      currentPage: this.page,
      goToPage: null,
    };
  },

  computed: {
    shows() {
      return this.$store.getters['shows'];
    },

    numberOfPages() {
      return this.$store.getters['numberOfPagesShows'];
    },
  },

  methods: {
    getShows() {
      this.$store.dispatch('getShows', this.currentPage);
    },

    goToCurrentPage() {
      this.$router.push(`/tv/page/${this.currentPage}`);
    },

    nextPage() {
      this.currentPage++;
      this.goToCurrentPage();
    },

    prevPage() {
      this.currentPage--;
      this.goToCurrentPage();
    },

    goToPageNumber() {
      this.currentPage = this.goToPage;
      this.goToPage = '';
      document.getElementById('page').blur();
      this.goToCurrentPage();
    },
  },

  created() {
    this.getShows();
    this.goToCurrentPage();
  },

  beforeRouteUpdate() {
    this.getShows();
  },
};
</script>

<style scoped>
main {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.next-prev {
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  margin: 1.5rem 0;
}

.next-prev button {
  display: inline-block;
  border: none;
  background: transparent;
  color: #fff;
  font-family: inherit;
  font-size: 0.9rem;
  cursor: pointer;
}

.next-prev button.prev {
  position: absolute;
  left: 15%;
}

.next-prev button.next {
  position: absolute;
  right: 15%;
}

.next-prev input {
  border: none;
  background: transparent;
  border-bottom: 1px solid #fff;
  color: #fff;
  font-family: inherit;
  font-size: 1rem;
  padding: 0.5rem;
}

.next-prev input:focus {
  outline: none;
}
</style>
