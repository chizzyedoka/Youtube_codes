const fs = require("fs");
const loadFile = (path) => {
  return fs.readFileSync(path, "utf-8");
};
//const loadFile = fs.readFileSync("./files/file.txt", "utf-8");
module.exports = loadFile;
/*const path = "./files/file";
const loadFile = (path) => {
  fs.readFileSync(path, "utf-8");
};*/
//module.exports = loadFile;

// const loadFile = fs.readFileSync("./files/file.txt", "utf-8");   here loadFile is the data

//-----USING readFile-------
/*fs.readFile("./files/file.txt", "utf-8", function (err, data) {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});*/
