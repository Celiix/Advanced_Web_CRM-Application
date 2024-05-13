const router = require('express').Router();
const { protect, restrictTo } = require('../controllers/authController');
const productController = require('../controllers/productController');

router
  .route('/')
  .post(protect, restrictTo('admin'), productController.createProduct)
  .get(productController.getAllProduct);
router.use(protect, restrictTo('admin'));
router
  .route('/:id')
  .get(productController.getProduct)
  .patch(productController.updateProduct)
  .delete(productController.deleteProduct);

module.exports = router;
