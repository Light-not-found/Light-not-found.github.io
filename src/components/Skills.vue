<template>
  <section id="skills" class="skills section fade-in">
    <div class="section-container">
      <h2 class="section-title"><span>02.</span> Technical Skills</h2>
      
      <div class="skills-grid">
        <!-- Frontend & Mobile -->
        <div class="skill-category card fade-in stagger-item" style="--stagger-delay: 0.1s">
          <div class="category-header">
            <span class="category-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
            </span>
            <h3>Frontend & Mobile</h3>
          </div>
          <div class="skill-items">
            <div class="skill-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" title="HTML5">
              <span>HTML5</span>
            </div>
            <div class="skill-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" title="CSS3">
              <span>CSS3</span>
            </div>
            <div class="skill-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" title="JavaScript">
              <span>JavaScript</span>
            </div>
            <div class="skill-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" title="TypeScript">
              <span>TypeScript</span>
            </div>
            <div class="skill-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" alt="Vue.js" title="Vue.js">
              <span>Vue.js</span>
            </div>
            <div class="skill-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React Native" title="React Native">
              <span>React Native</span>
            </div>
          </div>
        </div>

        <!-- Backend & Systems -->
        <div class="skill-category card fade-in stagger-item" style="--stagger-delay: 0.2s">
          <div class="category-header">
            <span class="category-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
            </span>
            <h3>Backend & Systems</h3>
          </div>
          <div class="skill-items">
            <div class="skill-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" title="Java">
              <span>Java / Spring</span>
            </div>
            <div class="skill-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg" alt=".NET" title=".NET">
              <span>.NET / C#</span>
            </div>
            <div class="skill-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="SQL" title="SQL">
              <span>SQL</span>
            </div>
            <div class="skill-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" title="Node.js">
              <span>Node.js</span>
            </div>
          </div>
        </div>

        <!-- Tools & Innovation -->
        <div class="skill-category card fade-in stagger-item" style="--stagger-delay: 0.3s">
          <div class="category-header">
            <span class="category-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
            </span>
            <h3>Tools & More</h3>
          </div>
          <div class="skill-items">
            <div class="skill-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" title="Git">
              <span>Git / GitHub</span>
            </div>
            <div class="skill-item">
              <span class="text-icon">🚀</span>
              <span>Innovation</span>
            </div>
            <div class="skill-item">
              <span class="text-icon">📊</span>
              <span>Data Analytics</span>
            </div>
            <div class="skill-item">
              <span class="text-icon">🎨</span>
              <span>Design UI/UX</span>
            </div>
            <div class="skill-item">
              <span class="text-icon">🤝</span>
              <span>Collaboration</span>
            </div>
            <div class="skill-item">
              <span class="text-icon">🔄</span>
              <span>Scrum</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.skills {
  background-color: var(--bg-color);
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
}

.skill-category {
  padding: 2rem;
  transition: all var(--transition-base);
}

.skill-category:hover {
  border-color: var(--accent-primary);
  transform: translateY(-5px);
  background: var(--bg-color-alt);
}

.category-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
}

.category-icon {
  color: var(--accent-primary);
  display: flex;
  align-items: center;
  justify-content: center;
}

.category-header h3 {
  font-size: 1.1rem;
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.skill-items {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}

.skill-item {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.skill-item img, .text-icon {
  width: 24px;
  height: 24px;
  filter: grayscale(1) brightness(1.5);
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.skill-item:hover img, .skill-item:hover .text-icon {
  filter: grayscale(0) brightness(1);
  transform: scale(1.2);
}

.text-icon {
  font-size: 1.2rem;
}

.skill-item span:not(.text-icon) {
  color: var(--text-secondary);
  font-size: 0.95rem;
  font-weight: 500;
}

@media (max-width: 768px) {
  .skills-grid {
    grid-template-columns: 1fr;
  }
}
</style>
