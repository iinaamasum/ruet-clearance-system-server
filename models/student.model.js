const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Student Name must be given.'],
      trim: true,
      lowercase: true,
      minLength: [2, 'Student Name can be at least 2 char.'],
      maxLength: [100, "Student Name can't exceed 100 chars."],
    },
    email: {
      type: String,
      required: [true, 'Email address is required'],
      unique: [true, 'given email already taken.'],
    },
    faculty: {
      type: String,
      required: [true, 'Faculty data is required'],
      trim: true,
      lowercase: true,
    },
    dept: {
      type: String,
      required: [true, 'Dept data is not provided yet'],
      trim: true,
      uppercase: true,
    },
    series: {
      type: String,
      required: [true, 'Series info not found.'],
    },
    roll: {
      type: String,
      required: [true, 'Roll must be provided.'],
      unique: [true, 'Roll number already assigned with another account.'],
    },
    contact_number: {
      type: String,
      required: [true, 'Please provide contact number.'],
      unique: [true, 'contact number already assigned with another account.'],
    },
  },
  {
    timestamps: true,
  }
);

const StudentModel = mongoose.model('Student', studentSchema);
module.exports = StudentModel;
