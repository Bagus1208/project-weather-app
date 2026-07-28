import "./style.css";
import { weatherCard } from "./components/weather-card.js";
import { forecastCard } from "./components/forecast-card.js";
import { errorCard } from "./components/error-card.js";

const content = document.querySelector(".content");
const inputCity = document.querySelector("#city");
const searchButton = document.querySelector("#searchBtn");
const weather = document.querySelector(".weather");

const API_KEY = process.env.WEATHER_API_KEY;
const BASE_URL = process.env.WEATHER_BASE_URL;

async function fetchWeatherData(city) {
  try {
    const response = await fetch(`${BASE_URL}/${city}?key=${API_KEY}`);
    const data = await response.json();
    return data;
  } catch (error) {
    const errorCardElement = errorCard();
    weather.appendChild(errorCardElement);
  }
}

async function handleSearch() {
  weather.innerHTML = ""; 

  const city = inputCity.value.trim();
  if (city) {
    const weatherData = await fetchWeatherData(city);
    if (weatherData) {
      const weatherCardElement = weatherCard(weatherData);
      const forecastCardElement = forecastCard(weatherData.days.slice(0, 5));

      weather.appendChild(weatherCardElement);
      weather.appendChild(forecastCardElement);
    }
  }
}

searchButton.addEventListener("click", handleSearch);

inputCity.addEventListener("keypress", async (event) => {
  if (event.key === "Enter") {
    handleSearch();
  }
});
