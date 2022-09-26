const { postTeacherInfo } = require('../controllers/teacher.controller');
const router = require('express').Router();

router.route('/profile-info').post(postTeacherInfo);

module.exports = router;
