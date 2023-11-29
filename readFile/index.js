const countFunc = require("./countChars");
const loadFile = require("./loadfile");

const [char, path] = process.argv.slice(2);

if (!char) {
  console.error("ERROR: you must provide a character as an argument ");
  process.exit(1);
} else if (!path) {
  console.error("ERROR: you must provide a path as an argument ");
  process.exit(1);
}

const main = async () => {
  const fileText = loadFile(path);
  console.log(fileText);
  const count = await countFunc(char, fileText);
  console.log(`We found ${count} "${char}" in file`);
};
main();
