// reading files from file1 and writing them in file2 in strams

const fs = require("fs");

const readableStream = fs.createReadStream("./file1.txt", {
  encoding: "utf-8",
});

const writeableStream = fs.createWriteStream("./file2.txt");

// stream module inherits from emitter module
readableStream.on("data", (chunk) => {
  console.log(chunk);
  writeableStream.write(chunk);
});
