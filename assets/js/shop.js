// Tienda: ficha de producto (#tienda/<id>), carrito y envío del pedido.
// Los productos vienen de products.js; las utilidades compartidas de contact.js.
(() => {
  const PRODUCTS = window.DJ_PRODUCTS || [];
  const { ICON_CLOSE, sendViaInstagram, toast, validate, formatPrice, setLayer } = window.DJ;
  const ROUTE = "#tienda/";
  const CART_KEY = "djCart";
  const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;

  const byId = (id) => PRODUCTS.find((p) => p.id === id);
  const indexLabel = (p) => `${String(PRODUCTS.indexOf(p) + 1).padStart(2, "0")} / ${String(PRODUCTS.length).padStart(2, "0")}`;

  const ICON_BAG = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 7h12l1 13H5L6 7z" /><path d="M9 7a3 3 0 0 1 6 0" /></svg>`;
  const ICON_BACK = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M19 12H5M11 6l-6 6 6 6" /></svg>`;
  const ICON_ARROW = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17L17 7M8 7h9v9" /></svg>`;

  const qtyHTML = (value, label) => `
    <div class="qty" role="group" aria-label="${label}">
      <button type="button" data-qty="-1" aria-label="Quitar uno">−</button>
      <span aria-live="polite">${value}</span>
      <button type="button" data-qty="1" aria-label="Agregar uno">+</button>
    </div>`;

  // Bloqueo del scroll de la página mientras hay una capa abierta
  const syncLock = () => {
    setLayer("product", !productView.hidden);
    setLayer("cart", !cartEl.hidden);
  };

  // =====================================================
  // Carrito
  // =====================================================

  const loadCart = () => {
    try {
      const saved = JSON.parse(localStorage.getItem(CART_KEY)) || [];
      return saved.filter((item) => byId(item.id) && item.qty > 0);
    } catch {
      return [];
    }
  };

  let cart = loadCart();

  const cartCount = () => cart.reduce((n, item) => n + item.qty, 0);
  const cartTotal = () => cart.reduce((n, item) => n + byId(item.id).price * item.qty, 0);

  const saveCart = () => {
    try {
      localStorage.setItem(CART_KEY, JSON.stringify(cart));
    } catch {}
    renderCart();
  };

  const addToCart = (id, size, qty) => {
    const item = cart.find((i) => i.id === id && i.size === size);
    if (item) item.qty += qty;
    else cart.push({ id, size, qty });
    saveCart();
  };

  const cartEl = document.createElement("aside");
  cartEl.className = "cart";
  cartEl.hidden = true;
  cartEl.setAttribute("role", "dialog");
  cartEl.setAttribute("aria-modal", "true");
  cartEl.setAttribute("aria-labelledby", "cart-title");
  cartEl.innerHTML = `
    <div class="cart-backdrop" data-cart-close></div>
    <div class="cart-panel">
      <header class="cart-head">
        <h2 class="cart-title" id="cart-title">Tu carrito <span class="cart-head-count"></span></h2>
        <button type="button" class="dialog-close" data-cart-close aria-label="Cerrar carrito">${ICON_CLOSE}</button>
      </header>

      <div class="cart-step cart-step--items">
        <ul class="cart-items"></ul>
        <div class="cart-empty">
          <span class="cart-empty-icon">${ICON_BAG}</span>
          <p>Tu carrito está vacío.</p>
          <button type="button" class="pill-btn pill-btn--ghost" data-cart-shop>Ver la tienda</button>
        </div>
      </div>

      <form class="cart-step cart-step--checkout cart-form" id="cart-form" novalidate>
        <button type="button" class="cart-back" data-goto="items">${ICON_BACK} Volver al carrito</button>
        <p class="cart-form-intro">Déjanos tus datos para confirmar el pedido. El pago y la entrega se coordinan por mensaje directo.</p>
        <label class="field">
          <span>Nombre completo</span>
          <input name="name" required autocomplete="name" />
        </label>
        <label class="field">
          <span>Teléfono o WhatsApp</span>
          <input name="phone" type="tel" required autocomplete="tel" pattern="[0-9+\\s\\-]{8,}" />
        </label>
        <label class="field">
          <span>Provincia o ciudad</span>
          <input name="city" required autocomplete="address-level2" />
        </label>
        <label class="field">
          <span>Notas <em>(opcional)</em></span>
          <textarea name="notes" rows="2" placeholder="Dirección, horario de entrega…"></textarea>
        </label>
      </form>

      <footer class="cart-foot">
        <div class="cart-total"><span>Total</span><strong class="cart-total-value"></strong></div>
        <button type="button" class="pill-btn cart-next" data-goto="checkout">Finalizar pedido</button>
        <button type="submit" class="pill-btn cart-submit" form="cart-form">Enviar pedido por Instagram</button>
      </footer>
    </div>`;
  document.body.append(cartEl);

  const cartItemsEl = cartEl.querySelector(".cart-items");
  const cartForm = cartEl.querySelector(".cart-form");

  const setStep = (step) => {
    cartEl.dataset.step = step;
    if (step === "checkout") cartForm.querySelector("input")?.focus();
  };

  const renderCart = () => {
    const count = cartCount();
    document.querySelectorAll(".cart-count").forEach((el) => {
      el.textContent = count;
      el.hidden = count === 0;
    });
    document.querySelectorAll("[data-cart-open]").forEach((btn) => btn.setAttribute("aria-label", `Abrir carrito (${count})`));

    cartEl.classList.toggle("is-empty", count === 0);
    cartEl.querySelector(".cart-head-count").textContent = count ? `(${count})` : "";
    cartEl.querySelector(".cart-total-value").textContent = formatPrice(cartTotal());
    if (count === 0) setStep("items");

    cartItemsEl.innerHTML = cart
      .map((item, i) => {
        const p = byId(item.id);
        return `
          <li class="cart-item" data-index="${i}">
            <button type="button" class="cart-item-media" data-product="${p.id}" aria-label="Ver ${p.name}">
              <img src="${p.image}" alt="" />
            </button>
            <div class="cart-item-info">
              <span class="cart-item-name">${p.name}</span>
              <span class="cart-item-meta">Talla ${item.size} · ${p.color}</span>
              ${qtyHTML(item.qty, `Cantidad de ${p.name}`)}
            </div>
            <div class="cart-item-side">
              <span class="merch-price">${formatPrice(p.price * item.qty)}</span>
              <button type="button" class="cart-remove" data-remove>Quitar</button>
            </div>
          </li>`;
      })
      .join("");
  };

  let cartOpener = null;

  const openCart = (step = "items") => {
    cartOpener = document.activeElement;
    cartEl.hidden = false;
    setStep(cart.length ? step : "items");
    requestAnimationFrame(() => cartEl.classList.add("is-open"));
    syncLock();
    if (step !== "checkout") cartEl.querySelector(".dialog-close").focus();
  };

  const closeCart = () => {
    if (cartEl.hidden) return;
    cartEl.classList.remove("is-open");
    setTimeout(() => {
      cartEl.hidden = true;
      syncLock();
    }, reducedMotion ? 0 : 350);
    cartOpener?.focus?.();
  };

  cartEl.addEventListener("click", (e) => {
    const t = e.target;
    if (t.closest("[data-cart-close]")) return closeCart();
    if (t.closest("[data-cart-shop]")) {
      closeCart();
      closeProduct();
      document.getElementById("merch")?.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth" });
      return;
    }
    const stepBtn = t.closest("[data-goto]");
    if (stepBtn) return setStep(stepBtn.dataset.goto);

    const row = t.closest(".cart-item");
    if (!row) return;
    const item = cart[Number(row.dataset.index)];
    const qtyBtn = t.closest("[data-qty]");
    if (qtyBtn) {
      item.qty += Number(qtyBtn.dataset.qty);
      if (item.qty < 1) cart.splice(cart.indexOf(item), 1);
      saveCart();
    } else if (t.closest("[data-remove]")) {
      cart.splice(cart.indexOf(item), 1);
      saveCart();
    }
  });

  cartForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!cart.length || !validate(cartForm)) return;

    const data = new FormData(cartForm);
    const lines = cart.map((item) => {
      const p = byId(item.id);
      return `• ${p.name} — Talla ${item.size} × ${item.qty} — ${formatPrice(p.price * item.qty)}`;
    });
    const notes = data.get("notes").trim();
    const message = [
      "Hola, quiero hacer un pedido del Drop Vol.1:",
      "",
      ...lines,
      "",
      `Total: ${formatPrice(cartTotal())}`,
      "",
      `Nombre: ${data.get("name").trim()}`,
      `Teléfono: ${data.get("phone").trim()}`,
      `Ciudad: ${data.get("city").trim()}`,
      ...(notes ? [`Notas: ${notes}`] : []),
    ].join("\n");

    cart = [];
    saveCart();
    cartForm.reset();
    cartForm.classList.remove("was-validated");
    closeCart();
    sendViaInstagram({ title: "Tu pedido está listo", message });
  });

  // =====================================================
  // Ficha de producto
  // =====================================================

  const productView = document.createElement("div");
  productView.className = "product-view";
  productView.hidden = true;
  productView.setAttribute("role", "dialog");
  productView.setAttribute("aria-modal", "true");
  productView.setAttribute("aria-labelledby", "pv-title");
  document.body.append(productView);

  let current = null;
  let viewOpener = null;

  const relatedCardHTML = (p) => `
    <article class="merch-card">
      <button type="button" class="merch-media" data-product="${p.id}" aria-label="Ver ${p.name}">
        <img src="${p.image}" alt="" loading="lazy" />
      </button>
      <div class="merch-card-info">
        <div>
          <span class="merch-index">${indexLabel(p)}</span>
          <h3 class="merch-name">${p.name}</h3>
          <span class="merch-price">${formatPrice(p.price)}</span>
        </div>
        <button type="button" class="merch-cta" data-product="${p.id}" aria-label="Ver ${p.name}">${ICON_ARROW}</button>
      </div>
    </article>`;

  const renderProduct = (p) => {
    const singleSize = p.sizes.length === 1;
    productView.innerHTML = `
      <div class="pv-bar">
        <button type="button" class="pv-back" data-pv-close>${ICON_BACK}<span>Volver a la tienda</span></button>
        <span class="pv-bar-title">Drop Vol.1</span>
        <button type="button" class="cart-btn" data-cart-open aria-label="Abrir carrito">
          ${ICON_BAG}<span class="cart-count" hidden>0</span>
        </button>
      </div>

      <div class="pv-container">
        <div class="pv-layout">
          <div class="pv-media merch-media">
            <span class="merch-badge">Drop Vol.1</span>
            <img src="${p.image}" alt="${p.name}, vista frontal y trasera" />
          </div>

          <form class="pv-info" novalidate>
            <span class="merch-index">${indexLabel(p)}</span>
            <h2 class="merch-name merch-name--lg" id="pv-title">${p.name}</h2>
            <span class="merch-price merch-price--lg">${formatPrice(p.price)}</span>
            <p class="merch-desc">${p.description}</p>

            <div class="pv-option">
              <span class="pv-label">Color</span>
              <span class="pv-chip">${p.color}</span>
            </div>

            <fieldset class="pv-option">
              <legend class="pv-label">Talla <span class="pv-hint">${singleSize ? "" : "· Elige una"}</span></legend>
              <div class="pv-sizes">
                ${p.sizes
                  .map(
                    (size) => `
                  <label class="pv-size">
                    <input type="radio" name="size" value="${size}" required ${singleSize ? "checked" : ""} />
                    <span>${size}</span>
                  </label>`
                  )
                  .join("")}
              </div>
            </fieldset>

            <div class="pv-option">
              <span class="pv-label">Cantidad</span>
              ${qtyHTML(1, "Cantidad")}
            </div>

            <div class="pv-actions">
              <button type="submit" class="pill-btn" name="action" value="add">Agregar al carrito</button>
              <button type="submit" class="pill-btn pill-btn--ghost" name="action" value="buy">Comprar ahora</button>
            </div>

            <details class="pv-acc" open>
              <summary>Detalles</summary>
              <ul>${p.details.map((d) => `<li>${d}</li>`).join("")}</ul>
            </details>
            <details class="pv-acc">
              <summary>Cómo comprar</summary>
              <p>
                Agrega tus piezas al carrito y envía el pedido. Te escribimos por mensaje directo en
                Instagram para confirmar disponibilidad, pago y entrega.
              </p>
            </details>
          </form>
        </div>

        <section class="pv-related" aria-labelledby="pv-related-title">
          <h3 class="pv-related-title" id="pv-related-title">También del Drop Vol.1</h3>
          <div class="merch-grid">${PRODUCTS.filter((x) => x !== p).map(relatedCardHTML).join("")}</div>
        </section>
      </div>`;
    renderCart();
  };

  const showProduct = (p) => {
    if (!productView.hidden && current === p) return;
    current = p;
    renderProduct(p);
    document.title = `${p.name} · DJ Aler`;
    if (productView.hidden) {
      viewOpener = document.activeElement;
      productView.hidden = false;
      requestAnimationFrame(() => productView.classList.add("is-open"));
      syncLock();
    }
    productView.scrollTop = 0;
    productView.querySelector(".pv-back").focus({ preventScroll: true });
  };

  const hideProduct = () => {
    if (productView.hidden) return;
    current = null;
    document.title = "DJ Aler";
    productView.classList.remove("is-open");
    setTimeout(() => {
      productView.hidden = true;
      syncLock();
    }, reducedMotion ? 0 : 350);
    viewOpener?.focus?.({ preventScroll: true });
  };

  // Navegación: cada ficha tiene su URL y el botón "atrás" la cierra
  const openProduct = (id) => {
    const p = byId(id);
    if (!p) return;
    const url = ROUTE + id;
    if (productView.hidden) history.pushState({ product: id }, "", url);
    else history.replaceState({ product: id }, "", url);
    showProduct(p);
  };

  const closeProduct = () => {
    if (productView.hidden) return;
    if (history.state?.product) history.back();
    else {
      history.replaceState(null, "", "#merch");
      hideProduct();
    }
  };

  const syncFromUrl = () => {
    const id = location.hash.startsWith(ROUTE) ? location.hash.slice(ROUTE.length) : null;
    const p = id && byId(id);
    if (p) showProduct(p);
    else hideProduct();
  };

  window.addEventListener("popstate", syncFromUrl);

  productView.addEventListener("click", (e) => {
    if (e.target.closest("[data-pv-close]")) return closeProduct();
    const qtyBtn = e.target.closest("[data-qty]");
    if (qtyBtn) {
      const out = qtyBtn.parentElement.querySelector("span");
      out.textContent = Math.min(10, Math.max(1, Number(out.textContent) + Number(qtyBtn.dataset.qty)));
    }
  });

  productView.addEventListener("change", (e) => {
    if (e.target.name === "size") productView.querySelector(".pv-hint").textContent = "";
  });

  productView.addEventListener("submit", (e) => {
    e.preventDefault();
    const form = e.target;
    const size = form.querySelector("input[name=size]:checked")?.value;
    if (!size) {
      form.querySelector(".pv-hint").textContent = "· Elige una talla para continuar";
      form.querySelector(".pv-sizes").classList.add("is-invalid");
      form.querySelector("input[name=size]").focus();
      return;
    }
    form.querySelector(".pv-sizes").classList.remove("is-invalid");
    const qty = Number(form.querySelector(".qty span").textContent);
    addToCart(current.id, size, qty);

    if (e.submitter?.value === "buy") {
      openCart("checkout");
    } else {
      toast(`${current.name} (talla ${size}) agregado al carrito`, { label: "Ver carrito", onClick: () => openCart() });
    }
  });

  // =====================================================
  // Enlaces globales y teclado
  // =====================================================

  // Fase de captura para adelantarse a los manejadores de enlaces de Webflow
  document.addEventListener(
    "click",
    (e) => {
      const productLink = e.target.closest("[data-product]");
      const cartLink = e.target.closest("[data-cart-open]");
      if (!productLink && !cartLink) return;
      if (e.button !== 0 || e.metaKey || e.ctrlKey) return;
      e.preventDefault();
      e.stopPropagation();
      if (productLink) {
        if (!cartEl.hidden) closeCart();
        openProduct(productLink.dataset.product);
      } else {
        openCart();
      }
    },
    true
  );

  document.addEventListener("keydown", (e) => {
    if (e.key !== "Escape" || document.querySelector("dialog[open]")) return;
    if (!cartEl.hidden) closeCart();
    else if (!productView.hidden) closeProduct();
  });

  renderCart();
  syncFromUrl();
})();
