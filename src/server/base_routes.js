// Base routes
const express = require('express');
const routes = express();

routes.get('/test', (req, res) => {
  res.status(200);
  res.send('Hello World!');
});

routes.get('/', (req, res) => {
  res.status(200);
  res.send('Not Implemented');
});

module.exports = routes;

