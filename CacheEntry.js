const dayOfYear = (date) => Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
const fullName = name || 'buddy';
const isEven = (num) => num % 2 === 0;
console.log("0 && 1 = "+(0 && 1));
const isEmptyObject = obj => Object.keys(obj).length === 0;