const TeacherModel = require('../models/teacherInfo.model');
const {
  postTeacherInfoService,
  getTeacherInfoService,
} = require('../services/teacherInfo.service');

exports.postTeacherInfo = async (req, res, next) => {
  try {
    const teacherData = await postTeacherInfoService(req.body);
    if (!teacherData._id) {
      res.status(400).json({
        status: 'failed',
        message: "Can't post the teacher info.",
        teacherData,
      });
    }
    res.status(201).json({
      status: 'success',
      message: 'successfully updated the teacher info.',
      teacherData,
    });
  } catch (error) {
    res.status(200).json({
      status: 'failed',
      message: "Can't post the teacher info.",
      error,
    });
  }
};

exports.getTeacherInfo = async (req, res, next) => {
  try {
    const TeacherInfo = await getTeacherInfoService(req.query);
    if (TeacherInfo.length === 0) {
      res.status(400).json({
        status: 'failed',
        message: "Can't get the teacher info.",
        teacherData,
      });
    }
    res.status(200).json({
      status: 'success',
      message: 'successfully got all of the teacher info.',
      TeacherInfo,
    });
  } catch (error) {
    res.status(200).json({
      status: 'failed',
      message: "Can't get the teacher info.",
      error,
    });
  }
};
