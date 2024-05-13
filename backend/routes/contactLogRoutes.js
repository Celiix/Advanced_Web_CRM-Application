const router = require('express').Router();
const contactLogController = require('../controllers/contactLogController');
const { isCustomer } = require('../controllers/customerController');
router.post('/', isCustomer, contactLogController.createContactLog);
router.get('/', contactLogController.getAllContactLog);
router
  .route('/:id')
  .get(contactLogController.getContactLog)
  .patch(contactLogController.updateContactLog)
  .delete(contactLogController.deleteContactLog);
module.exports = router;
