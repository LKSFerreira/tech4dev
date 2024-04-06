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
