export function renderItems(data, itemElement, htmlElement) {
  data.forEach((item) => {
    new itemElement(
      item.theme.theme,
      item.details.title,
      item.details.episode,
      item.details.season,
      item.details.img,
      item.details.audioSrc,
      htmlElement
    ).render();
  });

  const allElements = htmlElement.querySelectorAll(".list-item");

  allElements.forEach((item) => {
    item.addEventListener("click", (event) => {
      allElements.forEach((element) => {
        element.classList.remove("active");
      });

      item.classList.add("active");
    });
  });
}
