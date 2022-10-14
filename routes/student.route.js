const {
  postDueClearanceApplication,
  getDueClearanceApplication,
  deleteDueApplicationById,
} = require('../controllers/dueClearance.controller');
const {
  getEquipmentClearanceApplication,
  postEquipmentClearanceApplication,
  deleteEquipmentApplicationById,
} = require('../controllers/equipmentClearance.controller');
const {
  postHallFacultyAdminClearanceApplication,
  getHallFacultyAdminClearanceApplication,
} = require('../controllers/hallFacultyAdmin.controller');
const {
  getAllStudentInfo,
  postStudentInfo,
} = require('../controllers/studentInfo.controller');

const router = require('express').Router();

router.route('/profile-info').get(getAllStudentInfo).post(postStudentInfo);

router
  .route('/equipment-clearance-apply/:id')
  .delete(deleteEquipmentApplicationById);

router.route('/due-clearance-apply/:id').delete(deleteDueApplicationById);

router
  .route('/due-clearance-apply')
  .post(postDueClearanceApplication)
  .get(getDueClearanceApplication);

router
  .route('/hall-faculty-admin-clearance-apply')
  .post(postHallFacultyAdminClearanceApplication)
  .get(getHallFacultyAdminClearanceApplication);

router
  .route('/equipment-clearance-apply')
  .get(getEquipmentClearanceApplication)
  .post(postEquipmentClearanceApplication);

module.exports = router;
