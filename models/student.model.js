const mongoose = require('mongoose');
const validator = require('validator');

const studentSchema = mongoose.Schema({
  name: {
    type: String,
    required: {
      value: true,
      message: 'Student Name must be given.',
    },
    trim: true,
    lowercase: true,
    minLength: [2, 'Student Name can be at least 2 char.'],
    maxLength: [100, "Student Name can't exceed 100 chars."],
  },
  email: {
    type: String,
    required: {
      value: true,
      message: 'Email address is required',
    },
    validate: {
      validator: (value) => {},
    },
  },
  faculty: {
    type: String,
    required: {
      value: true,
      message: 'Faculty data is required',
    },
    trim: true,
    lowercase: true,
  },
  dept: {
    type: String,
    required: {
      value: true,
      message: 'Dept data is not provided yet',
    },
    trim: true,
    uppercase: true,
  },
});
