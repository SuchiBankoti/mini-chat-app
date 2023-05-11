const express = require("express");
const app = express();
const route = require("./route");
const path = require("path");
const catchError = require("./controllers/error");
const db = require("./util/database");

db.execute("SELECT * FROM chats")
  .then((data) => console.log(data[0]))
  .catch((err) => console.log(err));

db.query(
  'INSERT INTO chats(username, message) VALUES("kunal","new mesaage from kunal")'
)
  .then((data) => console.log("data inserted"))
  .catch((err) => console.log(err));
app.use(express.static(path.join(__dirname, "public")));
app.use(route);

app.use(catchError);

app.listen(5000, () => {
  console.log("server active");
});
