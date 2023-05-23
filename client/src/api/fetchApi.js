export async function fetchWeatherData(userInputCity) {
    const url = `https://api.weatherapi.com/v1/forecast.json?key=22360496e1da49f1b5f91907231905&days=8&aqi=no&alerts=no&q=${userInputCity}`;
  
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        throw new Error(
          "Error fetching weather data. Response status: " + response.status
        );
      }
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  }
