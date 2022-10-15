const {
  postDueClearanceApplication,
  getDueClearanceApplication,
  deleteDueApplicationById,
  patchDueClearanceApplicationById,
} = require('../controllers/dueClearance.controller');
const {
  getEquipmentClearanceApplication,
  postEquipmentClearanceApplication,
  deleteEquipmentApplicationById,
  patchEquipmentClearanceApplicationById,
} = require('../controllers/equipmentClearance.controller');
const {
  postHallFacultyAdminClearanceApplication,
  getHallFacultyAdminClearanceApplication,
  deleteHallFacultyAdminClearanceApplicationById,
  patchHallFacultyAdminClearanceApplicationById,
} = require('../controllers/hallFacultyAdmin.controller');
const {
  getAllStudentInfo,
  postStudentInfo,
} = require('../controllers/studentInfo.controller');

const router = require('express').Router();

router.route('/profile-info').get(getAllStudentInfo).post(postStudentInfo);

router
  .route('/equipment-clearance-apply/:id')
  .delete(deleteEquipmentApplicationById)
  .patch(patchEquipmentClearanceApplicationById);

router
  .route('/due-clearance-apply/:id')
  .delete(deleteDueApplicationById)
  .patch(patchDueClearanceApplicationById);

router
  .route('/hall-faculty-admin-clearance-apply/:id')
  .delete(deleteHallFacultyAdminClearanceApplicationById)
  .patch(patchHallFacultyAdminClearanceApplicationById);

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

router.get('/', async (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'default route',
    result: [],
  });
});

module.exports = router;
