const fs = require("fs");

const fileContent = fs.readFileSync("./file.txt", "utf-8"); //synchronous js

console.log(fileContent);

// asynchronous js
fs.readFile("./file.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});

fs.writeFileSync("./greet.txt", "Hello World!");

fs.writeFile("./greet.txt", "Hello Chisom", { flag: "a" }, (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log("File written");
  }
});
