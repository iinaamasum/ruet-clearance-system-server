const mongoose = require('mongoose');

const teacherSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'name should be provided'],
      trim: true,
      lowercase: true,
      minLength: [2, 'name should be at least 2 chars.'],
      maxLength: [100, "name can't exceeds 100 chars."],
    },
    email: {
      type: String,
      unique: [true, 'email is already in use.'],
      required: [true, 'Email is required.'],
    },
    faculty: {
      type: String,
      required: [true, 'faculty name is required.'],
    },
    dept: {
      type: String,
      required: [true, 'dept is required.'],
    },
    contact_number: {
      type: String,
      unique: [true, 'contact number is already in use.'],
      required: [true, 'contact number must be given.'],
    },
  },
  {
    timestamps: true,
  }
);

const TeacherModel = mongoose.model('Teacher', teacherSchema);
module.exports = TeacherModel;
