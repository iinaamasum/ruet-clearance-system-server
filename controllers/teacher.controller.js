const TeacherModel = require('../models/teacher.model');
const { postTeacherInfoService } = require('../services/teacher.service');

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
    res.status(200).json({
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
