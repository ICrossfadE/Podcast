export function addActive(arrHtmlElements) {
  arrHtmlElements.forEach((item) => {
    item.addEventListener("click", (event) => {
      arrHtmlElements.forEach((element) => {
        element.classList.remove("active");
      });

      item.classList.add("active");
    });
  });
}
