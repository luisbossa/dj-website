// Enlaces .js-logout: borran la verificación de edad y vuelven al inicio.
document.querySelectorAll(".js-logout").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    localStorage.removeItem("ageVerified");
    window.location.href = "/";
  });
});
