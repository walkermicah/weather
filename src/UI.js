import { convertToC, convertToF } from './util';

const city = document.querySelector('.weather-overview-location');
const currentTemp = document.querySelector('.weather-overview-temp');
const description = document.querySelector('.weather-overview-description');
const error = document.querySelector('.error');
const errorText = document.querySelector('.error-notification-text');
const formAlert = document.getElementById('search-form-alert');
const feelsLikeTemp = document.querySelector('.feelslike-temp');
const highTemp = document.querySelector('.high-temp');
const loader = document.querySelector('.loader');
const lowTemp = document.querySelector('.low-temp');
const search = document.querySelector('.search-form');
const searchInput = document.querySelector('.search-form-input');
const tempConversion = document.querySelector('.temp-conversion');
const time = document.querySelector('.time');
const weather = document.querySelector('.weather');
const tempC = document.querySelector('.temp-conversion-c');
const tempF = document.querySelector('.temp-conversion-f');

const Converter = require('node-temperature-converter');

let active = 'c';

// Add weather data to weather screen
const showWeatherData = (weatherData) => {
  console.log(weatherData);
  city.textContent = weatherData.name.toUpperCase();
  description.textContent = weatherData.weather[0].main.toUpperCase();

  if (active === 'c') {
    currentTemp.textContent = `${Math.round(weatherData.main.temp)}°`;
    highTemp.textContent = `${Math.round(weatherData.main.temp_max)}°`;
    lowTemp.textContent = `${Math.round(weatherData.main.temp_min)}°`;
    feelsLikeTemp.textContent = `${Math.round(weatherData.main.feels_like)}°`;
  }

  if (active === 'f') {
    currentTemp.textContent = `${Math.round(
      new Converter.Celsius(Number(weatherData.main.temp)).toFahrenheit()
    )}°`;
    highTemp.textContent = `${Math.round(
      new Converter.Celsius(Number(weatherData.main.temp_max)).toFahrenheit()
    )}°`;
    lowTemp.textContent = `${Math.round(
      new Converter.Celsius(Number(weatherData.main.temp_min)).toFahrenheit()
    )}°`;
    feelsLikeTemp.textContent = `${Math.round(
      new Converter.Celsius(Number(weatherData.main.feels_like)).toFahrenheit()
    )}°`;
  }
};

// Show weather screen
const showWeatherScreen = (weatherData) => {
  weather.classList.remove('hidden');
  error.classList.add('hidden');
  loader.classList.add('hidden');
  search.classList.remove('invisible');
  tempConversion.classList.remove('invisible');
  time.classList.remove('invisible');

  showWeatherData(weatherData);
};

const showConvertedTemps = (e) => {
  const tempsToConvert = [currentTemp, feelsLikeTemp, highTemp, lowTemp];
  // convert to C
  if (e.target.classList.contains('temp-conversion-c') && active !== 'c') {
    const convertedTemps = convertToC(tempsToConvert);
    [
      currentTemp.textContent,
      feelsLikeTemp.textContent,
      highTemp.textContent,
      lowTemp.textContent,
    ] = convertedTemps;
    active = 'c';
    tempC.classList.add('temp-conversion-active');
    tempF.classList.remove('temp-conversion-active');
  }
  // convert to F
  if (e.target.classList.contains('temp-conversion-f') && active !== 'f') {
    const convertedTemps = convertToF(tempsToConvert);
    [
      currentTemp.textContent,
      feelsLikeTemp.textContent,
      highTemp.textContent,
      lowTemp.textContent,
    ] = convertedTemps;
    active = 'f';
    tempF.classList.add('temp-conversion-active');
    tempC.classList.remove('temp-conversion-active');
  }
};

// show alerts if form input invalid
const showFormAlert = () => {
  if (searchInput.validity.valueMissing) {
    formAlert.className = 'alert-visible';
    formAlert.textContent = 'Please enter a city!';
  }
  if (searchInput.validity.tooShort) {
    formAlert.className = 'alert-visible';
    formAlert.textContent = 'City name must be longer than 2 letters!';
  }
  if (searchInput.validity.patternMismatch) {
    formAlert.className = 'alert-visible';
    formAlert.textContent = 'City name can only contain letters!';
  }
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
const showErrorScreen = (err) => {
  error.classList.remove('hidden');
  loader.classList.add('hidden');
  weather.classList.add('hidden');
  search.classList.remove('invisible');
  tempConversion.classList.add('invisible');
  time.classList.add('invisible');

  errorText.textContent = err;
};

export {
  showConvertedTemps,
  showWeatherScreen,
  showErrorScreen,
  showLoader,
  showFormAlert,
};
