const db = require("../util/database");
const { readFile } = require("../models/model");

const getHome = (req, res) => {
  const home = readFile("index.html");
  res.send(home);
};

const getLogin = (req, res) => {
  const login = readFile("login.html");

  res.send(login);
};

const getAllChats = (req, res) => {
  db.execute("SELECT * FROM chats")
    .then((data) => res.json(data[0]))
    .catch((err) => console.log(err));
};
const postMsg = (req, res) => {
  const username = req.body.username;
  const message = req.body.message;
  db.query(
    `INSERT INTO chats(username, message) VALUES("${username}","${message}")`
  )
    .then((data) => res.redirect("/all-chats"))
    .catch((err) => console.log(err));
};

const postUser = (req, res) => {
  res.redirect("/");
};
module.exports = {
  getHome,
  getAllChats,
  getLogin,
  postMsg,
  postUser,
};
