const isWeekend = (date) => [0, 6].indexOf(date.getDay()) !== -1;
const merge = (a, b) => a.concat(b);
const touchSupported = () => {('ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch)};