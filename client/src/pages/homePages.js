import {
  USER_MAIN_INTERFACE_ID,
  SEARCH_BUTTON_ID,
  USER_INPUT_CITY_ID,
  HOURLY_WEATHER_BUTTON_ID,
  USER_HEADER_INTERFACE_ID,
  USER_HOURLY_WEATHER_INTERFACE_ID,
  USER_WEEKLY_WEATHER_INTERFACE_ID,
  WEEKLY_WEATHER_BUTTON_ID,
} from "../constants.js";
import { createMainElement, createHeaderElement } from "../views/homeView.js";
import { initApi } from "../api/api.js";

export const initHeaderPage = () => {
  const userHeaderInterface = document.getElementById(USER_HEADER_INTERFACE_ID);
  userHeaderInterface.innerHTML = "";

  const headerElement = createHeaderElement();
  userHeaderInterface.appendChild(headerElement);

  document
    .getElementById(HOURLY_WEATHER_BUTTON_ID)
    .addEventListener("click", displayHourlyWeather);

  document
    .getElementById(WEEKLY_WEATHER_BUTTON_ID)
    .addEventListener("click", displayWeeklyWeather);
};

const userHourlyWeatherDisplay = document.getElementById(
  USER_HOURLY_WEATHER_INTERFACE_ID
);
userHourlyWeatherDisplay.style.display = "none";

const displayHourlyWeather = () => {
  const userHourlyWeatherDisplay = document.getElementById(
    USER_HOURLY_WEATHER_INTERFACE_ID
  );

  if (userHourlyWeatherDisplay.style.display === "none") {
    userHourlyWeatherDisplay.style.display = "block";
   
  } else {
    userHourlyWeatherDisplay.style.display = "none";
    }
};


const displayWeeklyWeather = () => {
  const userWeeklyWeatherDisplay = document.getElementById(
    USER_WEEKLY_WEATHER_INTERFACE_ID
  );

  if (userWeeklyWeatherDisplay.style.display === "none") {
    userWeeklyWeatherDisplay.style.display = "block";
  } else {
    userWeeklyWeatherDisplay.style.display = "none";
  }
};
//

export const initHomePage = () => {
  const userMainInterface = document.getElementById(USER_MAIN_INTERFACE_ID);
  userMainInterface.innerHTML = "";
  const mainElement = createMainElement();
  userMainInterface.appendChild(mainElement);

  document
    .getElementById(SEARCH_BUTTON_ID)
    .addEventListener("click", startSearch);
};

const startSearch = () => {
  event.preventDefault();
  const userInputCity = document
    .getElementById(USER_INPUT_CITY_ID)
    .value.trim();
  initApi(userInputCity);

};
