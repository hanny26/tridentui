const express = require('express');
const bodyParser = require('body-parser');  
const cors = require('cors');

const connectDB = require('./db/db');

const app = express();


connectDB().then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port: ${PORT}`);
    });
  });