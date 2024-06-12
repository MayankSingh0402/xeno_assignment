// customerRoutes.js

const express = require("express");
const router = express.Router();
const Customer = require("../model/CustomerSch");

// Route to add a customer
const addCustomer = async (req, res) => {
  try {
    const { name, email, spends } = req.body;
    console.log(name, email, spends);
    const newCustomer = new Customer({
      name,
      email,
      spends,
      visitCount: 1,
      lastVisit: new Date(),
    });
    const savedCustomer = await newCustomer.save();
    return res.status(201).json({
      message: "Customer added successfully",
      customer: savedCustomer,
      success: true,
    });
  } catch (error) {
    res.status(400).json({ message: error.message, success: false });
  }
};

// Route to get all customers
const getCustomer = async (req, res) => {
  try {
    const customers = await Customer.find();
    console.log(customers);

    return res.json({
      success: true,
      customers: customers,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  addCustomer,
  getCustomer,
};
