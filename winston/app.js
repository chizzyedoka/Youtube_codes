const express = require("express");
const app = express();
const expressWinston = require("express-winston");
const { transports, format } = require("winston");
const PORT = 4000;

app.use(
  expressWinston.logger({
    transports: [new transports.Console()],
    format: format.combine(
      format.json(),
      format.timestamp(),
      format.prettyPrint()
    ),
  })
);

app.get("/", (req, res) => {
  res.sendStatus(200);
});

app.listen(PORT);
console.log(`Listening on port ${PORT}`);
