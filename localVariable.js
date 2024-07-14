const celsiusToFahrenheit = (celsius) => celsius * 9/5 + 32;
const randomBoolean = () => Math.random() >= 0.5;
const cookie = name => `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();