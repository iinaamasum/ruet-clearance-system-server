const TeacherModel = require('../models/teacher.model');

exports.postTeacherInfoService = async (data) => {
  const postDoc = new TeacherModel(data);
  const result = await postDoc.save();
  return result;
};

exports.getTeacherInfoService = async (data) => {
  const result = await TeacherModel.find(data);
  return result;
};
