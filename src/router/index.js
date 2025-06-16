import { createRouter, createWebHistory } from 'vue-router';
import TeamIntroduction from '../components/TeamIntroduction.vue';
import ProjectDisplay from '../components/ProjectDisplay.vue';
import ScoringSystem from '../components/ScoringSystem.vue';
import Login from '../components/Login.vue';
import { authState } from '../auth'; // Import authState

const routes = [
  { path: '/', name: 'TeamIntroduction', component: TeamIntroduction },
  { path: '/projects', name: 'ProjectDisplay', component: ProjectDisplay },
  {
    path: '/scoring',
    name: 'ScoringSystem',
    component: ScoringSystem,
    beforeEnter: (to, from, next) => {
      if (!authState.isAuthenticated) {
        // If not authenticated, redirect to login page
        // Optionally, pass the intended destination via query params
        // so the user can be redirected back after login
        next({ name: 'Login', query: { redirect: to.fullPath } });
      } else {
        // If authenticated, proceed to the route
        next();
      }
    },
  },
  { path: '/login', name: 'Login', component: Login },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
