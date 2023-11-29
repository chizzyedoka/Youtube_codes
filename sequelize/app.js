const express = require("express");
const app = express();
const db = require("./models");
app.use(express.json());

(async () => {
  await db.sequelize.sync();
})();
