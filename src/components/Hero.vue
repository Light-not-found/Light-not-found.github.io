<template>
  <section id="hero" class="hero fade-in">
    <div class="hero-content">
      <p class="greeting">Hi, I'm</p>
      <h1 class="name">Devan Smit.</h1>
      <h2 class="title">Student HBO-ICT</h2>
      <p class="bio">
        I'm a Software Engineering student at AUAS, dedicated to building 
        clean, impactful digital solutions. I bridge the gap between complex 
        requirements and elegant user experiences.
      </p>
      <div class="cta-buttons">
        <a href="#projects" class="btn btn-primary">Check my work</a>
        <a href="/resume.pdf" class="btn btn-outline" download>
          <span>Resume</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Scoped styles can refine the original text for a modern look */
.name {
  color: var(--text-primary);
}

.title {
  margin-bottom: 2rem;
}
</style>
