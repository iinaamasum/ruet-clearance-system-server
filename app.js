const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');

// middleware
app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));

// routes

// root route
app.all('/', (req, res, next) => {
  res.status(200).json({
    status: 'success',
    message: 'Server is in furfura mode.',
    author: 'iinaamasum',
  });
});

module.exports = app;
