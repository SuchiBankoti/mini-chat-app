const express = require("express");
const app = express();
const route = require("./route");
const path = require("path");

const rootDir = require("./util/path");

app.use(express.static(path.join(__dirname, "public")));
app.use(route);
const fs = require("fs");

const catchBadRoute = (req, res, next) => {
  const notFound = fs.readFileSync(
    path.join(rootDir, "views", "notFound.html"),
    "utf-8"
  );
  res.status(404).send(notFound);
  next();
};
app.use(catchBadRoute);
app.listen(5000, () => {
  console.log("server active");
});
