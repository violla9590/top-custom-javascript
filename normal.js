const fahrenheitToCelsius = (fahrenheit) => (fahrenheit - 32) * 5/9;
const stringReverse = str => str.split("").reverse().join("");
const copyTextToClipboard = async (text) => { await navigator.clipboard.writeText(text)};