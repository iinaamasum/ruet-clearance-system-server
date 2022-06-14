const express = require('express');
const cors = require('cors');
require('dotenv').config();

const port = process.env.PORT || 5000;
const app = express();

//middle_ware
app.use(cors());
app.use(express.json());

//server_test
app.get('/', async (req, res) => {
  res.send('RUET clearance sytem server is running');
});

app.listen(port, () => {
  console.log(`Server is in the port: ${port}`);
});
