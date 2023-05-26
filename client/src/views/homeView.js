import {
  SEARCH_BUTTON_ID,
  USER_INPUT_CITY_ID,
  CITY_NAME_ID,
  CURRENT_TEMP_ID,
  WEATHER_ICON_ID,
  CURRENT_UPDATE_ID,
  TYPE_ERROR_ID,
  HOURLY_WEATHER_BUTTON_ID,
  WEEKLY_WEATHER_BUTTON_ID,
} from "../constants.js";

/**
 * Create the welcome screen
 * @returns {Element}
 */

export const createHeaderElement = () => {
  const element = Object.assign(document.createElement("div"), {
    className: "header-info",
  });
  element.innerHTML = String.raw`

  <h1 class="logo">Clear<span class="material-symbols-outlined">
  partly_cloudy_day
  </span>Sky</h1>
  <div>
  <button class="weekly-button" id="${WEEKLY_WEATHER_BUTTON_ID}">Weekly</button>
  <button id="${HOURLY_WEATHER_BUTTON_ID}">Hourly</button>
</div>
  `;

  return element;
};

export const createMainElement = () => {
  const element = Object.assign(document.createElement("div"), {});
  element.innerHTML = String.raw`
<section class='temp-input-icon'>
    <div class="input-error-element">
        <form id="weatherForm">
              <input type="text"
                id="${USER_INPUT_CITY_ID}"
                placeholder="Enter city name"
                required
              />
              <button id='${SEARCH_BUTTON_ID}' type="submit">
                <span class="material-symbols-outlined"> my_location </span>
              </button>
            
        </form>
          <!-- type-error -->
          <div id="${TYPE_ERROR_ID}"></div>
    </div>  
            <!--  -->
            <div class="temp-icon">
                  <h2 id="${CURRENT_TEMP_ID}"></h2>
              <div>
                  <img id="${WEATHER_ICON_ID}" src="" alt="" />
              </div>
           </div>
</section>
      <div class='city-time-info'>
        <div class="city-name-location">
          <div class='location'>
            <span class="material-symbols-outlined"> location_on </span>
          </div>
          <h2 id="${CITY_NAME_ID}"></h2>
        </div>
        <div class='current-update' id="${CURRENT_UPDATE_ID}"></h4>
        </div>
      </div>
    
  `;

  return element;
};
