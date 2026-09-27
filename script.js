function toggleMenu() {
  const menu = document.getElementById("navMenu");

  if (!menu) return;

  if (menu.style.display === "none") {
    menu.style.display = "flex";
  } else {
    menu.style.display = "none";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const menu = document.getElementById("navMenu");

  if (!menu) return;

  menu.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      if (window.innerWidth <= 768) {
        menu.style.display = "none";
      }
    });
  });
});
