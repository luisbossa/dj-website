const AGE_KEY = "ageVerified";
const MIN_AGE = 18;
const SITE_URL = "/pages/login.html";

// Ya verificado → redirige
if (localStorage.getItem(AGE_KEY) === "true") {
  window.location.replace(SITE_URL);
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("age-form");
  const errorBox = document.getElementById("age-error");
  if (!form || !errorBox) return;

  const errorText = errorBox.querySelector("span");
  const inputs = [...form.querySelectorAll("input")];
  const [day, month, year] = inputs;

  const showError = (message) => {
    errorText.textContent = message;
    errorBox.classList.add("is-visible");
    form.classList.add("has-error");
    form.classList.remove("shake");
    void form.offsetWidth; // reinicia la animación
    form.classList.add("shake");
  };

  const clearError = () => {
    errorBox.classList.remove("is-visible");
    form.classList.remove("has-error");
  };

  const getAge = (birthDate) => {
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  // Solo dígitos y salto automático al siguiente campo
  inputs.forEach((input, i) => {
    input.addEventListener("input", () => {
      input.value = input.value.replace(/\D/g, "");
      clearError();
      if (input.value.length === input.maxLength && inputs[i + 1]) inputs[i + 1].focus();
    });

    input.addEventListener("keydown", (e) => {
      if (e.key === "Backspace" && !input.value && inputs[i - 1]) inputs[i - 1].focus();
    });
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const d = Number(day.value);
    const m = Number(month.value);
    const y = Number(year.value);

    if (!d || !m || !y) {
      showError("Completa día, mes y año.");
      inputs.find((input) => !input.value)?.focus();
      return;
    }

    const birthDate = new Date(y, m - 1, d);
    const isValidDate =
      y >= 1900 &&
      birthDate.getFullYear() === y &&
      birthDate.getMonth() === m - 1 &&
      birthDate.getDate() === d &&
      birthDate <= new Date();

    if (!isValidDate) {
      showError("Esa fecha no es válida. Revisa los datos.");
      return;
    }

    if (getAge(birthDate) < MIN_AGE) {
      showError(`Debes tener al menos ${MIN_AGE} años para entrar.`);
      return;
    }

    localStorage.setItem(AGE_KEY, "true");
    window.location.href = SITE_URL;
  });
});
