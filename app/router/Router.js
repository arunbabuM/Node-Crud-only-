const router = require('express').Router();
const controller = require('../controller/DashboardController.js');

router.get('/dashboard',controller.getDashboardPage);
router.get('/adduser', controller.getAddUserPage);
router.post('/insertuser', controller.insertUser);
router.get('/update-user', controller.getUpdatePage);
router.get('/delete-user', controller.deleteUser);
router.post('/update-user', controller.updateUser);

module.exports = router;