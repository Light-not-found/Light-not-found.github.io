<script setup>
import { ref } from 'vue'

const email = "devan.smit2007@gmail.com"
const isCopied = ref(false)

const copyEmail = () => {
  navigator.clipboard.writeText(email).then(() => {
    isCopied.value = true
    setTimeout(() => {
      isCopied.value = false
    }, 2000)
  }).catch(err => {
    console.error('Failed to copy: ', err)
  })
}
</script>

<template>
  <section id="contact" class="contact section">
    <div class="section-container">
      <h2 class="section-title"><span>03.</span> Get In Touch</h2>
      <div class="contact-content card fade-in">
        <p>
          I'm always open to discussing new opportunities, professional collaborations, 
          or innovative projects. Let's connect and build something together.
        </p>
        
        <div class="contact-methods">
          <div class="email-item">
            <span class="label">Primary Email</span>
            <div class="email-wrapper card" @click="copyEmail">
              <a :href="'mailto:' + email" class="email-link" @click.stop>{{ email }}</a>
              <button class="copy-btn" aria-label="Copy Email">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                </svg>
                <span class="tooltip" :class="{ show: isCopied }">{{ isCopied ? 'Copied!' : 'Copy' }}</span>
              </button>
            </div>
          </div>
        </div>

        <div class="social-links">
          <a href="https://www.linkedin.com/in/devan-smit-190480385/" target="_blank" rel="noopener noreferrer" class="social-icon" title="LinkedIn">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
          </a>
          <a href="https://github.com/Light-not-found" target="_blank" rel="noopener noreferrer" class="social-icon" title="GitHub">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact-content {
  background: var(--bg-color-alt);
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius-lg);
}

.email-wrapper {
  cursor: pointer;
  padding: 0.8rem 1.5rem;
  transition: all var(--transition-base);
}

.email-wrapper:hover {
  border-color: var(--accent-primary);
  background: rgba(255, 255, 255, 0.03);
}

.tooltip.show {
  opacity: 1;
  visibility: visible;
  transform: translateX(-50%) translateY(-5px);
}
</style>
