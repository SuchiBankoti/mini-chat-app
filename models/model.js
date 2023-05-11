const fs = require("fs");
const path = require("path");
const rootDir = require("../util/path");

const readFile = (filename) => {
  const content = fs.readFileSync(
    path.join(rootDir, "views", `${filename}`),
    "utf-8"
  );
  return content;
};

// const readFileData = (filename) => {
//   const data = fs.readFileSync(path.join(rootDir, `${filename}`), "utf8");
//   return data;
// };
module.exports = { readFile };
