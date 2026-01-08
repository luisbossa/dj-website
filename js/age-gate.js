document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("age-form");
  const errorBox = document.getElementById("age-error");

  if (!form || !errorBox) return;

  // Ya verificado → redirige
  if (localStorage.getItem("ageVerified") === "true") {
    window.location.href = "/pages/website.html";
    return;
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const inputs = form.querySelectorAll("input");
    const day = Number(inputs[0].value);
    const month = Number(inputs[1].value);
    const year = Number(inputs[2].value);

    if (!day || !month || !year) {
      showError("Completa todos los campos.");
      return;
    }

    const birthDate = new Date(year, month - 1, day);

    if (
      birthDate.getFullYear() !== year ||
      birthDate.getMonth() !== month - 1 ||
      birthDate.getDate() !== day
    ) {
      showError("Fecha de nacimiento inválida.");
      return;
    }

    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();

    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }

    if (age >= 18) {
      localStorage.setItem("ageVerified", "true");
      window.location.href = "/pages/website.html";
    } else {
      showError("Debes ser mayor de 18 años para continuar.");
    }
  });

  function showError(message) {
    errorBox.textContent = message;
    errorBox.classList.add("is-visible");
  }

  form.querySelectorAll("input").forEach((input) => {
    input.addEventListener("input", () => {
      errorBox.classList.remove("is-visible");
    });
  });
});
