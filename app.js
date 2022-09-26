const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const studentRoute = require('./routes/student.route');
const teacherRoute = require('./routes/teacher.route');

// middleware
app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));

// routes
app.use('/api/v1/student/', studentRoute);
app.use('/api/v1/teacher/', teacherRoute);

// root route
app.all('/', (req, res, next) => {
  res.status(200).json({
    status: 'success',
    message: 'Server is in furfura mode.',
    author: 'iinaamasum',
  });
});

module.exports = app;
