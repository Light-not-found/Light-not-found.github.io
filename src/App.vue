<script setup>
import { ref, onMounted } from 'vue'
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import Skills from './components/Skills.vue'
import Projects from './components/Projects.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'
import ImageModal from './components/ImageModal.vue'

const modalImages = ref([])
const showModal = ref(false)

const openGallery = (images) => {
  modalImages.value = images
  showModal.value = true
}

const closeGallery = () => {
  showModal.value = false
}

onMounted(() => {
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Re-observe after each potential DOM update
  const observeElements = () => {
    document.querySelectorAll('.fade-in').forEach(el => {
      observer.observe(el);
    });
  }

  observeElements();

  // Mouse tracking for interactive background
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const x = (clientX / window.innerWidth) * 100;
    const y = (clientY / window.innerHeight) * 100;
    
    document.documentElement.style.setProperty('--mouse-x', `${x}%`);
    document.documentElement.style.setProperty('--mouse-y', `${y}%`);
  }

  window.addEventListener('mousemove', handleMouseMove);
})
</script>

<template>
  <div class="app-wrapper">
    <Navbar />
    
    <main>
      <Hero />
      <About />
      <Skills />
      <Projects @open-gallery="openGallery" />
      <Contact />
    </main>

    <Footer />

    <Transition name="fade">
      <ImageModal 
        v-if="showModal"
        :images="modalImages" 
        @close="closeGallery" 
      />
    </Transition>
  </div>
</template>

<style>
.app-wrapper {
  background-color: var(--bg-color);
  min-height: 100vh;
}

/* Page transitions */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Ensure images don't break layouts */
img {
  max-width: 100%;
  height: auto;
  display: block;
}
</style>
