# Weather App



Welcome to my Weather App mockup design! This is an initial concept for a weather application that aims to provide users with convenient access to weather information. Please note that this is a work in progress, and I will be adding more features to enhance the user experience and provide additional weather data.

## Preview
### Desktop View 
<a href="https://ibb.co/wBf5k7W"><img src="https://i.ibb.co/7jqsfQW/Screenshot-2023-05-24-at-00-20-22.png" alt="Screenshot-2023-05-24-at-00-20-22" border="0"></a><br /><a target='_blank' href='https://imgbb.com/'>upload photos to internet</a><br />

## Mobile view
<a href="https://ibb.co/6FkhVcG"><img src="https://i.ibb.co/XtqBNf6/Screenshot-2023-05-24-at-00-20-55.png" alt="Screenshot-2023-05-24-at-00-20-55" border="0"></a><br /><a target='_blank' href='https://imgbb.com/'>i want to upload my photo on facebook</a><br />

This is a simple weather application that allows users to get weather information for different cities. It utilizes an online weather data API to fetch real-time weather data and provides a user-friendly interface for displaying the weather details.

## Features

- Search for weather information by city name
- Display current weather conditions, including temperature, weather description, and icon
- Show daily and weekly weather forecast with icons representing different weather conditions
- Responsive design for seamless usage on various devices

## Technologies Used

- HTML
- CSS
- JavaScript
- Weather Data API


## Directory Structure

- `client`: This directory serves as the root of the client-side application.

  - `public`: This directory contains static assets and the HTML file that serves as the entry point for the application.

  - `src`: This directory contains the source code of the application.

    - `api`: This directory contains modules related to API interactions.

      - `api.js`: This module provides functions for making API requests.

      - `fetchApi.js`: This module handles the fetching of data from the API.

      - `updateWeatherDisplay.js`: This module updates the weather display based on the retrieved data.

    - `pages`: This directory contains different page components of the application.

      - `currentInfoPage.js`: This component displays the current weather information.

      - `homePage.js`: This component serves as the home page of the application.

      - `hourlyPages.js`: This component displays the weather forecast for the next few hours.

      - `weeklyPages.js`: This component displays the weekly weather forecast.

    - `views`: This directory contains view components used by the page components.

      - `homeView.js`: This component represents the view for the home page.

    - `app.js`: This file is the main entry point of the application, responsible for rendering the different pages.

    - `constants.js`: This file contains constant values used throughout the application.

    - `integration`: This directory contains integration-related modules.

- `index.js`: This file is the entry point for the application and is responsible for rendering the root component.



