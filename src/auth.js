import { reactive } from 'vue';

// Reactive object to hold authentication state
export const authState = reactive({
  isAuthenticated: false,
  user: null, // Can store username or other user info
});

// Hardcoded credentials for demonstration
const DEMO_USERNAME = 'admin';
const DEMO_PASSWORD = 'password';

/**
 * Attempts to log in the user.
 * @param {string} username
 * @param {string} password
 * @returns {boolean} True if login is successful, false otherwise.
 */
export function login(username, password) {
  if (username === DEMO_USERNAME && password === DEMO_PASSWORD) {
    authState.isAuthenticated = true;
    authState.user = { username: username };
    console.log('Login successful for user:', username);
    return true;
  }
  console.log('Login failed for user:', username);
  authState.isAuthenticated = false;
  authState.user = null;
  return false;
}

/**
 * Logs out the current user.
 */
export function logout() {
  authState.isAuthenticated = false;
  authState.user = null;
  console.log('User logged out.');
}

// For components to easily access computed properties or state if needed directly (though functions are preferred for actions)
// export default {
//   state: authState,
//   login,
//   logout
// };
// We will import authState, login, logout directly in components.
