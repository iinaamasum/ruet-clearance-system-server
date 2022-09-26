const {
  getAllStudentInfo,
  postStudentInfo,
} = require('../controllers/student.controller');

const router = require('express').Router();

router.route('/profile-info').get(getAllStudentInfo).post(postStudentInfo);

module.exports = router;
