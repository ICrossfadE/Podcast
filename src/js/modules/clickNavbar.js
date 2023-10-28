export function clickNavbar(data, sortItems, renderItems, itemCreate, parent) {
  const nav = document.querySelector(".navbar");
  const li = document.querySelectorAll("li");

  let newData = data;

  function handleButtonClick(id) {
    return sortItems(data, id);
  }

  function updateItems(data, itemCreate, parent) {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
    renderItems(data, itemCreate, parent);
  }

  nav.addEventListener("click", (event) => {
    let button = event.target;

    li.forEach((element) => {
      element.classList.remove("active");
    });
    button.classList.add("active");

    if (button.id == "all") {
      updateItems(data, itemCreate, parent);
    } else {
      newData = handleButtonClick(button.id);
      updateItems(newData, itemCreate, parent);
    }
  });
}
