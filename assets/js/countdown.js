// Cuenta regresiva hasta la fecha indicada en data-date (#countdown-timer).
(() => {
  const timer = document.getElementById("countdown-timer");
  if (!timer) return;

  const target = new Date(timer.dataset.date).getTime();
  const fields = {
    days: document.getElementById("d"),
    hours: document.getElementById("h"),
    mins: document.getElementById("m"),
    secs: document.getElementById("s"),
  };

  const pad = (n) => String(n).padStart(2, "0");

  const render = () => {
    const diff = Math.max(0, target - Date.now());
    const totalSecs = Math.floor(diff / 1000);

    fields.days.textContent = pad(Math.floor(totalSecs / 86400));
    fields.hours.textContent = pad(Math.floor((totalSecs % 86400) / 3600));
    fields.mins.textContent = pad(Math.floor((totalSecs % 3600) / 60));
    fields.secs.textContent = pad(totalSecs % 60);

    if (diff === 0) clearInterval(intervalId);
  };

  const intervalId = setInterval(render, 1000);
  render();
})();
