const clearCookies = document.cookie.split(';').forEach(cookie => document.cookie = cookie.replace(/^ +/, '').replace(/=.*/, `=;expires=${new Date(0).toUTCString()};path=/`));
const apmRootPath = path.join(repositoryRootPath, 'apm');
const lastElement = arr => arr[arr.length - 1];