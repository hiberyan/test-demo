<template>
  <div class="login-container">
    <form @submit.prevent="handleLogin" class="login-form">
      <h2>Login</h2>
      <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
      <div class="form-group">
        <label for="username">Username:</label>
        <input type="text" id="username" v-model="username" required />
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required />
      </div>
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { login as performLogin } from '../auth'; // Renamed to avoid conflict if any

const username = ref('');
const password = ref('');
const errorMessage = ref('');

const router = useRouter();
const route = useRoute();

const handleLogin = async () => {
  errorMessage.value = ''; // Clear previous error messages
  const success = performLogin(username.value, password.value);

  if (success) {
    // Check for a redirect query parameter
    const redirectPath = route.query.redirect;
    if (redirectPath) {
      router.push(redirectPath);
    } else {
      // Default redirect if no query parameter is set
      router.push('/scoring'); // Or '/' or any other default page
    }
  } else {
    errorMessage.value = 'Invalid username or password. (Hint: admin/password)';
  }
};
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  min-height: calc(100vh - 150px); /* Adjust based on nav/footer height */
}

.login-form {
  background-color: #fff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  text-align: center;
}

.login-form h2 {
  margin-top: 0;
  margin-bottom: 1.5rem;
  color: #333;
}

.form-group {
  margin-bottom: 1rem;
  text-align: left;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
  color: #555;
}

.form-group input {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-sizing: border-box;
}

button[type="submit"] {
  background-color: #42b983; /* Vue green */
  color: white;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;
  width: 100%;
}

button[type="submit"]:hover {
  background-color: #36a374;
}

.error-message {
  color: red;
  margin-bottom: 1rem;
  padding: 0.5rem;
  border: 1px solid red;
  border-radius: 4px;
  background-color: #ffebeb;
}
</style>
