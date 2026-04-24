<script setup>
const projects = [
  {
    id: 1,
    label: 'School Project',
    name: 'AI Stylist Companion',
    description: 'A sophisticated AI-driven style tool that analyzes user preferences and physical traits to provide personalized fashion recommendations. Built to bridge the gap between AI technology and personal expression.',
    tech: ['Mobile Engineering', 'Computer Vision', 'Style Analysis'],
    image: '/smaakmanipulatie-home.png',
    allImages: [
      { url: '/smaakmanipulatie-home.png', desc: 'Main entry point for the AI Stylist experience' },
      { url: '/smaakmanipulatie-profile.png', desc: 'Detailed user profiling for physical traits and style mapping' },
      { url: '/smaakmanipulatie-3.png', desc: 'Live mirror interface for facial data capture and verification' },
      { url: '/smaakmanipulatie-4.png', desc: 'Personalized stijlsuggesties with actionable shopping links' },
      { url: '/smaakmanipulatie-5.png', desc: 'Successful completion of the style analysis process' }
    ]
  },
  {
    id: 2,
    label: 'School Project',
    name: 'Rhino Elections',
    description: 'A comprehensive election data platform providing clear insights into Dutch political results through data visualization, comparative analysis, and secure user interactions.',
    tech: ['Data Visualization', 'User Management', 'Web Engineering'],
    image: '/elections-1.png',
    allImages: [
      { url: '/elections-1.png', desc: 'Information dashboard showing key election figures and mission' },
      { url: '/elections-2.png', desc: 'Parliamentary seat distribution overview (Hemicycle view)' },
      { url: '/elections-3.png', desc: 'Analytical year-on-year comparison of election outcomes' },
      { url: '/elections-4.png', desc: 'Secure community login and registration interface' },
      { url: '/elections-5.png', desc: 'Integrated profile management with real-time success feedback' }
    ]
  }
]

const emit = defineEmits(['openGallery'])

const openProject = (project) => {
  emit('openGallery', project.allImages)
}
</script>

<template>
  <section id="projects" class="projects section">
    <div class="section-container">
      <div class="section-title-group">
        <span class="section-label">Case Studies</span>
        <h2 class="section-title">Featured Projects</h2>
      </div>
      
      <div class="projects-grid">
        <article 
          v-for="(project, index) in projects" 
          :key="project.id"
          class="project-card card fade-in stagger-item"
          :style="{ '--stagger-delay': (index * 0.1) + 's' }"
          @click="openProject(project)"
        >
          <div class="project-image">
            <img :src="project.image" :alt="project.name" loading="lazy">
            <div class="project-overlay">
              <span class="view-label">View Gallery</span>
            </div>
          </div>
          <div class="project-info">
            <p class="project-label">{{ project.label }}</p>
            <h3 class="project-name">{{ project.name }}</h3>
            <p class="project-desc">{{ project.description }}</p>
            <ul class="project-tech">
              <li v-for="t in project.tech" :key="t">{{ t }}</li>
            </ul>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.project-card {
  cursor: pointer;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.project-image {
  overflow: hidden;
  position: relative;
}

.project-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s cubic-bezier(0.2, 0, 0.2, 1);
}

.project-overlay {
  position: absolute;
  inset: 0;
  background: rgba(9, 9, 11, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.view-label {
  padding: 0.6rem 1.2rem;
  background: rgba(255, 255, 255, 0.9);
  color: #000;
  border-radius: 50px;
  font-weight: 700;
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  transform: translateY(10px);
  transition: transform 0.3s ease;
}

.project-card:hover .project-overlay {
  opacity: 1;
}

.project-card:hover .view-label {
  transform: translateY(0);
}

.project-card:hover .project-image img {
  transform: scale(1.05);
}
</style>
