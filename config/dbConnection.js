const mongoose = require("mongoose");
require("dotenv").config();

const dbConnect = async () => {
  try {
    const connect = await mongoose.connect(process.env.DB_CONNECTION_STRING);
    console.log(
      "success in db connection",
      connect.connection.host,
      connect.connection.name
    );
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = dbConnect;
