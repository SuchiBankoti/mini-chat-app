const path = require("path");
const rootDir = require("../util/path");
const fs = require("fs");
const { readFile, readFileData } = require("../models/model");
const getHome = (req, res) => {
  const home = readFile("index.html");
  res.send(home);
};
const getLogin = (req, res) => {
  const login = readFile("login.html");

  res.send(login);
};
const getContact = (req, res) => {
  const contact = readFile("contact.html");
  res.send(contact);
};

const getSuccess = (req, res) => {
  res.send("Form Successfully filled");
};

const getAllChats = (req, res) => {
  const data = readFileData("data.json");
  const chats = JSON.parse(data);
  res.json(chats);
};
const postMsg = (req, res) => {
  const username = req.body.username;
  const message = req.body.message;

  let data = readFileData("data.json");

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
