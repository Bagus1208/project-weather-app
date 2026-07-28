export function errorCard() {
  const container = document.createElement("div");
  container.className =
    "error-container bg-white flex justify-center items-center gap-4 p-8 mt-8 rounded-2xl min-w-200 box-border";

  const errorIcon = document.createElement("span");
  errorIcon.className = "error-icon text-red-500 text-[2rem]";
  errorIcon.textContent = "⚠️";
  container.appendChild(errorIcon);

  const errorText = document.createElement("p");
  errorText.className = "error-text text-red-500 font-semibold";
  errorText.textContent = "Failed to fetch weather data. Please check the city name and try again.";
  container.appendChild(errorText);

  return container;
}