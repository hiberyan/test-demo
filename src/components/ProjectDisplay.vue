<template>
  <div class="project-display">
    <h2>Project Showcase</h2>
    <div v-if="projects.length === 0" class="no-projects">
      <p>No projects to display yet.</p>
    </div>
    <div v-else class="projects-grid">
      <div v-for="project in projects" :key="project.id" class="project-card">
        <h3>{{ project.projectName }}</h3>
        <p><strong>Team:</strong> {{ project.teamName }}</p>
        <p>{{ project.description }}</p>
        <a v-if="project.demoLink" :href="project.demoLink" target="_blank" class="demo-link">View Demo</a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const projects = ref([
  {
    id: 1,
    teamName: 'CyberNauts',
    projectName: 'SecureAI Authenticator',
    description: 'An AI-powered multi-factor authentication system to enhance online security.',
    demoLink: '#', // Replace with actual link or remove if not applicable
  },
  {
    id: 2,
    teamName: 'AI Innovators',
    projectName: 'DeepDream Art Generator',
    description: 'A generative adversarial network (GAN) that creates unique and surreal artwork based on user prompts.',
    demoLink: '#',
  },
  {
    id: 3,
    teamName: 'RoboScripters',
    projectName: 'Automated Warehouse Robot',
    description: 'An autonomous robot designed to navigate and manage inventory in a warehouse setting.',
    // demoLink: null, // Example of no demo link
  },
  {
    id: 4,
    teamName: 'CyberNauts',
    projectName: 'Threat Detection System',
    description: 'Utilizing machine learning to identify and flag potential cybersecurity threats in real-time network traffic.',
    demoLink: '#',
  }
]);
</script>

<style scoped>
.project-display {
  padding: 1rem;
  text-align: center;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
}

.project-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1rem;
  background-color: #f9f9f9;
  text-align: left;
}

.project-card h3 {
  margin-top: 0;
  color: #333;
}

.demo-link {
  display: inline-block;
  margin-top: 0.5rem;
  padding: 0.5rem 1rem;
  background-color: #42b983;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}

.demo-link:hover {
  background-color: #36a374;
}

.no-projects {
  margin-top: 2rem;
  color: #777;
}
</style>
