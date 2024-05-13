const router = require('express').Router();
const authController = require('../controllers/authController');
const userController = require('../controllers/userController');

router.post('/', authController.createAdmin);
router.post('/login', authController.login);
router.get('/logout', authController.logout);
router.get('/getMe', authController.protect, authController.getMe);
router.use(authController.protect, authController.restrictTo('admin'));
router.get('/', userController.getAllUser);
router.post('/create', userController.createUser);
router
  .route('/:id')
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;
