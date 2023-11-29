const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" }); //{ "Content-Type": "text/plain" });
  fs.createReadStream("./index.html").pipe(res);

  //   const html = fs.readFileSync("./index.html", "utf8");
  //   res.end(html);
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
