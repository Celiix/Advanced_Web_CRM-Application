const mongoose = require('mongoose');
const contactLogSchema = new mongoose.Schema(
  {
    customer: {
      type: mongoose.Schema.ObjectId,
      ref: 'Customer',
      required: [true, 'Customer is required'],
    },
    product: {
      type: mongoose.Schema.ObjectId,
      ref: 'Product',
      required: [true, 'Product is required'],
    },
    type: {
      type: String,
      enum: ['initial', 'sales', 'support', 'referrals'],
      required: [true, 'Type is required'],
    },
    query: {
      type: String,
      required: [true, 'Query is required'],
    },
    state: {
      type: String,
      enum: ['initialized', 'progress', 'completed'],
      default: 'initialized',
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('ContactLog', contactLogSchema);
