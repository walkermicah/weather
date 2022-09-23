const weather = document.querySelector('.weather');
const error = document.querySelector('.error');
const errorText = document.querySelector('.error-notification-text');
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
const displayError = (err) => {
  error.classList.remove('hidden');
  loader.classList.add('hidden');
  weather.classList.add('hidden');
  search.classList.remove('invisible');
  tempConversion.classList.add('invisible');
  time.classList.add('invisible');

  errorText.textContent = err;
};

export { displayWeather, displayError, showLoader };
