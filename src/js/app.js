import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();

const menuButton = document.querySelector("#header-menu");
const menu = document.querySelector(".header-nav");

menuButton.onclick = () => {
  menu.classList.toggle("open");
};
