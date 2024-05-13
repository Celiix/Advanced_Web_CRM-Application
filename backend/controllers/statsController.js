const Product = require('../models/productModel');
const User = require('../models/userModel');
const Customer = require('../models/customerModel');
const ContactLog = require('../models/contactLogModel');
const catchAsync = require('../utils/catchAsync');

exports.getStats = catchAsync(async (req, res, next) => {
  const totalProducts = await Product.countDocuments();
  const totalEmployees = await User.countDocuments({ role: { $ne: 'admin' } });
  const totalContacts = await ContactLog.countDocuments();
  const totalCustomers = await Customer.countDocuments();
  const data = {
    totalProducts,
    totalEmployees,
    totalContacts,
    totalCustomers,
  };
  res.status(200).json({
    status: 'success',
    data,
  });
});
