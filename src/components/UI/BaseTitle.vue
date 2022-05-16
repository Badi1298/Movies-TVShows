<template>
  <div class="header">
    <h1><slot></slot></h1>
  </div>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: center;
  text-align: center;
}

h1 {
  font-size: 2rem;
  color: #fff;
}
</style>
