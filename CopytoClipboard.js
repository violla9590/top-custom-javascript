const dayDif = (date1, date2) => Math.ceil(Math.abs(date1.getTime() - date2.getTime()) / 86400000);
const copyTextToClipboard = async (text) => { await navigator.clipboard.writeText(text)};
const uniqueArr = (arr) => [...new Set(arr)];