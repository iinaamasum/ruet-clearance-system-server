const StudentModel = require('../models/student.model');

exports.postStudentInfoService = async (data) => {
  const postDoc = StudentModel(data);
  const result = await postDoc.save();
  return result;
};
