<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  images: {
    type: Array,
    default: () => []
  }
})

const emit = defineEmits(['close'])
const currentIndex = ref(0)

const nextImage = () => {
  currentIndex.value = (currentIndex.value + 1) % props.images.length
}

const prevImage = () => {
  currentIndex.value = (currentIndex.value - 1 + props.images.length) % props.images.length
}

const handleKeydown = (e) => {
  if (e.key === 'ArrowRight') nextImage()
  if (e.key === 'ArrowLeft') prevImage()
  if (e.key === 'Escape') emit('close')
}

onMounted(() => window.addEventListener('keydown', handleKeydown))
onUnmounted(() => window.removeEventListener('keydown', handleKeydown))
</script>

<template>
  <div class="image-modal-overlay" @click="emit('close')">
    <button class="modal-close-btn" @click="emit('close')" aria-label="Close Modal">&times;</button>
    
    <div class="modal-content-container" @click.stop>
      <button v-if="images.length > 1" class="modal-arrow prev" @click="prevImage" aria-label="Previous Image">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
      </button>

      <div class="image-preview-wrapper">
        <img :src="images[currentIndex]" alt="Project preview" class="modal-image">
        <div v-if="images.length > 1" class="image-counter">
          {{ currentIndex + 1 }} / {{ images.length }}
        </div>
      </div>

      <button v-if="images.length > 1" class="modal-arrow next" @click="nextImage" aria-label="Next Image">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
      </button>
    </div>
  </div>
</template>

<style scoped>
.image-modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(9, 9, 11, 0.95);
  backdrop-filter: blur(12px);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.modal-close-btn {
  position: absolute;
  top: 2rem;
  right: 2rem;
  background: transparent;
  border: none;
  color: #fff;
  font-size: 3rem;
  line-height: 1;
  cursor: pointer;
  z-index: 10001;
  opacity: 0.6;
  transition: opacity 0.2s;
}
.modal-close-btn:hover { opacity: 1; }

.modal-content-container {
  display: flex;
  align-items: center;
  gap: 2rem;
  width: 100%;
  max-width: 1200px;
}

.image-preview-wrapper {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}

.modal-image {
  max-width: 100%;
  max-height: 80vh;
  border-radius: var(--border-radius-lg);
  box-shadow: 0 30px 60px -15px rgba(0, 0, 0, 0.7);
  border: 1px solid var(--border-color);
}

.image-counter {
  margin-top: 1rem;
  font-size: 0.9rem;
  color: var(--text-secondary);
  font-weight: 500;
  background: rgba(255, 255, 255, 0.05);
  padding: 0.4rem 1rem;
  border-radius: 50px;
}

.modal-arrow {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid var(--border-color);
  color: white;
  width: 54px;
  height: 54px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s;
  flex-shrink: 0;
}
.modal-arrow:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: scale(1.1);
  border-color: var(--accent-primary);
}

@media (max-width: 768px) {
  .modal-content-container { gap: 1rem; }
  .modal-arrow {
    position: absolute;
    bottom: -80px;
  }
  .modal-arrow.prev { left: 30%; }
  .modal-arrow.next { right: 30%; }
}
</style>
