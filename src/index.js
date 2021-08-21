const express = require("express");
const app = express();
const javascript = require("./javascript");
const maximumSymExcluding = require("./maximumSum.ts");
app.listen(5000, () => {
  console.log("express app is running on 5000");
});
