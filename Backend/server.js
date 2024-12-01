const express = require("express");
const testroute = require("./routes/testroute");
const app = express();
app.use(express.json());
app.use("/api/test", testroute);

app.listen(3000, () => {
  console.log("on");
});
