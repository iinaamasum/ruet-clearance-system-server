const StudentModel = require('../models/student.model');
const { postStudentInfoService } = require('../services/student.service');

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
  try {
    const postedStudentInfo = await postStudentInfoService(req.body);
    if (!postedStudentInfo) {
      res.status(400).json({
        status: 'failed',
        message: "Can't post the student. Posting Database error.",
        postedStudentInfo,
      });
    }
    res.status(200).json({
      status: 'success',
      message: 'post a student info. @param object',
      postedStudentInfo,
    });
  } catch (error) {
    res.status(400).json({
      status: 'failed',
      message: "Can't post the student. Server error.",
      error,
    });
  }
};