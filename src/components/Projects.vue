<script setup>
const projects = [
  {
    id: 1,
    label: 'School Project',
    name: 'Mirror AI app',
    description: 'A cutting-edge mobile application integrating machine learning to provide intelligent, tailored fashion advice. It acts as a personal stylist embedded within a sleek, minimalist interface.',
    tech: ['Mobile Engineering', 'Computer Vision', 'Modern UI'],
    image: '/smaakmanipulatie-home.png',
    allImages: ['/smaakmanipulatie-home.png', '/smaakmanipulatie-profile.png']
  },
  {
    id: 2,
    label: 'School Project',
    name: 'Dutch Elections',
    description: 'A dynamic web application built for a school assignment that parses and visualizes complex XML/JSON data from the Dutch elections.',
    tech: ['Data Parsing', 'XML / JSON', 'Web Development'],
    image: '/elections-1.png',
    allImages: ['/elections-1.png', '/elections-2.png', '/elections-3.png', '/elections-4.png']
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
      <h2 class="section-title"><span>03.</span> Featured Projects</h2>
      
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
