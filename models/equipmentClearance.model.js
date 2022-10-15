const mongoose = require('mongoose');

const equipmentObjectSchema = mongoose.Schema({
  remainEquipment: {
    type: String,
    required: true,
  },
  equipmentName: {
    type: Array,
    required: true,
  },
  equipmentReturnedTo: {
    type: Array,
    required: true,
  },
  returnedCode: {
    type: Array,
    required: true,
  },
});

const statusObjectSchema = {
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
};

const equipmentClearanceApplicationSchema = new mongoose.Schema({
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
  equipment: {
    type: equipmentObjectSchema,
    required: true,
  },
  status: {
    type: statusObjectSchema,
    required: true,
  },
  appliedFor: {
    type: String,
    required: true,
  },
});

const EquipmentClearanceApplyModel = mongoose.model(
  'equipment-clearance-apply',
  equipmentClearanceApplicationSchema
);

module.exports = EquipmentClearanceApplyModel;
