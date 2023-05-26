import { fetchWeatherData } from "./fetchApi.js";
import { updateWeatherDisplay } from "./updateWeatherDisplay.js";
import { updateWeeklyWeather } from "../pages/weeklyPages.js";
import { displayHourlyWeather } from "../pages/hourlyPages.js";
import { currentInfoWeather } from "../pages/currentInfoPAge.js";

export async function initApi(userInputCity) {
  try {
    const data = await fetchWeatherData(userInputCity);
    console.log("API Response:", data);

    if (
      data &&
      data.current &&
      data.location &&
      data.forecast &&
      data.forecast.forecastday
    ) {
      const currentTemp = `${data.current.temp_c}°`;
      const cityName = data.location.name;
      const weatherIcon = data.current.condition.icon;
      const weatherDate = `Last updated: ${data.current.last_updated}`;

      updateWeatherDisplay(cityName, currentTemp, weatherIcon, weatherDate);
      const typeError = document.getElementById("type-error");
      typeError.textContent = "";

      updateWeeklyWeather(data.forecast.forecastday);
      const hourlyForecast = data.forecast.forecastday[0].hour;
      displayHourlyWeather(hourlyForecast);
      const currentInfo = [data];
      currentInfoWeather(currentInfo);
    } else {
      const typeError = document.getElementById("type-error");
      const pEl = document.createElement("p");
      typeError.appendChild(pEl);
      pEl.textContent = "Please enter a valid city name.";
    }
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
}
