export async function fetchWeather(city) {
  const response = await fetch(`/`, {
    method: "POST",
    body: JSON.stringify({ city }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const { success, data } = await response.json();

  if (!success) {
    throw new Error(data || "Could not fetch data.");
  }

  return data;
}
