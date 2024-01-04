const express = require("express");
const { sequelize } = require("./models/index");

const app = express();

app.listen(8000, () => {
  console.log("Listening on port 8000");
});

sequelize
  .sync()
  .then(() => {
    console.log("connected to database succesfully");
  })
  .catch((err) => {
    console.error(err);
  });
