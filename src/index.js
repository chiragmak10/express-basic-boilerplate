const express = require("express");
const app = express();
const javascript = require("./javascript");
app.listen(5000, () => {
  console.log("express app is running on 5000");
});
