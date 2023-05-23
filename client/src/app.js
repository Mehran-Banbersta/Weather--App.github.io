// import {   initFetchWeatherData } from './api.js';
import { initHomePage, initHeaderPage } from "./pages/homePages.js";
import { initApi } from "./api/api.js";

const loadApp = () => {
  const defaultCity = "Breda";
  // initFetchWeatherData(userInputCity)
  initHomePage();
  initApi(defaultCity);
  initHeaderPage()
};

window.addEventListener("load", loadApp);
