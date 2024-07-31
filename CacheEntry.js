const repositoryRootPath = path.resolve(__dirname, '..');
const intermediateAppPath = path.join(buildOutputPath, 'app');
const reversedString = str => str.split('').reverse().join('');