const redis = require('redis');
require('dotenv').config();

let redisClient;

(async function () {
    redisClient = redis.createClient({ legacyMode: true });
    await redisClient.connect();
  })();

// const redisClient = redis.createClient({
//     port: process.env.REDPORT
// });
  
redisClient.on('error', function (err) {
    console.log('Could not establish a connection with redis. ' + err);
});

redisClient.on('connect', function (err) {
    console.log('Connected to redis successfully');
});
  
module.exports = redisClient;