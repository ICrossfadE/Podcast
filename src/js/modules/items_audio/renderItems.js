export function renderItems(data, itemElement, htmlElement, addActive) {
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
  addActive(allElements);
}
