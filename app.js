const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const studentRoute = require('./routes/student.route');

// middleware
app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));

// routes
app.use('/api/v1/', studentRoute);

// root route
app.all('/', (req, res, next) => {
  res.status(200).json({
    status: 'success',
    message: 'Server is in furfura mode.',
    author: 'iinaamasum',
  });
});

module.exports = app;
