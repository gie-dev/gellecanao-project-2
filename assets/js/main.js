/* Kabankalan Catholic College, Inc. - main.js */
(function () {
  "use strict";

  /* Remove the preloader when the page has loaded */
  window.addEventListener("load", function () {
    const preloader = document.getElementById("preloader");
    if (preloader) preloader.remove();
  });

  /* Scroll animations (AOS library) */
  if (window.AOS) {
    AOS.init({ duration: 700, easing: "ease-in-out", once: true });
  }

  
  /* Highlight the nav link of the section currently in view (scroll-spy) */
  const navLinks = Array.from(document.querySelectorAll("#navLinks a.nav-link"));
  function updateActiveLink() {
    let current = null;
    let best = -Infinity;
    navLinks.forEach(function (link) {
      const section = document.querySelector(link.getAttribute("href"));
      if (!section) return;
      const top = section.getBoundingClientRect().top;
      if (top <= 120 && top > best) { best = top; current = link; }   /* closest section above the header line */
    });
    const lastLink = navLinks[navLinks.length - 1];
    const atBottom = window.innerHeight + window.scrollY >= document.body.scrollHeight - 4;
    if (atBottom && document.querySelector(lastLink.getAttribute("href"))) current = lastLink;
    navLinks.forEach(function (link) { link.classList.toggle("active", link === current); });
  }
  window.addEventListener("scroll", updateActiveLink, { passive: true });
  window.addEventListener("load", updateActiveLink);

  /* Close the mobile menu after a link is tapped */
  const navCollapse = document.getElementById("navLinks");
  document.querySelectorAll("#navLinks a").forEach(function (link) {
    link.addEventListener("click", function () {
      if (navCollapse.classList.contains("show")) {
        bootstrap.Collapse.getOrCreateInstance(navCollapse).hide();
      }
    });
  });

  
  /* Campus Life image lightbox (GLightbox library) */
  if (window.GLightbox) {
    GLightbox({ selector: ".glightbox" });
  }

})();
