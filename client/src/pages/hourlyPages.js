import { USER_HOURLY_WEATHER_INTERFACE_ID } from "../constants.js";

export async function displayHourlyWeather(hourlyForecast) {
  const hourlyWeatherContainer = document.getElementById(
    USER_HOURLY_WEATHER_INTERFACE_ID
  );
  hourlyWeatherContainer.textContent = "";

  for (const hourData of hourlyForecast) {
    await new Promise((resolve) => setTimeout(resolve, 100));

    const time = new Date(hourData.time).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
    const temperature = `${hourData.temp_c}°C`;
    const weatherIcon = hourData.condition.icon;

    // Create elements to display hourly weather
    const hourContainer = document.createElement("div");
    hourContainer.classList.add("hour-container");

    const timeEl = document.createElement("div");
    timeEl.textContent = time;
    timeEl.classList.add("hour-time");
    hourContainer.appendChild(timeEl);

    const weatherIconEl = document.createElement("img");
    weatherIconEl.classList.add("weather-icon");
    weatherIconEl.src = `https:${weatherIcon}`;
    weatherIconEl.alt = "Weather Icon";
    hourContainer.appendChild(weatherIconEl);

    const temperatureEl = document.createElement("div");
    temperatureEl.textContent = temperature;
    temperatureEl.classList.add("hour-temperature");
    hourContainer.appendChild(temperatureEl);

    hourlyWeatherContainer.appendChild(hourContainer);
  }
}
