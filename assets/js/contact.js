// Utilidades compartidas: envío de mensajes por Instagram, avisos (toast) y
// validación de formularios.
//
// Instagram no permite pre-escribir el texto de un mensaje directo, así que el
// mensaje se copia al portapapeles y se abre el chat para que el usuario lo pegue.
window.DJ = (() => {
  const IG_HANDLE = "lilalerr";
  const IG_URL = `https://ig.me/m/${IG_HANDLE}`;

  const ICON_CLOSE = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" /></svg>`;

  const copyText = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch {
      const area = document.createElement("textarea");
      area.value = text;
      area.setAttribute("readonly", "");
      area.style.cssText = "position:fixed;opacity:0;pointer-events:none";
      document.body.append(area);
      area.select();
      const ok = document.execCommand("copy");
      area.remove();
      return ok;
    }
  };

  // ---------- Diálogo "enviar por Instagram" ----------
  let dialog;

  const buildDialog = () => {
    dialog = document.createElement("dialog");
    dialog.className = "ig-dialog";
    dialog.setAttribute("aria-labelledby", "ig-dialog-title");
    dialog.innerHTML = `
      <button type="button" class="dialog-close" data-dialog-close aria-label="Cerrar">${ICON_CLOSE}</button>
      <span class="section-eyebrow">Último paso</span>
      <h2 class="ig-dialog-title" id="ig-dialog-title"></h2>
      <p class="ig-dialog-status"></p>
      <ol class="ig-steps">
        <li>Abre el chat de Instagram de <strong>@${IG_HANDLE}</strong>.</li>
        <li>Pega el mensaje y envíalo. Te respondemos por ahí.</li>
      </ol>
      <pre class="ig-dialog-message"></pre>
      <div class="ig-dialog-actions">
        <a href="${IG_URL}" target="_blank" rel="noopener" class="pill-btn">Abrir Instagram</a>
        <button type="button" class="pill-btn pill-btn--ghost" data-copy>Copiar mensaje</button>
      </div>`;
    document.body.append(dialog);

    dialog.addEventListener("click", (e) => {
      // Clic fuera de la tarjeta o en la X
      if (e.target === dialog || e.target.closest("[data-dialog-close]")) dialog.close();
    });
    dialog.querySelector("[data-copy]").addEventListener("click", async (e) => {
      const ok = await copyText(dialog.querySelector(".ig-dialog-message").textContent);
      e.currentTarget.textContent = ok ? "¡Copiado!" : "Cópialo a mano";
    });
  };

  const sendViaInstagram = async ({ title, message }) => {
    if (!dialog) buildDialog();
    const copied = await copyText(message);
    dialog.querySelector(".ig-dialog-title").textContent = title;
    dialog.querySelector(".ig-dialog-status").textContent = copied
      ? "Copiamos este mensaje en tu portapapeles."
      : "Copia este mensaje para enviarlo:";
    dialog.querySelector(".ig-dialog-message").textContent = message;
    dialog.querySelector("[data-copy]").textContent = "Copiar mensaje";
    dialog.showModal();
  };

  // ---------- Avisos ----------
  let toastEl;
  let toastTimer;

  const toast = (text, action) => {
    if (!toastEl) {
      toastEl = document.createElement("div");
      toastEl.className = "toast";
      toastEl.setAttribute("role", "status");
      document.body.append(toastEl);
    }
    toastEl.innerHTML = `<span></span>`;
    toastEl.firstChild.textContent = text;
    if (action) {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.textContent = action.label;
      btn.addEventListener("click", () => {
        toastEl.classList.remove("is-visible");
        action.onClick();
      });
      toastEl.append(btn);
    }
    toastEl.classList.add("is-visible");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toastEl.classList.remove("is-visible"), 3500);
  };

  // ---------- Formularios ----------
  // Marca los campos inválidos y enfoca el primero. Devuelve true si es válido.
  const validate = (form) => {
    form.classList.add("was-validated");
    const firstInvalid = form.querySelector(":invalid:not(fieldset)");
    firstInvalid?.focus();
    return !firstInvalid;
  };

  const formatPrice = (n) => `₡ ${n.toLocaleString("en-US")}`;

  // ---------- Capas a pantalla completa ----------
  // Bloquea el scroll de la página mientras haya alguna capa abierta
  // (ficha de producto, carrito, vista del drop).
  const openLayers = new Set();
  const setLayer = (name, open) => {
    if (open) openLayers.add(name);
    else openLayers.delete(name);
    document.documentElement.classList.toggle("is-locked", openLayers.size > 0);
  };

  return { IG_URL, ICON_CLOSE, copyText, sendViaInstagram, toast, validate, formatPrice, setLayer };
})();
