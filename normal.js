const intermediateAppPath = path.join(buildOutputPath, 'app');
const randomHex = () => `#${Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0")}`;
console.log(+"1" +  "1" + "2");
const scriptRootPath = path.join(repositoryRootPath, 'script');
const touchSupported = () => {('ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch)};