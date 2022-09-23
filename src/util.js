/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
import { displayConvertedTemps } from './UI';

// TEMPERATURE CONVERSION
const currentTemp = document.querySelector('.weather-overview-temp');
const feelsLikeTemp = document.querySelector('.feelslike-temp');
const highTemp = document.querySelector('.high-temp');
const lowTemp = document.querySelector('.low-temp');
const tempC = document.querySelector('.temp-conversion-c');
const tempF = document.querySelector('.temp-conversion-f');

let active = 'c';

const convertTemp = (e) => {
  const tempsToConvert = [currentTemp, feelsLikeTemp, highTemp, lowTemp];
  // convert to C
  if (e.target.classList.contains('temp-conversion-c') && active !== 'c') {
    const convertedTemps = tempsToConvert.map(
      (temp) =>
        `${Math.floor((Number(temp.textContent.slice(0, -1)) - 32) * (5 / 9))}°`
    );
    displayConvertedTemps(convertedTemps);
    active = 'c';
    tempC.classList.add('temp-conversion-active');
    tempF.classList.remove('temp-conversion-active');
  }
  // convert to F
  if (e.target.classList.contains('temp-conversion-f') && active !== 'f') {
    const convertedTemps = tempsToConvert.map(
      (temp) =>
        `${Math.floor(Number(temp.textContent.slice(0, -1)) * (9 / 5) + 32)}°`
    );
    displayConvertedTemps(convertedTemps);
    active = 'f';
    tempF.classList.add('temp-conversion-active');
    tempC.classList.remove('temp-conversion-active');
  }
};

export { convertTemp };
