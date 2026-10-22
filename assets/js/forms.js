// Formulario de booking y botón "Agregar al calendario" de la cuenta regresiva.
(() => {
  const { sendViaInstagram, validate } = window.DJ;

  // ---------- Booking ----------
  const booking = document.getElementById("booking-form");
  if (booking) {
    // No se pueden pedir fechas pasadas
    const date = booking.elements.date;
    if (date) date.min = new Date().toISOString().slice(0, 10);

    booking.addEventListener("submit", (e) => {
      e.preventDefault();
      if (!validate(booking)) return;

      const data = new FormData(booking);
      const formattedDate = new Date(`${data.get("date")}T12:00:00`).toLocaleDateString("es", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
      });
      const message = [
        "Hola, quiero contratar a DJ Aler para un evento:",
        "",
        `Nombre: ${data.get("name").trim()}`,
        `Tipo de evento: ${data.get("type")}`,
        `Fecha: ${formattedDate}`,
        `Lugar: ${data.get("city").trim()}`,
        ...(data.get("message").trim() ? ["", data.get("message").trim()] : []),
      ].join("\n");

      sendViaInstagram({ title: "Tu solicitud está lista", message });
      booking.reset();
      booking.classList.remove("was-validated");
    });
  }

  // ---------- Calendario ----------
  // Descarga un .ics con el día del drop (fecha tomada de #countdown-timer).
  // Delegado: sirve para cualquier botón [data-add-calendar], también los que
  // se crean después (vista del drop).
  const timer = document.getElementById("countdown-timer");
  if (timer) {
    document.addEventListener("click", (e) => {
      if (!e.target.closest("[data-add-calendar]")) return;
      const start = new Date(timer.dataset.date);
      const end = new Date(start.getTime() + 86400000);
      const day = (d) => `${d.getFullYear()}${String(d.getMonth() + 1).padStart(2, "0")}${String(d.getDate()).padStart(2, "0")}`;
      const stamp = new Date().toISOString().replace(/[-:]/g, "").replace(/\.\d+/, "");

      const ics = [
        "BEGIN:VCALENDAR",
        "VERSION:2.0",
        "PRODID:-//DJ Aler//Drop//ES",
        "BEGIN:VEVENT",
        `UID:drop-${day(start)}@djaler`,
        `DTSTAMP:${stamp}`,
        `DTSTART;VALUE=DATE:${day(start)}`,
        `DTEND;VALUE=DATE:${day(end)}`,
        "SUMMARY:Próximo drop · DJ Aler x RBT",
        `DESCRIPTION:Nuevo drop de DJ Aler. Edición limitada\\, sin restock. ${location.origin}/pages/login.html#merch`,
        "BEGIN:VALARM",
        "TRIGGER:-PT12H",
        "ACTION:DISPLAY",
        "DESCRIPTION:Mañana sale el nuevo drop de DJ Aler",
        "END:VALARM",
        "END:VEVENT",
        "END:VCALENDAR",
      ].join("\r\n");

      const url = URL.createObjectURL(new Blob([ics], { type: "text/calendar;charset=utf-8" }));
      const a = Object.assign(document.createElement("a"), { href: url, download: "drop-dj-aler.ics" });
      document.body.append(a);
      a.click();
      a.remove();
      setTimeout(() => URL.revokeObjectURL(url), 1000);
    });
  }
})();
