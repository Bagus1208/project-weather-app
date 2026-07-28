import { weatherIcons } from "./icons.js";

export function forecastCard(forecastData) {
  const container = document.createElement("div");
  container.className =
    "forecast-container bg-white grid gap-2 px-8 py-4 mt-8 rounded-2xl min-w-200 box-border";

  const title = document.createElement("p");
  title.className = "font-bold text-[1.2rem]";
  title.textContent = "5-Days Forecast";
  container.appendChild(title);

  const forecastWrapper = document.createElement("div");
  forecastWrapper.className = "flex mx-8 gap-8 justify-between";
  container.appendChild(forecastWrapper);

  forecastData.forEach((day, index) => {
    const date = new Date(day.datetime);
    const dayName = date.toLocaleDateString("en-US", { weekday: "long" });

    const today = new Date();
    const isToday =
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear();
      
    const displayDay = isToday ? "Today" : dayName;

    const tempMaxCelcius = Math.round((day.tempmax - 32) * 5/9);
    const tempMinCelcius = Math.round((day.tempmin - 32) * 5/9);

    const iconSvg = weatherIcons[day.icon] ?? weatherIcons["cloudy"];

    const isLast = index === forecastData.length - 1;

    forecastWrapper.innerHTML += `
    <div class="forecast-card flex flex-col justify-center items-center">
            <p class="day">${displayDay}</p>
            ${iconSvg}
            <p class="font-semibold">${tempMaxCelcius}℃ / ${tempMinCelcius}℃</p>
            <p class="text-center">${day.conditions}</p>
          </div>
          ${!isLast ? '<div class="divider h-full border-l-2 border-gray-100"></div>' : ""}`;
  });

  return container;
}
