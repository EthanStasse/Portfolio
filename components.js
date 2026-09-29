class SiteHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header>
        <a href="index.html" class="head-btn">Ethan Stasse</a>
        <nav>
          <a href="contact.html" class="head-btn">contact</a>
        </nav>
      </header>
    `;
  }
}

class SiteFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer class="site-footer">
        <div class="footer-brand">
          <p class="footer-name">Ethan Stasse</p>
          <p class="footer-tagline">Développeur web en formation</p>
          <div class="footer-badges">
            <a href="https://github.com/EthanStasse" target="_blank" rel="noopener" class="badge">GitHub</a>
            <a href="https://www.linkedin.com/in/ethan-stasse" target="_blank" rel="noopener" class="badge">LinkedIn</a>
          </div>
        </div>

        <nav class="footer-nav">
          <h2>Navigation</h2>
          <a href="index.html">Accueil</a>
          <a href="contact.html">Contact</a>
        </nav>

        <div class="footer-contact">
          <h2>Contact</h2>
          <a href="mailto:ethan.stasse88@gmail.com">ethan.stasse88@gmail.com</a>
          <p>Saint-Dié-des-Vosges</p>
        </div>

        <div class="footer-bottom">
          <p>© 2026 Ethan Stasse · Portfolio personnel</p>
          <p>Fait avec HTML/CSS</p>
        </div>
      </footer>
    `;
  }
}

customElements.define("site-header", SiteHeader);
customElements.define("site-footer", SiteFooter);
