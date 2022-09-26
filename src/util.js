// TEMPERATURE CONVERSION
const Converter = require('node-temperature-converter');

const convertToC = (tempsToConvert) =>
  tempsToConvert.map(
    (temp) =>
      `${Math.floor(
        new Converter.Fahrenheit(
          Number(temp.textContent.slice(0, -1))
        ).toCelsius()
      )}°`
  );

const convertToF = (tempsToConvert) =>
  tempsToConvert.map(
    (temp) =>
      `${Math.floor(
        new Converter.Celsius(
          Number(temp.textContent.slice(0, -1))
        ).toFahrenheit()
      )}°`
  );

export { convertToC, convertToF };
