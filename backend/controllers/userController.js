const User = require('./../models/userModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const factory = require('./handlerFactory');

exports.createUser = catchAsync(async (req, res, next) => {
  if (req.body.role === 'admin') {
    return res.status(401).json({ message: 'Unauthorized' });
  }
  const newUser = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    role: req.body.role,
  });

  res.status(201).json({
    status: 'success',
    data: {
      newUser,
    },
  });
});
exports.getAllUser = factory.getAll(User);
exports.getUser = factory.getOne(User);
exports.updateUser = factory.updateOne(User);
exports.deleteUser = factory.deleteOne(User);
