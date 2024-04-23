const isArray = (arr) => Array.isArray(arr);
const sumArray = arr => arr.reduce((total, current) => total + current, 0);
console.log((function f(n){return ((n > 1) ? n * f(n-1) : n)})(10));
const result = await makeHttpRequest(url);
console.log("1 || 2 = "+(1 || 2));