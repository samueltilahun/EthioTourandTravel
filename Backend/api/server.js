const serverless = require('serverless-http');
const app = require('../server'); // Adjust the path as necessary

module.exports.handler = serverless(app);
