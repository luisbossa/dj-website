// Interacciones generales de la página: barra de navegación fija, menú móvil,
// enlace activo según la sección, animaciones de aparición y año del footer.
(() => {
  const nav = document.getElementById("site-nav");
  const toggle = nav?.querySelector(".site-nav-toggle");
  const links = [...(nav?.querySelectorAll(".site-nav-links a[href^='#']") || [])];
  const hero = document.querySelector(".section.hero");
  const toTop = document.querySelector(".to-top");
  const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Menú móvil
  const setMenu = (open) => {
    if (!nav || !toggle) return;
    nav.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
  };

  toggle?.addEventListener("click", () => setMenu(!nav.classList.contains("is-open")));
  nav?.querySelectorAll(".site-nav-links a").forEach((a) => a.addEventListener("click", () => setMenu(false)));
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") setMenu(false);
  });

  // Scroll suave de los enlaces internos (#seccion). Se maneja aquí en fase de
  // captura para que no se ejecute también el scroll animado de Webflow: los dos
  // juntos hacían que el desplazamiento fuera lento al inicio y luego saltara.
  document.addEventListener(
    "click",
    (e) => {
      const link = e.target.closest?.('a[href^="#"]');
      if (!link || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey) return;

      const hash = link.getAttribute("href");
      const target = hash.length > 1 && document.getElementById(hash.slice(1));
      if (!target) return;

      e.preventDefault();
      e.stopPropagation();

      const behavior = reducedMotion ? "auto" : "smooth";
      if (link.classList.contains("to-top") || hash === "#home") {
        window.scrollTo({ top: 0, behavior });
      } else {
        target.scrollIntoView({ behavior, block: "start" });
      }
      history.pushState(null, "", hash);
    },
    true
  );

  // Barra fija y botón "volver arriba": aparecen cuando el hero sale de pantalla
  if (nav && hero) {
    new IntersectionObserver(
      ([entry]) => {
        const show = !entry.isIntersecting;
        nav.classList.toggle("is-visible", show);
        toTop?.classList.toggle("is-visible", show);
        if (!show) setMenu(false);
      },
      { threshold: 0.05 }
    ).observe(hero);
  }

  // Enlace activo según la sección que ocupa el centro de la pantalla
  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const href = `#${entry.target.id}`;
        links.forEach((a) => a.classList.toggle("is-active", a.getAttribute("href") === href));
      });
    },
    { rootMargin: "-45% 0px -50% 0px" }
  );
  links.forEach((a) => {
    const section = document.querySelector(a.getAttribute("href"));
    if (section) sectionObserver.observe(section);
  });

  // Animación de aparición
  const revealItems = document.querySelectorAll(".reveal");
  if (reducedMotion) {
    revealItems.forEach((el) => el.classList.add("is-revealed"));
  } else {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-revealed");
          revealObserver.unobserve(entry.target);
        });
      },
      { threshold: 0.15 }
    );
    revealItems.forEach((el) => revealObserver.observe(el));
  }

  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
})();
