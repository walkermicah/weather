import './style.scss';

const searchForm = document.querySelector('.search-form');
const searchInput = document.querySelector('.search-form-input');
const searchBtn = document.querySelector('.search-form-btn');

// Get user's geocoordinates on initialization
const getCoords = async () => {
  const position = await new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, (err) => {
      reject(`Cannot get your location [${err.message}]`);
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
    console.log(
      `Could not get weather data for your location [${err.message}]`
    );
    return err;
  }
};

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
    console.log(
      `Could not get weather data for your location [${err.message}]`
    );
    return err;
  }
};

// When user searches for a location:
// validate input, get data for that location and display it
const weatherSearch = async (e) => {
  e.preventDefault();
  const city = searchInput.value;
  const weatherData = await getWeatherByCity(city);
  console.log(weatherData);
  searchForm.reset();
};

// Initialize the app:
// Get user coordinates, get weather data for user's location, show weather data and activate search function
const init = async () => {
  const coords = await getCoords().catch((err) => console.log(err));
  const weatherData = await getWeatherByCoords(coords);
  console.log(weatherData);
  searchBtn.addEventListener('click', weatherSearch);
};

init();
