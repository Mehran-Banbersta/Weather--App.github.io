import { USER_CURRENT_WEATHER_INFO_ID } from "../constants.js";

export async function currentInfoWeather(currentInfo) {
  const currentWeatherInfo = document.getElementById(
    USER_CURRENT_WEATHER_INFO_ID
  );
  currentWeatherInfo.innerHTML = "";

  const ulElement = document.createElement("ul");
  ulElement.classList.add('ul-element-current-weather')

  currentInfo.forEach((item) => {
    const { humidity, feelslike_c, uv, wind_kph, condition } = item.current;

    // Humidity
    const humidityLi = document.createElement("li");
    humidityLi.classList.add('li-element-current-weather')
    humidityLi.textContent = `Humidity: ${humidity}%`;
    ulElement.appendChild(humidityLi);

    // Feels like temperature
    const feelsLikeLi = document.createElement("li");
    feelsLikeLi.classList.add('li-element-current-weather')
    feelsLikeLi.textContent = `Feels Like: ${feelslike_c}°C`;
    ulElement.appendChild(feelsLikeLi);

    // UV index
    const uvIndexLi = document.createElement("li");
    uvIndexLi.classList.add('li-element-current-weather')
    uvIndexLi.textContent = `UV Index: ${uv}`;
    ulElement.appendChild(uvIndexLi);

    // Wind speed
    const windSpeedLi = document.createElement("li");
    windSpeedLi.classList.add('li-element-current-weather')
    windSpeedLi.textContent = `Wind Speed: ${wind_kph} km/h`;
    ulElement.appendChild(windSpeedLi);

    // Condition text
    const conditionLi = document.createElement("li");
    conditionLi.classList.add('li-element-current-weather')
    conditionLi.textContent = `Condition: ${condition.text}`;
    ulElement.appendChild(conditionLi);
  });

  currentWeatherInfo.appendChild(ulElement);
}
