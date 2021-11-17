const router = require('express').Router();
const userController = require('../controllers/user.controller');

router.post('/add', userController.addNewPatient);
router.put('/update/:id', userController.updatePatient);
router.get('/all', userController.getAllPatients);
router.delete('/delete/:id', userController.deletePatient);

module.exports = router;