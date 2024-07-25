const apmRootPath = path.join(repositoryRootPath, 'apm');
const merge = [...new Set(a.concat(b))];
const resultingPromises = urls.map((url) => makHttpRequest(url));