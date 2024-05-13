const Company = require('../models/companyModel');
const factory = require('./handlerFactory');

exports.createCompany = factory.createOne(Company);
exports.getAllCompany = factory.getAll(Company);
