const TeacherModel = require('../models/teacher.model');

exports.postTeacherInfoService = async (data) => {
  const postDoc = new TeacherModel(data);
  const result = await postDoc.save();
  return result;
};
