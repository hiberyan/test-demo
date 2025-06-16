<template>
  <nav class="navigation-bar">
    <ul>
      <li><router-link to="/">Teams</router-link></li>
      <li><router-link to="/projects">Projects</router-link></li>
      <li><router-link to="/scoring">Scoring</router-link></li>
    </ul>
  </nav>
</template>

<script setup>
</script>

<style scoped>
.navigation-bar {
  background-color: #333;
  padding: 1rem;
}

.navigation-bar ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
}

.navigation-bar li {
  margin: 0 1rem;
}

.navigation-bar a {
  color: white;
  text-decoration: none;
  font-weight: bold;
}

.navigation-bar a:hover,
.navigation-bar a.router-link-active {
  color: #42b983; /* Vue green */
}
</style>
