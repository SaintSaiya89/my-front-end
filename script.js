const menuIcon = document.querySelector(".menu-icon");
const navLinks = document.querySelector(".nav-links");
const navbarExtra = document.querySelector(".navbar-extra");

menuIcon.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
