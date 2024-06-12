const express = require("express");
const { addCustomer, getCustomer } = require("../controller/Customer.js");

const CustomerRoutes = express.Router();
CustomerRoutes.post("/addcustomer", addCustomer);
CustomerRoutes.get("/getcustomer", getCustomer);

module.exports = CustomerRoutes;
