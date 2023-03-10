const BunnyStorage = require('bunnycdn-storage').default;
const bunnyStorage = new BunnyStorage('API-KEY', 'coffereviews');
 
 
// list all files in zone / path
// const files = await bunnyStorage.list();
// const filesInDir = await bunnyStorage.list('/images');
 
// upload a file from buffer or filename
bunnyStorage.upload('images/cennik-strony-WWW.png');
// bunnyStorage.upload(fs.readFileSync('/tmp/bunny.jpg'), 'bunny.jpg')
 
// download a file from the servers
// bunnyStorage.download('bunny.jpg'); // Buffer (default)
// bunnyStorage.download('bunny.jpg', 'arraybuffer'); // Buffer
// bunnyStorage.download('bunny.jpg', 'stream'); // ReadableStream
 
// delete a file
// bunnyStorage.delete('bunny.jpg');