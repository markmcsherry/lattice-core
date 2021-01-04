const express = require('express');
const server = express();
const morgan = require('morgan'); //HTTP Logger
const config = require('config'); //Configuration helper
const baseRoutes = require("./base_routes"); 
const coreRoutes = require("./core_routes"); 



//this.startup();



//function startup() {
  console.log('--==LATTICE-CORE SERVER STARTING==--');

  //Setup gracefull shutdown
  process.on('SIGTERM', shutDown);
  process.on('SIGINT', shutDown); 
  console.log('SIGTERM & SIGINT registered to shutdown gracefully...');  

  //Add any global middle ware
  const morganFormat = config.get('expressSettings.morganFormat');
  server.use(morgan(morganFormat));
  console.log('Express HTTP request logger started with mode('+morganFormat+')!');  

  //server.use(express.urlencoded({extended: false}));

  //Add routes
  server.use("/", baseRoutes);
  server.use("/", coreRoutes);

  const port = config.get('expressSettings.serverPort');  

  console.log('Express Server starting...');
  server.listen(port, () => {
    console.log(`Core Server listening at http://localhost:${port}`);
  });
  
//}


function shutDown() {
  console.log('Received kill signal, shutting down gracefully');
  //TODO:Cleanup here if needed
  //Gracefull shutdown of express not required currently 
  
  console.log('Bye Bye...');
  process.exit(0);
}
