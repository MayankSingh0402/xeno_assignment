const express = require("express");
require("dotenv").config();
const cookieParser = require("cookie-parser");
const authRouter = require("./router/authRouter.js");
const CustomerRoutes = require("./router/customerRoutes.js");
const dbConnection = require("./configuration/db.js");
const cors = require("cors"); // Import CORS module
const app = express();

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors()); // Enable CORS for all routes

// Connect to MongoDB
dbConnection();

// Routes
app.use("/api/auth", authRouter);
app.use("/api/customer", CustomerRoutes);

// Default route
app.use("/", (req, res) => {
  res.status(200).json({
    name: "json tokens",
  });
});

module.exports = app;
