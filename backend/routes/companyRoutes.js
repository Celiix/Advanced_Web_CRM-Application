const router = require('express').Router();
const companyController = require('../controllers/companyController');

router
  .route('/')
  .post(companyController.createCompany)
  .get(companyController.getAllCompany);

module.exports = router;
