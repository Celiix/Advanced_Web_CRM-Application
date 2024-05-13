const mongoose = require('mongoose');
const companySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Company name is required'],
    },
    email: {
      type: String,
      required: [true, 'Company email is required'],
    },
    phone: {
      type: String,
      required: [true, 'Company phone is required'],
    },
    address: {
      type: String,
      required: [true, 'Company address is required'],
    },
    city: {
      type: String,
      required: [true, 'Company city is required'],
    },
    state: {
      type: String,
      required: [true, 'Company state is required'],
    },
    country: {
      type: String,
      required: [true, 'Company country is required'],
    },
    website: {
      type: String,
      required: [true, 'Company website is required'],
    },
    logo: {
      type: String,
      required: [true, 'Company logo is required'],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Company', companySchema);
