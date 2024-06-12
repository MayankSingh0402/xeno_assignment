const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  spends: {
    type: Number,
    default: 0,
  },
  visitCount: {
    type: Number,
    default: 1,
  },
  lastVisit: {
    type: Date,
    default: Date.now,
  },
});

const Customer = mongoose.model("CustomerSch", customerSchema);

module.exports = Customer;
