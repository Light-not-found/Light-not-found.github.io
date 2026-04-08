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
  <section id="contact" class="contact section" ref="contactSection">
    <div class="section-container">
      <h2 class="section-title"><span>04.</span> Get In Touch</h2>
      
      <div class="contact-content card fade-in">
        <div class="contact-header">
          <h3 class="contact-headline">Ready to start something <span>new</span>?</h3>
          <p class="contact-text">
            Whether you have a specific project in mind or just want to explore 
            how we could work together, I'd love to hear from you.
          </p>
        </div>

        <div class="contact-methods">
          <div class="email-badge" @click="copyEmail">
            <div class="email-info">
              <span class="badge-label">Email me at</span>
              <span class="badge-address">{{ email }}</span>
            </div>
            <button class="badge-action" :class="{ 'copied': isCopied }">
              <span v-if="!isCopied">Copy</span>
              <span v-else>Copied!</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <rect v-if="!isCopied" x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                <path v-if="!isCopied" d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                <polyline v-else points="20 6 9 17 4 12"></polyline>
              </svg>
            </button>
          </div>
        </div>

        <div class="contact-social">
          <a href="https://www.linkedin.com/in/devan-smit-190480385/" target="_blank" rel="noopener noreferrer" class="social-link">
            LinkedIn
          </a>
          <a href="https://github.com/Light-not-found" target="_blank" rel="noopener noreferrer" class="social-link">
            GitHub
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact {
  padding: 80px 0;
}

.contact-content {
  max-width: 800px;
  margin: 0 auto;
  padding: 4rem 3rem;
  background: var(--bg-color-alt);
  border: 1px solid var(--border-color);
  text-align: center;
}

.contact-headline {
  font-size: 2.25rem;
  margin-bottom: 1rem;
  letter-spacing: -1px;
}

.contact-headline span {
  color: var(--accent-primary);
}

.contact-text {
  color: var(--text-secondary);
  max-width: 500px;
  margin: 0 auto 3rem;
  line-height: 1.6;
}

.contact-methods {
  display: flex;
  justify-content: center;
  margin-bottom: 2.5rem;
}

.email-badge {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 0.5rem 0.5rem 0.5rem 1.75rem;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--border-color);
  border-radius: 100px;
  cursor: pointer;
  transition: all var(--transition-base);
}

.email-badge:hover {
  border-color: var(--accent-primary);
  background: rgba(255, 255, 255, 0.04);
}

.email-info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.badge-label {
  font-size: 0.65rem;
  font-weight: 700;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.badge-address {
  font-weight: 600;
  font-size: 1rem;
}

.badge-action {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.75rem 1.5rem;
  background: var(--text-primary);
  color: var(--bg-color);
  border: none;
  border-radius: 100px;
  font-weight: 700;
  font-size: 0.85rem;
  cursor: pointer;
  transition: all 0.2s;
}

.badge-action.copied {
  background: var(--accent-primary);
  color: #fff;
}

.contact-social {
  display: flex;
  justify-content: center;
  gap: 2rem;
}

.social-link {
  color: var(--text-secondary);
  font-weight: 500;
  font-size: 0.95rem;
  position: relative;
}

.social-link::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 1px;
  background: var(--accent-primary);
  transition: width 0.3s;
}

.social-link:hover {
  color: var(--text-primary);
}

.social-link:hover::after {
  width: 100%;
}

@media (max-width: 768px) {
  .contact-content {
    padding: 3rem 1.5rem;
  }
  
  .contact-headline {
    font-size: 1.75rem;
  }
  
  .email-badge {
    flex-direction: column;
    padding: 1.5rem;
    border-radius: 20px;
    width: 100%;
    gap: 1rem;
    text-align: center;
  }
  
  .email-info {
    align-items: center;
  }
  
  .badge-action {
    width: 100%;
    justify-content: center;
  }
}
</style>
