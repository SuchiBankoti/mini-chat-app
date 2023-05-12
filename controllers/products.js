// const db = require("../util/database");
const { readFile } = require("../models/model");

const Sequelize = require("sequelize");

const sequelize = new Sequelize("new_schema", "root", "s_qs@ym_i#22", {
  host: "localhost",
  dialect: "mysql",
});

const User = sequelize.define("users", {
  username: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  message: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

sequelize
  .sync()
  .then(() => console.log("Users table created successfully."))
  .catch((error) => console.log(`Error creating users table: ${error}`));

const getHome = (req, res) => {
  const home = readFile("index.html");
  res.send(home);
};

const getLogin = (req, res) => {
  const login = readFile("login.html");

  res.send(login);
};

const getAllChats = (req, res) => {
  User.findAll({
    attributes: ["username", "message"],
  })
    .then((users) => {
      const usersJSON = users.map((user) => user.toJSON());
      res.json(usersJSON);
    })
    .catch((error) => console.log(`Error reading users: ${error}`));
};
const postMsg = (req, res) => {
  const username = req.body.username;
  const message = req.body.message;
  User.create({
    username: `${username}`,
    message: `${message}`,
  })
    .then((user) => console.log("message created"))
    .catch((error) => console.log(`Error creating user: ${error}`));
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
