const express = require("express");
const app = express();
const route = require("./route");
const path = require("path");
const catchError = require("./controllers/error");

app.use(express.static(path.join(__dirname, "public")));
app.use(route);

app.use(catchError);

app.listen(5000, () => {
  console.log("server active");
});
