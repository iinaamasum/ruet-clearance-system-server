const mongoose = require('mongoose');
const validator = require('validator');

const studentSchema = new mongoose.Schema(
  {
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
      // validate: {
      //   validator: [
      //     validator.isEmail({ VALUE }),
      //     'Please provide a valid mail.',
      //   ],
      // },
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
    series: {
      type: String,
      required: {
        value: true,
        message: 'Series info not found.',
      },
    },
    roll: {
      type: String,
      required: {
        value: true,
        message: 'Roll must be provided.',
      },
    },
    contact_number: {
      type: String,
      required: {
        value: true,
        message: 'Please provide contact number.',
      },
    },
  },
  {
    timestamps: true,
  }
);

const StudentModel = mongoose.model('Student', studentSchema);
module.exports = StudentModel;
