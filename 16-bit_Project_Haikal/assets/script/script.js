//
const menuToggle = document.querySelector(".menu-toggle input");
const nav = document.querySelector("nav ul");

// fungsi to
menuToggle.addEventListener("click", function () {
  nav.classList.toggle("slide");
});
