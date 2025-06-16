import { createRouter, createWebHistory } from 'vue-router';
import TeamIntroduction from '../components/TeamIntroduction.vue';
import ProjectDisplay from '../components/ProjectDisplay.vue';
import ScoringSystem from '../components/ScoringSystem.vue';

const routes = [
  { path: '/', name: 'TeamIntroduction', component: TeamIntroduction },
  { path: '/projects', name: 'ProjectDisplay', component: ProjectDisplay },
  { path: '/scoring', name: 'ScoringSystem', component: ScoringSystem },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
