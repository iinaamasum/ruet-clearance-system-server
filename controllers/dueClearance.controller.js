const DueClearanceApplyModel = require('../models/dueClearance.model');

exports.postDueClearanceApplication = async (req, res) => {
  try {
    const postDueDoc = await DueClearanceApplyModel(req.body);
    const result = await postDueDoc.save();

    if (!result._id) {
      res.status(400).json({
        status: 'failed',
        message: "Can't post due clearance application.",
        result,
      });
    }

    res.status(201).json({
      status: 'success',
      message: 'posted the due apply.',
      result,
    });
  } catch (error) {
    res.status(200).json({
      status: 'failed',
      message: "Can't post due clearance. Internal error",
      error,
    });
  }
};

exports.getDueClearanceApplication = async (req, res) => {
  try {
    const result = await DueClearanceApplyModel.find(req.query).sort({
      createdAt: -1,
    });
    if (result.length == 0) {
      return res.status(200).json({
        status: 'failed',
        message: "Can't get due applications. Please populate first.",
        result,
      });
    }
    res.status(200).json({
      status: 'success',
      message: 'got due application. @param array of objects',
      result,
    });
  } catch (error) {
    res.status(400).json({
      status: 'failed',
      message: "Can't get due application.",
      error,
    });
  }
};

exports.deleteDueApplicationById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await DueClearanceApplyModel.findByIdAndDelete(id);
    if (!result) {
      return res.status(400).json({
        status: 'failed',
        message: "Can't get due application with the id.",
      });
    }
    res.status(202).json({
      status: 'success',
      message: 'deleted due application with the id. @param object',
      result,
    });
  } catch (error) {
    res.status(400).json({
      status: 'failed',
      message: "Can't delete due application with the id.",
      error,
    });
  }
};

exports.patchDueClearanceApplicationById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await DueClearanceApplyModel.findByIdAndUpdate(id, req.body);
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
