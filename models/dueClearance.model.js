const mongoose = require('mongoose');

const dueObjectSchema = new mongoose.Schema({
  remainDue: {
    type: String,
    required: [true, 'remain due data not provided.'],
  },
  amount: {
    type: Number,
    required: true,
  },
  transactionID: {
    type: String,
    required: true,
  },
});

const dueStatusSchema = new mongoose.Schema({
  isApproved: {
    type: Boolean,
    required: true,
  },
  isRejected: {
    type: Boolean,
    required: true,
  },
  isPending: {
    type: Boolean,
    required: true,
  },
  rejectionReason: {
    type: String,
  },
});

const dueClearanceSchema = new mongoose.Schema({
  dueReason: {
    type: Array,
    required: [true, 'Due reason is required.'],
  },
  due: {
    type: dueObjectSchema,
    required: true,
  },
  status: {
    type: dueStatusSchema,
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
  appliedFor: {
    type: String,
    required: true,
  },
});

const DueClearanceApplyModel = mongoose.model(
  'Due-Clearance-Apply',
  dueClearanceSchema
);
module.exports = DueClearanceApplyModel;
