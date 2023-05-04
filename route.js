const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const fs = require("fs");
router.use(express.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.get("/", (req, res) => {
  const home = fs.readFileSync("./index.html", "utf-8");
  res.send(home);
});
router.get("/login", (req, res) => {
  const login = fs.readFileSync("./login.html", "utf-8");
  res.send(login);
});

router.get("/all-chats", (req, res) => {
  const data = fs.readFileSync("./data.json", "utf8");
  const chats = JSON.parse(data);
  res.json(chats);
});

router.post("/message", (req, res) => {
  const username = req.body.username;
  const message = req.body.message;

  let data = fs.readFileSync("./data.json", "utf-8");

  if (data == "") {
    data = "[]";
  }
  let dataArray = JSON.parse(data);
  let newMessage = { username: username, message: message };
  dataArray.push(newMessage);
  fs.writeFileSync("./data.json", JSON.stringify(dataArray));

  res.json(dataArray);
});

router.post("/user", (req, res) => {
  res.redirect("/");
});

module.exports = router;
