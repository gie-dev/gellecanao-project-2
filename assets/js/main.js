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

})();
