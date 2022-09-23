const city = document.querySelector('.weather-overview-location');
const currentTemp = document.querySelector('.weather-overview-temp');
const description = document.querySelector('.weather-overview-description');
const error = document.querySelector('.error');
const errorText = document.querySelector('.error-notification-text');
const feelsLikeTemp = document.querySelector('.feelslike-temp');
const highTemp = document.querySelector('.high-temp');
const loader = document.querySelector('.loader');
const lowTemp = document.querySelector('.low-temp');
const search = document.querySelector('.search-form');
const tempConversion = document.querySelector('.temp-conversion');
const time = document.querySelector('.time');
const weather = document.querySelector('.weather');

// Add weather data to weather screen
const showWeatherData = (weatherData) => {
  console.log(weatherData);
  city.textContent = weatherData.name.toUpperCase();
  description.textContent = weatherData.weather[0].main.toUpperCase();
  currentTemp.textContent = `${Math.floor(weatherData.main.temp)}°`;
  highTemp.textContent = `${Math.floor(weatherData.main.temp_max)}°`;
  lowTemp.textContent = `${Math.floor(weatherData.main.temp_min)}°`;
  feelsLikeTemp.textContent = `${Math.floor(weatherData.main.feels_like)}°`;
};

// Show weather screen
const displayWeatherScreen = (weatherData) => {
  weather.classList.remove('hidden');
  error.classList.add('hidden');
  loader.classList.add('hidden');
  search.classList.remove('invisible');
  tempConversion.classList.remove('invisible');
  time.classList.remove('invisible');

  showWeatherData(weatherData);
};

const displayConvertedTemps = (temps) => {
  [
    currentTemp.textContent,
    feelsLikeTemp.textContent,
    highTemp.textContent,
    lowTemp.textContent,
  ] = temps;
};

// Show loader while waiting for location and weather data
const showLoader = () => {
  loader.classList.remove('hidden');
  error.classList.add('hidden');
  weather.classList.add('hidden');
  search.classList.add('invisible');
  tempConversion.classList.add('invisible');
  time.classList.add('invisible');
};

// Display errors
const displayErrorScreen = (err) => {
  error.classList.remove('hidden');
  loader.classList.add('hidden');
  weather.classList.add('hidden');
  search.classList.remove('invisible');
  tempConversion.classList.add('invisible');
  time.classList.add('invisible');

  errorText.textContent = err;
};

export {
  displayConvertedTemps,
  displayWeatherScreen,
  displayErrorScreen,
  showLoader,
};
