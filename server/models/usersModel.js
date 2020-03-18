const mongoose = require('mongoose');

const { Schema } = mongoose;

const UserSchema = new Schema({
  first_name: {
    type: String,
    required: true
  },
  last_name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  address: String,
  date_of_birth: String,
  account_balance: {
    type: Number,
    default: 0.0
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  account_number: {
    type: Number,
    required: true
  },
});

module.exports = mongoose.model('Users', UserSchema);
