<template>
  <nav>
    <div class="home">
      <router-link to="/home"><button>Home</button></router-link>
    </div>
    <div class="search-type">
      <div>
        <button v-if="!movie" @click="switchType">Movies</button>
        <button v-else @click="switchType">TV Shows</button>
      </div>
      <div>
        <form v-if="movie" @submit.prevent="search" id="form">
          <input
            type="text"
            id="search"
            class="search"
            placeholder="Search Movie"
            v-model="searchQuery"
          />
        </form>
        <form v-else @submit="search" id="form">
          <input
            type="text"
            id="search"
            class="search"
            placeholder="Search TV Show"
            v-model="searchQuery"
          />
        </form>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: '',
      movie: true,
    };
  },

  methods: {
    searchMovie() {
      this.$store.dispatch('getSearchedMovies', this.searchQuery);
      this.$router.push(`/search/movies/${this.searchQuery}`);
    },

    searchShow() {
      this.$store.dispatch('getSearchedShows', this.searchQuery);
      this.$router.push(`/search/tv/${this.searchQuery}`);
    },

    search() {
      if (this.searchQuery && this.searchQuery !== '') {
        if (this.movie) {
          this.searchMovie();
        } else {
          this.searchShow();
        }
      } else {
        window.location.reload();
      }
    },

    switchType() {
      this.movie = !this.movie;
    },
  },
};
</script>

<style scoped>
nav {
  padding: 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  background-color: var(--secondary-color);
}

.search {
  background-color: transparent;
  border: 2px solid var(--primary-color);
  border-radius: 50px;
  font-family: inherit;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  color: #fff;
}

.search::placeholder {
  color: #7378c5;
}

.search:focus {
  outline: none;
  background-color: var(--primary-color);
}

button {
  display: inline-block;
  border: none;
  background-color: var(--primary-color);
  font-family: inherit;
  font-size: 1rem;
  width: 150px;
  height: 50px;
  border-radius: 10px;
  cursor: pointer;
  color: #fff;
}

button a {
  color: #fff;
  text-decoration: none;
}

.search-type {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.search-type button {
  width: 100px;
  height: 30px;
  font-size: 0.75rem;
  font-weight: bold;
}
</style>
