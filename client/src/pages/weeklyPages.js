import { USER_WEEKLY_WEATHER_INTERFACE_ID } from "../constants.js";

export async function updateWeeklyWeather(forecastData) {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const weeklyWeatherContainer = document.getElementById(
    USER_WEEKLY_WEATHER_INTERFACE_ID
  );
  weeklyWeatherContainer.textContent = "";

  await Promise.all(
    forecastData.map(async (dayData) => {
      const dayOfWeek = new Date(dayData.date).getDay();
      const dayContainer = document.createElement("div");
      dayContainer.classList.add("day-container");

      const dayOfWeekEl = document.createElement("div");
      dayOfWeekEl.textContent = daysOfWeek[dayOfWeek];
      dayOfWeekEl.classList.add("day-of-week");
      dayContainer.appendChild(dayOfWeekEl);


      const weatherIconEl = document.createElement("img");
      weatherIconEl.src = `https:${dayData.day.condition.icon}`;
      weatherIconEl.alt = "Weather Icon";
      dayContainer.appendChild(weatherIconEl);

      const cityNameEl = document.createElement("div");
      cityNameEl.textContent = `Rain ${dayData.day.daily_chance_of_rain} mm`;
      cityNameEl.classList.add("city-name");
      dayContainer.appendChild(cityNameEl);

      const highTemperatureEl = document.createElement("div");
      highTemperatureEl.textContent = `High ${dayData.day.maxtemp_c}°`;
      highTemperatureEl.classList.add("high-temperature");
      dayContainer.appendChild(highTemperatureEl);

      const lowTemperatureEl = document.createElement("div");
      lowTemperatureEl.textContent = `Low ${dayData.day.mintemp_c}°`;
      lowTemperatureEl.classList.add("low-temperature");
      dayContainer.appendChild(lowTemperatureEl);

      weeklyWeatherContainer.appendChild(dayContainer);
    })
  );
}
