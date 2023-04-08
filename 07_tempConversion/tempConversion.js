const convertToCelsius = function (far) {
  let celci = (far - 32) * (5 / 9);
  return Math.round(celci * 10) / 10;
};

const convertToFahrenheit = function (cel) {
  let farren = cel * (9 / 5) + 32;
  return Math.round(farren * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
