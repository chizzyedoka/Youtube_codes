const http = require("http");

const server = http.createServer((req, res) => {
  const superHero = {
    firstName: "Bruce",
    lastName: "Wayne",
  };
  res.writeHead(200, { "Content-Type": "application/jso" }); //{ "Content-Type": "text/plain" });
  res.end(JSON.stringify(superHero));
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});

// Code with Mosh
// const http = require("http");

// const server = http.createServer((req, res) => {
//   if (req.url === "/") {
//     res.write("Hello World");
//     res.end();
//   }

//   if (req.url === "/api/courses") {
//     res.write(JSON.stringify([1, 2, 3]));
//     console.log(res);
//     res.end();
//   }
// });

// server.listen(3000);

// console.log("Listening on port 3000...");
