const express = require("express");
const errorHandler = require("./middleware/errorHandler");
require("dotenv").config();
const app = express();

//middleswares
app.use(express.json());
app.use("/api/contacts", require("./routes/contact"));
app.use(errorHandler);

const port = process.env.PORT || 8081;
app.listen(port, console.log(`Server is running on port ${port}`));
