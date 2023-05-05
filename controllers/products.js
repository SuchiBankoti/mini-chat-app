const path = require("path");
const rootDir = require("../util/path");
const fs = require("fs");

const getHome = (req, res) => {
  const home = fs.readFileSync(
    path.join(rootDir, "views", "index.html"),
    "utf-8"
  );
  res.send(home);
};
const getLogin = (req, res) => {
  const login = fs.readFileSync(
    path.join(rootDir, "views", "login.html"),
    "utf-8"
  );
  res.send(login);
};
const getContact = (req, res) => {
  const contact = fs.readFileSync(
    path.join(rootDir, "views", "contact.html"),
    "utf-8"
  );
  res.send(contact);
};
const getSuccess = (req, res) => {
  res.send("Form Successfully filled");
};
const getAllChats = (req, res) => {
  const data = fs.readFileSync(path.join(rootDir, "data.json"), "utf8");
  const chats = JSON.parse(data);
  res.json(chats);
};
const postMsg = (req, res) => {
  const username = req.body.username;
  const message = req.body.message;

  let data = fs.readFileSync(path.join(rootDir, "data.json"), "utf-8");

  if (data == "") {
    data = "[]";
  }
  let dataArray = JSON.parse(data);
  let newMessage = { username: username, message: message };
  dataArray.push(newMessage);
  fs.writeFileSync(path.join(rootDir, "data.json"), JSON.stringify(dataArray));

  res.json(dataArray);
};
const postUser = (req, res) => {
  res.redirect("/");
};
module.exports = {
  getHome,
  getAllChats,
  getContact,
  getLogin,
  getSuccess,
  postMsg,
  postUser,
};
