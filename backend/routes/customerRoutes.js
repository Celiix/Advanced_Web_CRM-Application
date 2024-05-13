const router = require('express').Router();
const { protect } = require('../controllers/authController');
const customerController = require('../controllers/customerController');

router.post('/login', customerController.login);
router.get('/getMe', customerController.isCustomer, customerController.getMe);
router.use(protect);
router
  .route('/')
  .post(customerController.createCustomer)
  .get(customerController.getAllCustomer);
router
  .route('/:id')
  .get(customerController.getCustomer)
  .patch(customerController.updateCustomer)
  .delete(customerController.deleteCustomer);

module.exports = router;
