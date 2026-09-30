class SiteHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header>
        <a href="index.html" class="head-btn">Ethan Stasse</a>

        <button type="button" class="burger-btn" aria-label="Ouvrir le menu" aria-expanded="false">
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav>
          <a href="about.html" class="head-btn burger">A propos</a>
          <a href="Project.html" class="head-btn burger">Projets</a>
          <a href="contact.html" class="head-btn burger">contact</a>
        </nav>
      </header>
    `;

    const burgerBtn = this.querySelector(".burger-btn");
    const nav = this.querySelector("nav");

    burgerBtn.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("nav-open");
      burgerBtn.classList.toggle("burger-open", isOpen);
      burgerBtn.setAttribute("aria-expanded", isOpen);
    });

    // Ferme le menu si on clique sur un lien
    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("nav-open");
        burgerBtn.classList.remove("burger-open");
        burgerBtn.setAttribute("aria-expanded", "false");
      });
    });
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
          <a href="about.html">A propos</a>
          <a href="Project.html">Projets</a>
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
