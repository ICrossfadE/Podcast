export function sortItems(data, itemID) {
  const result = data.filter((data) => {
    return data.theme == itemID;
  });

  return result;
}
