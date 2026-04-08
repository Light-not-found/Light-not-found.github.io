<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const activeSection = ref('')

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
  
  // Basic Scroll Spy logic
  const sections = ['about', 'projects', 'contact']
  for (const section of sections) {
    const el = document.getElementById(section)
    if (el) {
      const rect = el.getBoundingClientRect()
      // If section is in the middle of the viewport
      if (rect.top <= 150 && rect.bottom >= 150) {
        activeSection.value = section
        break
      }
    }
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll() // Initial check
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <header :class="['navbar', { 'scrolled': isScrolled }]" id="navbar">
    <div class="nav-container">
      <a href="#" class="logo">Devan<span>Smit</span></a>
      <nav class="nav-links">
        <a href="#about" :class="{ active: activeSection === 'about' }">About</a>
        <a href="#projects" :class="{ active: activeSection === 'projects' }">Projects</a>
        <a href="#contact" :class="{ active: activeSection === 'contact' }">Contact</a>
      </nav>
    </div>
  </header>
</template>

<style scoped>
/* Scoped styles can be used for fine-tuning if needed, 
   but core floating logic is in main.css */
</style>
