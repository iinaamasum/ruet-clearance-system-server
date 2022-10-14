const StudentModel = require('../models/studentInfo.model');
const {
  postStudentInfoService,
  getAllStudentInfoService,
} = require('../services/studentInfo.service');

exports.getAllStudentInfo = async (req, res) => {
  try {
    const email = req.query;
    const allStudentInfo = await getAllStudentInfoService(email);
    if (allStudentInfo.length == 0) {
      return res.status(400).json({
        status: 'failed',
        message: "Can't get all students. Please populate first.",
        allStudentInfo,
      });
    }
    res.status(200).json({
      status: 'success',
      message: 'got all the students. @param array of objects',
      allStudentInfo,
    });
  } catch (error) {
    res.status(400).json({
      status: 'failed',
      message: "Can't get all students.",
      error,
    });
  }
};

exports.postStudentInfo = async (req, res) => {
  try {
    const postedStudentInfo = await postStudentInfoService(req.body);
    if (!postedStudentInfo?._id) {
      return res.status(400).json({
        status: 'failed',
        message: "Can't post the student.",
        postedStudentInfo,
      });
    }
    res.status(201).json({
      status: 'success',
      message: 'post a student info. @param object',
      postedStudentInfo,
    });
  } catch (error) {
    res.status(400).json({
      status: 'failed',
      message: "Can't post the student.",
      error,
    });
  }
};
