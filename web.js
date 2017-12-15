const express = require('express'); 
const app = express();

require('./routes/contractRoutes.js')(app);

const port = (process.env.PORT || 8000);

const server = app.listen(port, function() {
  console.log('Listening at http://localhost:' + port); 
}); 
