const app = document.querySelector('.app');
const weather = document.querySelector('.weather');
const error = document.querySelector('.error');
const loader = document.querySelector('.loader');
const time = document.querySelector('.time');
const search = document.querySelector('.search-form');
const tempConversion = document.querySelector('.temp-conversion');

// Show weather display
const displayWeather = () => {
  weather.classList.remove('hidden');
  error.classList.add('hidden');
  loader.classList.add('hidden');
  search.classList.remove('invisible');
  tempConversion.classList.remove('invisible');
  time.classList.remove('invisible');
  app.classList.add('clear-day');
};

// Show loader while waiting for location and weather data
const showLoader = () => {
  loader.classList.remove('hidden');
  error.classList.add('hidden');
  weather.classList.add('hidden');
  search.classList.add('invisible');
  tempConversion.classList.add('invisible');
  time.classList.add('invisible');
  app.classList.add('background');
};

// Display errors
const displayError = () => {
  error.classList.remove('hidden');
  loader.classList.add('hidden');
  weather.classList.add('hidden');
  search.classList.remove('invisible');
  tempConversion.classList.add('invisible');
  time.classList.add('invisible');
  app.classList.add('background');
};

export { displayWeather, displayError, showLoader };
