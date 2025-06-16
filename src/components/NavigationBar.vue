<template>
  <nav class="navigation-bar">
    <ul>
      <li><router-link to="/">Teams</router-link></li>
      <li><router-link to="/projects">Projects</router-link></li>
      <li v-if="authState.isAuthenticated"><router-link to="/scoring">Scoring</router-link></li>
      <li v-if="!authState.isAuthenticated">
        <router-link to="/login">Login</router-link>
      </li>
      <li v-if="authState.isAuthenticated">
        <a href="#" @click.prevent="handleLogout">Logout ({{ authState.user?.username }})</a>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { authState, logout as performLogout } from '../auth'; // Renamed to avoid conflict

const router = useRouter();

const handleLogout = () => {
  performLogout(); // Call the logout function from auth.js
  router.push('/login'); // Redirect to login page after logout
};
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
  align-items: center; /* Align items vertically */
}

.navigation-bar li {
  margin: 0 1rem;
}

.navigation-bar a {
  color: white;
  text-decoration: none;
  font-weight: bold;
  cursor: pointer; /* For the logout link */
}

.navigation-bar a:hover,
.navigation-bar a.router-link-active {
  color: #42b983; /* Vue green */
}

/* Specific styling for logout user display if needed */
.navigation-bar li a span {
  font-weight: normal;
  font-size: 0.9em;
}
</style>
