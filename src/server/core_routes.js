const express = require('express');
const routes = express();




routes.get('/api/user/:id', (req,res) =>{
  if(req.params.id == '1'){
    res.status(200).json({ user: 'silly sid' });
  }else   if(req.params.id == '2'){
    res.status(200).json({ user: 'faboulous fred' });
  }else{
    res.status(404).json({ error: 'not found' });
  }

});

module.exports = routes;

