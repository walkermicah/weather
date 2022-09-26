import './style.scss';
import * as UI from './UI';

const formAlert = document.getElementById('search-form-alert');
const searchBtn = document.querySelector('.search-form-btn');
const searchForm = document.querySelector('.search-form');
const searchInput = document.querySelector('.search-form-input');
const tempConversion = document.querySelector('.temp-conversion');

// Get weather data from location entered in search
const getWeatherByCity = async (city) => {
  try {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=1204b8924e1c5f7eee3168caa29549a6&units=metric`,
      { mode: 'cors' }
    );
    const weatherData = await response.json();
    return weatherData;
  } catch (err) {
    UI.showErrorScreen(
      `Could not find weather data for "${city}." Try searching again.`
    );
  }
};

// When user searches for a location: validate input,
// get data for that location and display it
const weatherSearch = async (e) => {
  e.preventDefault();
  if (!searchInput.checkValidity()) {
    UI.showFormAlert();
    return;
  }
  formAlert.className = 'invisible';
  const city = searchInput.value;
  const weatherData = await getWeatherByCity(city);
  if (weatherData.cod === '404') {
    UI.showErrorScreen(
      `Could not find weather data for "${city}." Try searching again.`
    );
  } else {
    console.log(weatherData);
    UI.showWeatherScreen(weatherData);
  }
  searchForm.reset();
};

// Get user's geocoordinates on initialization
const getCoords = async () => {
  const position = await new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, () => {
      reject("Can't get your location.\r\nTry searching for a city.\r\n");
    });
  });

  const { latitude, longitude } = position.coords;
  return [latitude, longitude];
};

// Get weather data from user's coordinates
const getWeatherByCoords = async (coords) => {
  try {
    const [latitude, longitude] = coords;
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=1204b8924e1c5f7eee3168caa29549a6&units=metric`,
      { mode: 'cors' }
    );
    const weatherData = await response.json();
    return weatherData;
  } catch (err) {
    UI.showErrorScreen(
      'Could not get weather data for your location.\nTry searching for a city.'
    );
  }
};

// Initialize the app:
// Get user coordinates, get weather data for user's location, show weather data and activate search function
const init = async () => {
  UI.showLoader();
  const coords = await getCoords().catch((err) => {
    UI.showErrorScreen(err);
  });
  if (coords) {
    const weatherData = await getWeatherByCoords(coords);
    if (weatherData) {
      UI.showWeatherScreen(weatherData);
    }
  }
  searchBtn.addEventListener('click', weatherSearch);
  tempConversion.addEventListener('click', (e) => {
    UI.showConvertedTemps(e);
  });
};

init();
