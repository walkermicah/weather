const displayWeather = (weatherData) => {
  // descriptions:
  //clear sky: clear-day, clear-night
  //few clouds, scattered clouds, broken clouds: cloud-day, cloud-night
  //shower rain, rain //rain-day, rain-night
  //thunderstorm //thunder
  //snow //snow-day, snow-night
  //mist //mist

  console.log('--Display weather--', weatherData);
};

const showLocationError = (error) => {
  console.log(error);
};
