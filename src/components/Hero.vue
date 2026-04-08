<template>
  <section id="hero" class="hero fade-in">
    <div class="hero-content">
      <p class="greeting">Hi, my name is</p>
      <h1 class="name">Devan Smit.</h1>
      <h2 class="title">I build robust software for the digital age.</h2>
      <p class="bio">
        I am a driven HBO-ICT student focusing on software engineering, 
        data, and innovation. I combine technical knowledge with a creative 
        approach to devise digital solutions that really work.
      </p>
      <div class="cta-buttons">
        <a href="#projects" class="btn btn-primary">Check my work</a>
        <a href="#contact" class="btn btn-outline">Let's talk</a>
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
</style>
