<template>
  <div class="team-introduction">
    <h2>Team Introductions</h2>
    <div v-if="teams.length === 0" class="no-teams">
      <p>No teams to display yet.</p>
    </div>
    <div v-else class="teams-grid">
      <div v-for="team in teams" :key="team.id" class="team-card">
        <h3>{{ team.name }}</h3>
        <p><strong>Members:</strong> {{ team.members.join(', ') }}</p>
        <p>{{ team.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const teams = ref([
  {
    id: 1,
    name: 'CyberNauts',
    members: ['Alice', 'Bob', 'Charlie'],
    description: 'A team passionate about AI and cybersecurity, aiming to build innovative solutions for digital safety.',
  },
  {
    id: 2,
    name: 'AI Innovators',
    members: ['David', 'Eve', 'Frank'],
    description: 'Focused on cutting-edge AI research and development, with a goal to push the boundaries of machine learning.',
  },
  {
    id: 3,
    name: 'RoboScripters',
    members: ['Grace', 'Heidi', 'Ivan'],
    description: 'Experts in robotics and programming, creating intelligent machines for a variety of applications.',
  },
]);
</script>

<style scoped>
.team-introduction {
  padding: 1rem;
  text-align: center;
}

.teams-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
}

.team-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1rem;
  background-color: #f9f9f9;
  text-align: left;
}

.team-card h3 {
  margin-top: 0;
  color: #333;
}

.no-teams {
  margin-top: 2rem;
  color: #777;
}
</style>
