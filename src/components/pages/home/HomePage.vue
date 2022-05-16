<template>
  <section>
    <base-title>Welcome</base-title>
    <div class="options">
      <router-link to="/movies/page/1"><button>Movies</button></router-link>
      <router-link to="/tv/page/1"><button>TV Shows</button></router-link>
    </div>
  </section>
</template>

<style scoped>
.options {
  display: flex;
  justify-content: space-evenly;
  width: 1100px;
  margin: auto;
  margin-top: 2rem;
}

button {
  display: inline-block;
  border: none;
  background-color: var(--secondary-color);
  font-family: inherit;
  font-size: 1rem;
  width: 200px;
  height: 50px;
  border-radius: 10px;
  color: #fff;
  text-decoration: none;
  cursor: pointer;
}
</style>
