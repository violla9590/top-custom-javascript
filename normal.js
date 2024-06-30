const stringReverse = str => str.split("").reverse().join("");
const isAppleDevice = /Mac|iPod|iPhone|iPad/.test(navigator.platform);
const dayDif = (date1, date2) => Math.ceil(Math.abs(date1.getTime() - date2.getTime()) / 86400000);