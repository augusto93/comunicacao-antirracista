// Abre/fecha o submenu "Edições Passadas" no toque (no desktop ele também abre no hover).
document.querySelectorAll(".menu-edicao .dropdown > a").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    link.parentElement.classList.toggle("is-open");
  });
});

document.addEventListener("click", (event) => {
  document.querySelectorAll(".menu-edicao .dropdown.is-open").forEach((dropdown) => {
    if (!dropdown.contains(event.target)) dropdown.classList.remove("is-open");
  });
});
