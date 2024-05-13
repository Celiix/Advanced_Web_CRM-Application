const ContactLog = require('../models/contactLogModel');
const factory = require('./handlerFactory');

exports.createContactLog = factory.createOne(ContactLog);
exports.getAllContactLog = factory.getAll(ContactLog);
exports.getContactLog = factory.getOne(ContactLog);
exports.updateContactLog = factory.updateOne(ContactLog);
exports.deleteContactLog = factory.deleteOne(ContactLog);
