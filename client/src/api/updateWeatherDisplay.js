import {
  CITY_NAME_ID,
  CURRENT_TEMP_ID,
  WEATHER_ICON_ID,
  CURRENT_UPDATE_ID,
} from "../constants.js";

export function updateWeatherDisplay(
  cityName,
  currentTemp,
  weatherIcon,
  weatherDate
) {
  const cityNameEl = document.getElementById(CITY_NAME_ID);
  const currentTempEl = document.getElementById(CURRENT_TEMP_ID);
  const weatherIconEl = document.getElementById(WEATHER_ICON_ID); 
  const weatherDateEl = document.getElementById(CURRENT_UPDATE_ID);

  cityNameEl.textContent = cityName;
  currentTempEl.textContent = currentTemp;
  weatherDateEl.textContent = weatherDate;
  // Set the weather icon
  weatherIconEl.src = `https:${weatherIcon}`;
  weatherIconEl.alt = "Weather Icon";
}
