// Vista "Próximo drop" (#drop/avisame): cuenta regresiva, qué esperar y
// formulario para recibir el aviso por Instagram. Se abre con [data-drop-open].
(() => {
  const timer = document.getElementById("countdown-timer");
  if (!timer) return;

  const { sendViaInstagram, validate, formatPrice, setLayer } = window.DJ;
  const PRODUCTS = window.DJ_PRODUCTS || [];
  const ROUTE = "#drop/avisame";
  const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const target = new Date(timer.dataset.date);

  const ICON_BACK = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M19 12H5M11 6l-6 6 6 6" /></svg>`;
  const ICON_ARROW = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17L17 7M8 7h9v9" /></svg>`;
  const ICON_CHECK = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12l5 5 9-10" /></svg>`;

  const launchDate = target.toLocaleDateString("es", { weekday: "long", day: "numeric", month: "long", year: "numeric" });
  const interests = ["Camisetas", "Abrigos", "Accesorios"];

  const view = document.createElement("div");
  view.className = "product-view drop-view";
  view.hidden = true;
  view.setAttribute("role", "dialog");
  view.setAttribute("aria-modal", "true");
  view.setAttribute("aria-labelledby", "drop-title");
  view.innerHTML = `
    <div class="pv-bar">
      <button type="button" class="pv-back" data-drop-close>${ICON_BACK}<span>Volver</span></button>
      <span class="pv-bar-title">Próximo drop</span>
      <span class="pv-bar-spacer" aria-hidden="true"></span>
    </div>

    <div class="pv-container">
      <div class="pv-layout">
        <div class="drop-media">
          <img src="/assets/images/backgrounds/soon-img.jpg" alt="" />
          <div class="drop-media-content">
            <span class="merch-badge">Próximamente</span>
            <div class="drop-timer" role="timer" aria-label="Tiempo para el lanzamiento">
              <div><strong data-unit="days">00</strong><span>Días</span></div>
              <div><strong data-unit="hours">00</strong><span>Horas</span></div>
              <div><strong data-unit="mins">00</strong><span>Min</span></div>
              <div><strong data-unit="secs">00</strong><span>Seg</span></div>
            </div>
          </div>
        </div>

        <div class="pv-info">
          <span class="merch-index">Lanzamiento · ${launchDate}</span>
          <h2 class="merch-name merch-name--lg" id="drop-title">Sé el primero en enterarte</h2>
          <p class="merch-desc">
            El próximo drop de DJ Aler x RBT llega en edición limitada y sin restock.
            Déjanos tus datos y te escribimos por Instagram el día del lanzamiento.
          </p>

          <ul class="drop-perks">
            <li>${ICON_CHECK}Aviso por mensaje directo el día del lanzamiento</li>
            <li>${ICON_CHECK}Edición limitada: cuando se acaba, se acaba</li>
            <li>${ICON_CHECK}Un solo mensaje por drop, sin spam</li>
          </ul>

          <form class="drop-form" novalidate>
            <label class="field">
              <span>Nombre</span>
              <input name="name" required autocomplete="name" />
            </label>
            <label class="field">
              <span>Tu usuario de Instagram</span>
              <span class="field-prefix">
                <b aria-hidden="true">@</b>
                <input name="instagram" required autocomplete="off" autocapitalize="off" spellcheck="false"
                  pattern="[A-Za-z0-9._]{1,30}" placeholder="tu.usuario" />
              </span>
            </label>
            <fieldset class="pv-option">
              <legend class="pv-label">¿Qué te interesa? <span class="pv-hint">· Opcional</span></legend>
              <div class="pv-sizes">
                ${interests
                  .map(
                    (item) => `
                  <label class="pv-size">
                    <input type="checkbox" name="interest" value="${item}" />
                    <span>${item}</span>
                  </label>`
                  )
                  .join("")}
              </div>
            </fieldset>
            <div class="pv-actions">
              <button type="submit" class="pill-btn">Quiero que me avisen</button>
              <button type="button" class="pill-btn pill-btn--ghost" data-add-calendar>Agregar al calendario</button>
            </div>
          </form>

          <details class="pv-acc">
            <summary>¿Cómo funciona el aviso?</summary>
            <p>
              Al enviar el formulario se prepara un mensaje con tus datos para que lo mandes a
              @lilalerr por Instagram. Con eso quedas en la lista y te escribimos cuando salga el drop.
            </p>
          </details>
        </div>
      </div>

      <section class="pv-related" aria-labelledby="drop-related-title">
        <h3 class="pv-related-title" id="drop-related-title">Mientras tanto: Drop Vol.1</h3>
        <div class="merch-grid drop-grid">
          ${PRODUCTS.map(
            (p) => `
            <article class="merch-card">
              <button type="button" class="merch-media" data-product="${p.id}" aria-label="Ver ${p.name}">
                <img src="${p.image}" alt="" loading="lazy" />
              </button>
              <div class="merch-card-info">
                <div>
                  <h3 class="merch-name">${p.name}</h3>
                  <span class="merch-price">${formatPrice(p.price)}</span>
                </div>
                <button type="button" class="merch-cta" data-product="${p.id}" aria-label="Ver ${p.name}">${ICON_ARROW}</button>
              </div>
            </article>`
          ).join("")}
        </div>
      </section>
    </div>`;
  document.body.append(view);

  const form = view.querySelector(".drop-form");

  // ---------- Cuenta regresiva de la vista ----------
  const units = Object.fromEntries([...view.querySelectorAll("[data-unit]")].map((el) => [el.dataset.unit, el]));
  const pad = (n) => String(n).padStart(2, "0");
  let tick;

  const renderTimer = () => {
    const s = Math.max(0, Math.floor((target - Date.now()) / 1000));
    units.days.textContent = pad(Math.floor(s / 86400));
    units.hours.textContent = pad(Math.floor((s % 86400) / 3600));
    units.mins.textContent = pad(Math.floor((s % 3600) / 60));
    units.secs.textContent = pad(s % 60);
  };

  // ---------- Abrir / cerrar ----------
  let opener = null;

  const show = () => {
    if (!view.hidden) return;
    opener = document.activeElement;
    renderTimer();
    tick = setInterval(renderTimer, 1000);
    view.hidden = false;
    view.scrollTop = 0;
    requestAnimationFrame(() => view.classList.add("is-open"));
    setLayer("drop", true);
    document.title = "Próximo drop · DJ Aler";
    view.querySelector(".pv-back").focus({ preventScroll: true });
  };

  const hide = () => {
    if (view.hidden) return;
    clearInterval(tick);
    view.classList.remove("is-open");
    document.title = "DJ Aler";
    setTimeout(() => {
      view.hidden = true;
      setLayer("drop", false);
    }, reducedMotion ? 0 : 350);
    opener?.focus?.({ preventScroll: true });
  };

  const open = () => {
    if (location.hash !== ROUTE) history.pushState({ drop: true }, "", ROUTE);
    show();
  };

  const close = () => {
    if (history.state?.drop) history.back();
    else {
      history.replaceState(null, "", "#countdown");
      hide();
    }
  };

  // Mostrar u ocultar según la URL (enlace directo y botón atrás). Una ficha de
  // producto abierta desde aquí queda encima, así que no cierra esta vista.
  const syncFromUrl = () => {
    if (location.hash === ROUTE) show();
    else if (!location.hash.startsWith("#tienda/")) hide();
  };
  window.addEventListener("popstate", syncFromUrl);

  document.addEventListener(
    "click",
    (e) => {
      if (!e.target.closest("[data-drop-open]") || e.button !== 0 || e.metaKey || e.ctrlKey) return;
      e.preventDefault();
      e.stopPropagation();
      open();
    },
    true
  );

  view.addEventListener("click", (e) => {
    if (e.target.closest("[data-drop-close]")) close();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key !== "Escape" || view.hidden) return;
    // Primero se cierran las capas que estén encima
    const layerOnTop = document.querySelector("dialog[open], .cart:not([hidden]), .product-view:not(.drop-view):not([hidden])");
    if (!layerOnTop) close();
  });

  // ---------- Formulario ----------
  // La "@" ya se muestra como prefijo: se quita si el usuario la escribe
  form.elements.instagram.addEventListener("input", (e) => {
    e.target.value = e.target.value.replace(/^@+/, "").replace(/\s/g, "");
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!validate(form)) return;

    const data = new FormData(form);
    const user = data.get("instagram").trim().replace(/^@/, "");
    const picked = data.getAll("interest");
    const message = [
      "Hola, quiero que me avisen del próximo drop de DJ Aler x RBT.",
      "",
      `Nombre: ${data.get("name").trim()}`,
      `Instagram: @${user}`,
      ...(picked.length ? [`Me interesa: ${picked.join(", ")}`] : []),
    ].join("\n");

    sendViaInstagram({ title: "Ya casi estás en la lista", message });
    form.reset();
    form.classList.remove("was-validated");
  });

  syncFromUrl();
})();
