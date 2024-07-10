console.log("1 || 2 = "+(1 || 2));
const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf());