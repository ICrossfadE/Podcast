export function showNavbar() {
  const menuButton = document.querySelector("#header-menu");
  const menuButtonIcon = document.querySelector(".ri-menu-line");
  const menu = document.querySelector(".header-nav");

  menuButton.onclick = () => {
    menu.classList.toggle("open");
    menuButtonIcon.classList.toggle("ri-menu-line");
    menuButtonIcon.classList.toggle("ri-close-line");
  };
}
