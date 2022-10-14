const StudentModel = require('../models/studentInfo.model');

exports.postStudentInfoService = async (data) => {
  const postDoc = await StudentModel(data);
  const result = await postDoc.save();
  return result;
};

exports.getAllStudentInfoService = async (data) => {
  const result = await StudentModel.find(data);
  return result;
};
