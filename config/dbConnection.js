const mongoose = require("mongoose");
require("dotenv").config();

const dbConnect = async () => {
  try {
    const connect = await mongoose.connect("mongodb://127.0.0.1:27017/contact-manager");
    console.log(
      "success in db connection",
      connect.connection.host,
      connect.connection.name
    );
  } catch (err) {
    console.log("Error in DB Connection", err);
    process.exit(1);
  }
};

module.exports = dbConnect;
