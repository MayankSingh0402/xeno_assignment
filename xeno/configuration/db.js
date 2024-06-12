const mongoose = require("mongoose");
require("dotenv").config();

const dbConnect = async () => {
  await mongoose
    .connect(
      process.env.MONGO_URI
    )
    .then((conn) => {
      console.log(`database connected :: ${conn.connection.host}`);
    })
    .catch((err) => {
      console.log("mayank bhai error aa gya");
      console.log(err.message);
      process.exit(1);
    });
};

module.exports = dbConnect;
