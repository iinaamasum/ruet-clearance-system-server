const mongoose = require('mongoose');

const teacherSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: {
        value: true,
        message: 'name should be provided',
      },
      trim: true,
      lowercase: true,
      minLength: [2, 'name should be at least 2 chars.'],
      maxLength: [100, "name can't exceeds 100 chars."],
    },
    email: {
      type: String,
      required: {
        value: true,
        message: 'Email is required.',
      },
      unique: {
        value: true,
        message:
          'email must be unique. another account already added with this email.',
      },
    },
    faculty: {
      type: String,
      required: {
        value: true,
        message: 'faculty name is required.',
      },
    },
    dept: {
      type: String,
      required: {
        value: true,
        message: 'dept is required.',
      },
    },
    contact_number: {
      type: String,
      required: {
        value: true,
        message: 'contact number must be given.',
      },
      unique: {
        value: true,
        message: 'contact number is used for another account.',
      },
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const TeacherModel = mongoose.model('Teacher', teacherSchema);
module.exports = TeacherModel;
