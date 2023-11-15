export function addActive(arrHtmlElements) {
  document.addEventListener("click", () => {
    arrHtmlElements.forEach((element) => {
      element.classList.remove("active");
    });
  });

  arrHtmlElements.forEach((item) => {
    item.addEventListener("click", (event) => {
      event.stopPropagation();

      arrHtmlElements.forEach((element) => {
        element.classList.remove("active");
      });

      item.classList.add("active");
    });
  });
}
