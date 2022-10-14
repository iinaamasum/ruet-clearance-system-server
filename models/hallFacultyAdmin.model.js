const mongoose = require('mongoose');

const statusObjectSchema = new mongoose.Schema({
  isPending: {
    type: Boolean,
    required: true,
  },
  isApproved: {
    type: Boolean,
    required: true,
  },
  isRejected: {
    type: Boolean,
    required: true,
  },
  rejectionReason: {
    type: String,
    trim: true,
  },
});

const hallFacultyAdminSchema = new mongoose.Schema(
  {
    appliedFor: {
      type: String,
      required: true,
    },
    status: {
      type: statusObjectSchema,
      required: true,
    },
    studentName: {
      type: String,
      required: true,
    },
    studentEmail: {
      type: String,
      required: true,
    },
    studentRoll: {
      type: String,
      required: true,
    },
    studentFaculty: {
      type: String,
      required: true,
    },
    studentDept: {
      type: String,
      required: true,
    },
    studentSeries: {
      type: String,
      required: true,
    },
    studentContactInfo: {
      type: String,
      required: true,
    },
    totalSections: {
      type: Number,
      required: true,
    },
    getClearanceSections: {
      type: Array,
    },
  },
  {
    timestamps: true,
  }
);

const HallFacultyAdminModel = mongoose.model(
  'hall-faculty-admin-application',
  hallFacultyAdminSchema
);

module.exports = HallFacultyAdminModel;
