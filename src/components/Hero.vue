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
    <div class="hero-bg-blob"></div>
  </section>
</template>

<style scoped>
/* Scoped styles can refine the original text for a modern look */
.name {
  background: linear-gradient(180deg, #fff 0%, #a1a1aa 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero-bg-blob {
  position: absolute;
  top: 10%;
  right: -5%;
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%);
  filter: blur(80px);
  z-index: -1;
  pointer-events: none;
  transform: translate(
    calc((var(--mouse-x, 50%) - 50%) * 0.1),
    calc((var(--mouse-y, 50%) - 50%) * 0.1)
  );
  transition: transform 0.6s cubic-bezier(0.23, 1, 0.32, 1);
}
</style>
