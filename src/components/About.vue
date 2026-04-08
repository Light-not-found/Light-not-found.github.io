<template>
  <section id="about" class="about section fade-in">
    <div class="section-container">
      <h2 class="section-title"><span>01.</span> About Me</h2>
      <div class="about-content">
        <div class="about-text">
          <p>
            I am a driven <strong>HBO-ICT student</strong> at the Amsterdam University of Applied Sciences, 
            specializing in Software Engineering. My journey in tech is fueled by a profound interest 
            in software development, data analytics, and the latest innovations in digital architecture.
          </p>
          <p>
            I strive to combine deep technical knowledge with a creative, problem-solving mindset 
            to devise digital solutions that are not only functional but truly impactful. 
            My goal is to bridge the gap between complex technical requirements and elegant user experiences.
          </p>
        </div>
        <div class="about-image">
          <div class="image-wrapper card">
            <img src="/me.png" alt="Devan Smit">
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Core layout from main.css handles the grid and responsiveness.
   Scoped styles here for specific visual adjustments. */
.image-wrapper {
  overflow: hidden;
  border: 1px solid var(--border-color);
  background: var(--bg-color-alt);
}

.image-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s cubic-bezier(0.2, 0, 0.2, 1);
}

.image-wrapper:hover img {
  transform: scale(1.05);
}
</style>
