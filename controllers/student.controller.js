const StudentModel = require('../models/student.model');

exports.getAllStudentInfo = async (req, res, next) => {
  res.status(200).json({
    status: 'success',
    message: 'got all the students. @param array of objects',
    // allStudent,
  });
};

exports.getStudentInfo = async (req, res, next) => {
  const { id } = req.params;
  res.status(200).json({
    status: 'success',
    message: `got the student with id ${id}. @param object`,
    // student,
  });
};

exports.postStudentInfo = async (req, res, next) => {
  const data = StudentModel(req.body);
  const result = await data.save();
  res.status(200).json({
    status: 'success',
    message: 'post a student info. @param object',
    result,
  });
};
