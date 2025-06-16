<template>
  <div id="app-container">
    <NavigationBar />
    <main class="content">
      <router-view />
    </main>
  </div>
</template>

<script setup>
import NavigationBar from './components/NavigationBar.vue';
</script>

<style>
/* Global styles - you can also put these in src/style.css */
body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 0;
  background-color: #f4f4f4; /* Light gray background for the whole page */
}

#app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.content {
  flex-grow: 1;
  padding: 1rem;
  max-width: 1200px; /* Max width for content area */
  margin: 0 auto; /* Center content */
  width: 100%;
  box-sizing: border-box;
}

/* Styling for router links in NavigationBar for active state if not overridden by component styles */
/* This is more of a global fallback or enhancement */
.navigation-bar a.router-link-exact-active {
  color: #42b983; /* Vue green for active link */
  border-bottom: 2px solid #42b983;
}
</style>
