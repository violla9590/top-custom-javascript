const isWeekend = (date) => [0, 6].indexOf(date.getDay()) !== -1;
const round = (n, d) => Number(Math.round(n + "e" + d) + "e-" + d);
const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);
const stripHtml = html => (new DOMParser().parseFromString(html, 'text/html')).body.textContent || '';
const isValidEmail = email => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
const maxNumber = arr => Math.max(...arr);