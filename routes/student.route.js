const {
  getAllStudentInfo,
  getStudentInfo,
  postStudentInfo,
} = require('../controllers/student.controller');

const router = require('express').Router();

router
  .route('/student/profile-info')
  .get(getAllStudentInfo)
  .post(postStudentInfo);

module.exports = router;
