<template>
  <div class="scoring-system">
    <h2>Project Scoring</h2>
    <div v-if="projects.length === 0" class="no-projects-to-score">
      <p>No projects available for scoring yet.</p>
    </div>
    <div v-else class="scoring-grid">
      <div v-for="project in projects" :key="project.id" class="project-score-card">
        <h3>{{ project.projectName }}</h3>
        <p><em>Team: {{ project.teamName }}</em></p>
        <form @submit.prevent="submitScore(project.id)">
          <div class="form-group">
            <label :for="'score-' + project.id">Score (1-100):</label>
            <input
              type="number"
              :id="'score-' + project.id"
              v-model="scores[project.id]"
              min="1"
              max="100"
              required
            />
          </div>
          <div class="form-group">
            <label :for="'comments-' + project.id">Comments:</label>
            <textarea
              :id="'comments-' + project.id"
              v-model="comments[project.id]"
              rows="3"
            ></textarea>
          </div>
          <button type="submit">Submit Score</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';

// Re-using the same project data structure for now
// In a real app, this might come from a store or API
const projects = ref([
  {
    id: 1,
    teamName: 'CyberNauts',
    projectName: 'SecureAI Authenticator',
  },
  {
    id: 2,
    teamName: 'AI Innovators',
    projectName: 'DeepDream Art Generator',
  },
  {
    id: 3,
    teamName: 'RoboScripters',
    projectName: 'Automated Warehouse Robot',
  },
  {
    id: 4,
    teamName: 'CyberNauts',
    projectName: 'Threat Detection System',
  }
]);

const scores = reactive({});
const comments = reactive({});

// Initialize scores and comments objects
projects.value.forEach(project => {
  scores[project.id] = null; // Or some default score
  comments[project.id] = '';
});

const submitScore = (projectId) => {
  // Basic validation
  if (scores[projectId] === null || scores[projectId] < 1 || scores[projectId] > 100) {
    alert(`Please enter a valid score (1-100) for project ID ${projectId}.`);
    return;
  }
  console.log(`Submitting score for project ${projectId}:`, {
    score: scores[projectId],
    comment: comments[projectId],
  });
  alert(`Score submitted for ${projects.value.find(p=>p.id === projectId).projectName}! (Check console for details)`);
  // Here you would typically send the data to a backend
};
</script>

<style scoped>
.scoring-system {
  padding: 1rem;
  text-align: center;
}

.scoring-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 1.5rem;
  margin-top: 1rem;
}

.project-score-card {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 1.5rem;
  background-color: #fff;
  text-align: left;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.project-score-card h3 {
  margin-top: 0;
  color: #333;
  border-bottom: 1px solid #eee;
  padding-bottom: 0.5rem;
  margin-bottom: 1rem;
}

.project-score-card p em {
  color: #555;
  font-size: 0.9rem;
}

.form-group {
  margin-bottom: 1rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.3rem;
  font-weight: bold;
  color: #444;
}

.form-group input[type="number"],
.form-group textarea {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-sizing: border-box; /* Ensures padding doesn't add to width */
}

.form-group textarea {
  resize: vertical;
}

button[type="submit"] {
  background-color: #5cb85c;
  color: white;
  padding: 0.7rem 1.2rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;
}

button[type="submit"]:hover {
  background-color: #4cae4c;
}

.no-projects-to-score {
  margin-top: 2rem;
  color: #777;
}
</style>
