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
  studentRoll: {
    type: String,
    required: true,
  },
  studentEmail: {
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
});

const EquipmentClearanceApplyModel = mongoose.model(
  'equipment-clearance-apply',
  equipmentClearanceApplicationSchema
);

module.exports = EquipmentClearanceApplyModel;
