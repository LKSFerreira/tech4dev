// Seleção de elementos ⬇️
const open_menu = document.querySelector("#openMenu");
const close_button = document.querySelector("#closeMenu");
const navigation = document.querySelector("#navigation");

// Eventos ⬇️
open_menu.addEventListener("click", () => {
  navigation.style.transform = "translate(0)";
});

close_button.addEventListener("click", () => {
  navigation.style.transform = "translate(100%)";
});

// ScrollReveal para animações ⬇️
ScrollReveal().reveal("#title", {
  origin: "top",
  duration: 2000,
  distance: "40%",
  reset: true,
});

ScrollReveal().reveal("#social_media ul li", {
  origin: "left",
  duration: 2000,
  distance: "70%",
  reset: true,
});
