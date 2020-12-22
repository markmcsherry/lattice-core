//const express = require('express');
//const server = express();
const core_server = require("./core_routes"); 
const port = 8080;

core_server.listen(port, () => {
  console.log(`Core Server listening at http://localhost:${port}`);
});
