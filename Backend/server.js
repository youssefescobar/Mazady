const express = require("express");
const testroute = require("./routes/testroute");
const connectDB = require('./config/db');
require('dotenv').config();

const app = express();

app.use(express.json());
connectDB();
app.use("/api/test", testroute);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("on");
});
