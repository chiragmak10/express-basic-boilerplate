const express = require("express");
const app = (express = express());
app.listen(5000, () => {
  console.log("express app is running on 5000");
});
