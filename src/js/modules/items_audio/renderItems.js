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
}
