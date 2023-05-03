const express = require("express");
const app = express();
const admin = require("./routes/admin");
const shop = require("./routes/shop");
app.use(admin);
app.use(shop);

const catchBadRoute = (req, res, next) => {
  res.status(404).send("<h1>Page not found</h1>");
  next();
};
app.use(catchBadRoute);
app.listen(5000, () => {
  console.log("server active");
});
