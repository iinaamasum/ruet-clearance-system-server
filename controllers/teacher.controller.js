const TeacherModel = require('../models/teacher.model');

exports.postTeacherInfo = async (req, res, next) => {
  try {
    const teacherData = new TeacherModel(req.body);
    console.log(teacherData);
    const result = await teacherData.save();

    res.status(200).json({
      status: 'success',
      message: 'successfully updated the teacher info.',
      result,
    });
  } catch (error) {
    res.status(200).json({
      status: 'failed',
      message: "Can't post the teacher info.",
      error,
    });
  }
};
