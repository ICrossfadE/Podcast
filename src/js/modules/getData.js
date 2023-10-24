export async function getData() {
  try {
    const response = await fetch("https://server-podcast.fly.dev/get-json");
    if (!response.ok) {
      throw new Error("Помилка HTTP: " + response.status);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Помилка:", error);
  }
}
