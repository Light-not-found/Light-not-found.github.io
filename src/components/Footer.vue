<template>
  <footer class="footer">
    <div class="section-container">
      <div class="footer-content">
        <div class="footer-left">
          <a href="#" class="logo">D<span>S</span></a>
          <nav class="footer-nav">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
        
        <div class="footer-right">
          <div class="footer-social">
            <a href="https://github.com/Light-not-found" target="_blank" rel="noopener noreferrer" title="GitHub">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            </a>
            <a href="https://www.linkedin.com/in/devan-smit-190480385/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
          </div>
          <p class="copyright">&copy; 2026 Devan Smit.</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  padding: 30px 0;
  background-color: var(--bg-color);
  border-top: 1px solid var(--border-color);
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer-left, .footer-right {
  display: flex;
  align-items: center;
  gap: 2.5rem;
}

.footer-nav {
  display: flex;
  gap: 1.5rem;
}

.footer-nav a {
  color: var(--text-secondary);
  font-size: 0.85rem;
  font-weight: 500;
  transition: color 0.2s;
}

.footer-nav a:hover {
  color: var(--text-primary);
}

.footer-social {
  display: flex;
  gap: 1rem;
}

.footer-social a {
  color: var(--text-muted);
  transition: all 0.3s;
}

.footer-social a:hover {
  color: var(--accent-primary);
}

.copyright {
  font-size: 0.75rem;
  color: var(--text-muted);
  white-space: nowrap;
}

@media (max-width: 900px) {
  .footer-content {
    flex-direction: column;
    gap: 1.5rem;
    text-align: center;
  }
  
  .footer-left, .footer-right {
    flex-direction: column;
    gap: 1rem;
  }
  
  .footer-nav {
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: center;
  }
}
</style>
