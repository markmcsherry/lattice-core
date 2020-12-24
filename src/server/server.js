//const express = require('express');
//const server = express();
const morgan = require('morgan'); //HTTP Logger
const config = require('config'); //Configuration helper
const server = require("./core_routes"); 


//this.startup();



//function startup() {
  console.log('--==LATTICE-CORE SERVER STARTING==--');

  //Setup gracefull shutdown
  process.on('SIGTERM', shutDown);
  process.on('SIGINT', shutDown); 
  console.log('SIGTERM & SIGINT registered to shutdown gracefully...');  

  const morganFormat = config.get('expressSettings.morganFormat');
  server.use(morgan(morganFormat));
  console.log('Express HTTP request logger started with mode('+morganFormat+')!');  

  const port = config.get('expressSettings.serverPort');  

  console.log('Express Server starting...');
  server.listen(port, () => {
    console.log(`Core Server listening at http://localhost:${port}`);
  });
  
//}


console.log('SIGTERM & SIGINT registered to shutdown gracefully...');
function shutDown() {
  console.log('Received kill signal, shutting down gracefully');
  //TODO:Cleanup here if needed
  //Gracefull shutdown of express not required currently 
  
  console.log('Bye Bye...');
  process.exit(0);
}
