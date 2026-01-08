document.addEventListener("DOMContentLoaded", () => {
  const logoutLinks = document.querySelectorAll(".js-logout");

  if (!logoutLinks.length) return;

  logoutLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      localStorage.removeItem("ageVerified");

      window.location.href = "/";
    });
  });
});
