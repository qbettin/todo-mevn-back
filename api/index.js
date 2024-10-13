const app = require('../server'); // Import the main app
const serverless = require('serverless-http'); // Import serverless-http

module.exports.handler = serverless(app); // Export the handler for Vercel
