var regexp  = new RegExp('{{([^}]+)}}', 'g');
const results = await Promise.all(resultingPromises);
const channelName = getChannelName(channel);