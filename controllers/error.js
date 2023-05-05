const fs = require("fs");
const path = require("path");
const rootDir = require("../util/path");

const catchError = (req, res, next) => {
  const notFound = fs.readFileSync(
    path.join(rootDir, "views", "notFound.html"),
    "utf-8"
  );
  res.status(404).send(notFound);
  next();
};

module.exports = catchError;
