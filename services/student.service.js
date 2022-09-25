const StudentModel = require('../models/student.model');

exports.postStudentInfoService = async (data) => {
  const postDoc = await StudentModel(data);
  const result = await postDoc.save();
  return result;
};

exports.getAllStudentInfoService = async () => {
  const result = await StudentModel.find();
  return result;
};
