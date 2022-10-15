const EquipmentClearanceApplyModel = require('../models/equipmentClearance.model');

exports.postEquipmentClearanceApplication = async (req, res) => {
  try {
    const postEquipmentDoc = await EquipmentClearanceApplyModel(req.body);
    const result = await postEquipmentDoc.save();
    if (!result._id) {
      res.status(400).json({
        status: 'failed',
        message: "Can't post equipment clearance application.",
        result,
      });
    }
    res.status(201).json({
      status: 'success',
      message: 'posted the equipment apply.',
      result,
    });
  } catch (error) {
    res.status(200).json({
      status: 'failed',
      message: "Can't post equipment clearance. Internal error",
      error,
    });
  }
};

exports.getEquipmentClearanceApplication = async (req, res) => {
  try {
    const result = await EquipmentClearanceApplyModel.find(req.query).sort({
      createdAt: -1,
    });
    if (result.length == 0) {
      return res.status(200).json({
        status: 'failed',
        message: "Can't get equipment applications. Please populate first.",
        result,
      });
    }
    res.status(200).json({
      status: 'success',
      message: 'got equipment application. @param array of objects',
      result,
    });
  } catch (error) {
    res.status(400).json({
      status: 'failed',
      message: "Can't get equipment application.",
      error,
    });
  }
};

exports.deleteEquipmentApplicationById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await EquipmentClearanceApplyModel.findByIdAndDelete(id);
    console.log(id, result);
    if (!result) {
      return res.status(400).json({
        status: 'failed',
        message: "Can't get equipment application with the id.",
      });
    }
    res.status(202).json({
      status: 'success',
      message: 'deleted equipment application with the id. @param object',
      result,
    });
  } catch (error) {
    res.status(400).json({
      status: 'failed',
      message: "Can't delete equipment application with the id.",
      error,
    });
  }
};

exports.patchEquipmentClearanceApplicationById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await EquipmentClearanceApplyModel.findByIdAndUpdate(
      id,
      req.body
    );
    if (!result) {
      return res.status(400).json({
        status: 'failed',
        message: 'Not exists.',
      });
    }
    res.status(202).json({
      status: 'success',
      message: 'updated the application with the id. @param object',
      result,
    });
  } catch (error) {
    res.status(400).json({
      status: 'failed',
      message: "Can't update the application with the id.",
      error,
    });
  }
};
