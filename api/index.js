const serverless = require('serverless-http');
const app = require('../server'); // Your existing Express app from server.js

module.exports.handler = serverless(app);
