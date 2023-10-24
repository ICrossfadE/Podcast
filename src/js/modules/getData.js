export async function getData() {
  try {
    const response = await fetch("http://localhost:4000/get-json");
    if (!response.ok) {
      throw new Error("Помилка HTTP: " + response.status);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Помилка:", error);
  }
}
