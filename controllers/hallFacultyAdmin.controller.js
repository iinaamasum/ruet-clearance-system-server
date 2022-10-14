const HallFacultyAdminModel = require('../models/hallFacultyAdmin.model');

exports.postHallFacultyAdminClearanceApplication = async (req, res) => {
  try {
    const postDoc = await HallFacultyAdminModel(req.body);
    const result = await postDoc.save();

    if (!result._id) {
      res.status(400).json({
        status: 'failed',
        message: "Can't post all clearance application.",
        result,
      });
    }

    res.status(201).json({
      status: 'success',
      message: 'posted the all others clearance apply.',
      result,
    });
  } catch (error) {
    res.status(200).json({
      status: 'failed',
      message: "Can't post all clearance. Internal error",
      error,
    });
  }
};

exports.getHallFacultyAdminClearanceApplication = async (req, res) => {
  try {
    const result = await HallFacultyAdminModel.find(req.query).sort({
      studentRoll: 1,
    });
    if (result.length == 0) {
      return res.status(200).json({
        status: 'failed',
        message: "Can't get all applications. Please populate first.",
        result,
      });
    }
    res.status(200).json({
      status: 'success',
      message: 'got all application. @param array of objects',
      result,
    });
  } catch (error) {
    res.status(400).json({
      status: 'failed',
      message: "Can't get all application.",
      error,
    });
  }
};

exports.deleteHallFacultyAdminClearanceApplicationById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await HallFacultyAdminModel.findByIdAndDelete(id);
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
