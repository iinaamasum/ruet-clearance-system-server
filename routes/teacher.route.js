const {
  postTeacherInfo,
  getTeacherInfo,
} = require('../controllers/teacherInfo.controller');
const router = require('express').Router();

router.route('/profile-info').post(postTeacherInfo).get(getTeacherInfo);

module.exports = router;
