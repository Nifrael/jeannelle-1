document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu");
  const menuTitles = document.querySelector(".menu-titles");

  menuToggle.addEventListener("click", () => {
    menuTitles.classList.toggle("show");
  });
});
